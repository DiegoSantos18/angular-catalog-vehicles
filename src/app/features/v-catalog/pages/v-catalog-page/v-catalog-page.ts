import { Component } from '@angular/core';
import { VAsidePanel } from "../../../../shared/components/v-aside-panel/v-aside-panel";
import { VBreadcrumbs } from "../../../../shared/components/v-breadcrumbs/v-breadcrumbs";
import { VFilter } from "../../components/v-filter/v-filter";

@Component({
  imports: [VAsidePanel, VBreadcrumbs, VFilter],
  selector: 'v-catalog-page',
  styleUrl: './v-catalog-page.scss',
  templateUrl: './v-catalog-page.html',
})
export class VCatalogPage {}
