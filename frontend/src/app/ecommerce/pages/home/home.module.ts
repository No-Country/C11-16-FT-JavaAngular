import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, HeroComponent, SearcherComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
