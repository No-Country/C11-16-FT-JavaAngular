import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [EcommerceComponent],
  imports: [CommonModule, EcommerceRoutingModule, SharedModule],
})
export class EcommerceModule {}
