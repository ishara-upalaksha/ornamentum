import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableTranslationsComponent,
  DataTableTranslationsNoDataUsageComponent,
  DataTableTranslationsPaginationUsageComponent
} from './index';

import { DataTableTranslationsRoutingModule } from './data-table-translations-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table translations module.
 * @class DataTableTranslationsModule
 */
@NgModule({
  declarations: [
    DataTableTranslationsComponent,
    DataTableTranslationsNoDataUsageComponent,
    DataTableTranslationsPaginationUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableTranslationsRoutingModule
  ],
  providers: []
})
export class DataTableTranslationsModule {
}
