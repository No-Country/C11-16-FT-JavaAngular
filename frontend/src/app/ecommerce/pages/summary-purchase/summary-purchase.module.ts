import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryPurchaseRoutingModule } from './summary-purchase-routing.module';
import { HomeModule } from '../home/home.module';
import { EcommerceModule } from '../../ecommerce.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SummaryPurchaseRoutingModule,
    HomeModule,
    EcommerceModule,
  ],
})
export class SummaryPurchaseModule {}
