import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SummaryPurchaseComponent } from './pages/summary-purchase/summary-purchase.component';
import { ViewTravellComponent } from './pages/view-travell/view-travell.component';
import { CardsTravellsComponent } from './components/cards-travells/cards-travells.component';

@NgModule({
  declarations: [
    EcommerceComponent,
    AboutUsComponent,
    SummaryPurchaseComponent,
    ViewTravellComponent,
    CardsTravellsComponent,
  ],
  imports: [CommonModule, EcommerceRoutingModule, SharedModule, HomeModule],
  exports: [CardsTravellsComponent],
})
export class EcommerceModule {}
