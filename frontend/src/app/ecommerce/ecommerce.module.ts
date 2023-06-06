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
import { OptionFilterPipe } from '../pipes/option-filter.pipe';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';
import { TermAndConditionsComponent } from './pages/term-and-conditions/term-and-conditions.component';
import { DateTransformPipe } from '../pipes/date-transform.pipe';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    EcommerceComponent,
    AboutUsComponent,
    SummaryPurchaseComponent,
    ViewTravellComponent,
    CardsTravellsComponent,
    OptionFilterPipe,
    DateTransformPipe,
    PrivacyPoliciesComponent,
    TermAndConditionsComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, EcommerceRoutingModule, SharedModule, HomeModule],
  exports: [CardsTravellsComponent, LoadingComponent],
})
export class EcommerceModule {}
