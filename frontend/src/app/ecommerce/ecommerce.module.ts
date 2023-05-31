import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SummaryPurchaseComponent } from './pages/summary-purchase/summary-purchase.component';

@NgModule({
  declarations: [EcommerceComponent, AboutUsComponent, SummaryPurchaseComponent],
  imports: [CommonModule, EcommerceRoutingModule, SharedModule, HomeModule],
})
export class EcommerceModule {}
