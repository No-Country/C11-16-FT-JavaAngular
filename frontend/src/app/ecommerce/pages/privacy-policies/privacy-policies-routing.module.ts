import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPoliciesComponent } from './privacy-policies.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPoliciesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyPoliciesRoutingModule {}
