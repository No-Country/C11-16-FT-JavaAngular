import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUnderConstructionComponent } from './page-under-construction.component';

const routes: Routes = [
  {
    path: '',
    component: PageUnderConstructionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageUnderConstructionRoutingModule {}
