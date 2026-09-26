import * as dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.local' });
}

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const allowedOrigin = 'https://diegosantos18.github.io';
  const origin = req.headers.origin;

  if (origin === allowedOrigin || origin?.startsWith('http://localhost:')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-app-secret');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, prompt, provider = 'gemini' } = req.body;
    const chatHistory = messages || (prompt ? [{ role: 'user', content: prompt }] : []);

    if (chatHistory.length === 0) {
      return res.status(400).json({ error: 'Mensagens ou prompt são obrigatórios' });
    }

    let text = '';

    if (provider === 'gemini') {
      const apiKey = process.env.GEMINI_API_KEY;
      const modelName = process.env.GEMINI_MODEL;
      if (!apiKey || !modelName) {
        return res.status(500).json({ error: 'Chave do Gemini ou modelo não configurados no servidor' });
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });

      const historyFormatted = chatHistory.slice(0, -1).map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const lastMessage = chatHistory[chatHistory.length - 1].content;

      const chat = model.startChat({ history: historyFormatted });
      const result = await chat.sendMessage(lastMessage);
      text = result.response.text();

    } else if (provider === 'chatgpt' || provider === 'copilot') {
      const envKey = provider === 'chatgpt' ? 'CHATGPT_API_KEY' : 'COPILOT_API_KEY';
      const apiKey = process.env[envKey];
      const modelName = process.env[`${provider.toUpperCase()}_MODEL`];

      if (!apiKey || !modelName) {
        return res.status(500).json({ error: `Chave do ${provider} ou modelo não configurados no servidor` });
      }

      const openai = new OpenAI({ apiKey });

      const formattedMessages = chatHistory.map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'assistant' as const,
        content: m.content
      }));

      const completion = await openai.chat.completions.create({
        model: modelName,
        messages: formattedMessages
      });
      text = completion.choices[0]?.message?.content || `Sem resposta do ${provider}.`;

    } else {
      return res.status(400).json({ error: 'Provedor de IA desconhecido' });
    }

    return res.status(200).json({ text });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Erro interno ao processar o chat' });
  }
}
