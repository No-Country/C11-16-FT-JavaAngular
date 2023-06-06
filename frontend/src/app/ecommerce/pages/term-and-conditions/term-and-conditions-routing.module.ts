import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermAndConditionsComponent } from './term-and-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: TermAndConditionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermAndConditionsRoutingModule {}
