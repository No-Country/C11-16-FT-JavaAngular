import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { EcommerceModule } from '../../ecommerce.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    EcommerceModule,
    ReactiveFormsModule,
  ],
})
export class PaymentModule {}
