import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [EcommerceComponent],
  imports: [CommonModule, EcommerceRoutingModule, SharedModule, HomeModule],
})
export class EcommerceModule {}
