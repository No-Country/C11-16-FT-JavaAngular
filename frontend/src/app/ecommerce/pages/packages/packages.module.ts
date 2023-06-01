import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { EcommerceModule } from '../../ecommerce.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [PackagesComponent],
  imports: [CommonModule, PackagesRoutingModule, EcommerceModule, HomeModule],
})
export class PackagesModule {}
