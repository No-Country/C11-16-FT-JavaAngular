import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTravellComponent } from './view-travell.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTravellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTravellRoutingModule {}
