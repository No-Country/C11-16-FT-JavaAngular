import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';

const routes: Routes = [
  {
    path: '',
    component: EcommerceComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'viajes',
        loadChildren: () =>
          import('./pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'preguntas-frecuentes',
        loadChildren: () =>
          import('./pages/frequent-questions/frequent-questions.module').then(
            (m) => m.FrequentQuestionsModule
          ),
      },
      {
        path: 'politcas-de-compra',
        loadChildren: () =>
          import('./pages/purchasing-policies/purchasing-policies.module').then(
            (m) => m.PurchasingPoliciesModule
          ),
      },
      {
        path: 'contacto',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'sobre-nosotros',
        loadChildren: () =>
          import('./pages/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'pago',
        loadChildren: () =>
          import('./pages/payment/payment.module').then((m) => m.PaymentModule),
      },
      {
        path: 'resumen',
        loadChildren: () =>
          import('./pages/summary-purchase/summary-purchase.module').then(
            (m) => m.SummaryPurchaseModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}
