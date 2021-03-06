import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableFilteringComponent, FilterDropdownUsageComponent, FilterTextBoxUsageComponent } from './index';

import { DataTableFilteringRoutingModule } from './data-table-filtering-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table filtering module.
 * @class DataTableFilteringModule
 */
@NgModule({
  declarations: [
    DataTableFilteringComponent,
    FilterDropdownUsageComponent,
    FilterTextBoxUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableFilteringRoutingModule
  ],
  providers: []
})
export class DataTableFilteringModule {
}
