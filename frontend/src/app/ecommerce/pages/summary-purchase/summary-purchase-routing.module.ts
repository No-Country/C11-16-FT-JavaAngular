import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryPurchaseComponent } from './summary-purchase.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryPurchaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryPurchaseRoutingModule {}
