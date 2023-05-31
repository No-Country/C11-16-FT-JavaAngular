import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasingPoliciesRoutingModule } from './purchasing-policies-routing.module';
import { PurchasingPoliciesComponent } from './purchasing-policies.component';

@NgModule({
  declarations: [PurchasingPoliciesComponent],
  imports: [CommonModule, PurchasingPoliciesRoutingModule],
})
export class PurchasingPoliciesModule {}
