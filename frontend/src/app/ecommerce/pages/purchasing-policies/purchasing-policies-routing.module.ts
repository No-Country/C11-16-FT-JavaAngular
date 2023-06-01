import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasingPoliciesComponent } from './purchasing-policies.component';

const routes: Routes = [
  {
    path: '',
    component: PurchasingPoliciesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasingPoliciesRoutingModule {}
