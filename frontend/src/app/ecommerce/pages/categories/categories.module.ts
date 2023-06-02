import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsTravellsComponent } from '../../components/cards-travells/cards-travells.component';
import { HomeModule } from '../home/home.module';
import { EcommerceModule } from '../../ecommerce.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    HomeModule,
    EcommerceModule,
  ],
})
export class CategoriesModule {}
