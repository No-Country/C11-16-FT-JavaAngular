import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSearcherComponent } from './components/form-searcher/form-searcher.component';
import { PackagesSectionComponent } from './components/packages-section/packages-section.component';
import { MostChosenComponent } from './components/most-chosen/most-chosen.component';
import { CommunityComponent } from './components/community/community.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, SearcherComponent, FormSearcherComponent, PackagesSectionComponent, MostChosenComponent, CommunityComponent, RatingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
