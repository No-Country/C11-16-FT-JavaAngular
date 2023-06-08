import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CanRegister } from '../auth/guards/can-register.guard';

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
        canActivate: [AuthGuard],
        canMatch: [AuthGuard],
      },
      {
        path: 'resumen',
        loadChildren: () =>
          import('./pages/summary-purchase/summary-purchase.module').then(
            (m) => m.SummaryPurchaseModule
          ),
        canActivate: [AuthGuard],
        canMatch: [AuthGuard],
      },
      {
        path: 'paquetes',
        loadChildren: () =>
          import('./pages/packages/packages.module').then(
            (m) => m.PackagesModule
          ),
      },
      {
        path: 'paquete/:id',
        loadChildren: () =>
          import('./pages/view-travell/view-travell.module').then(
            (m) => m.ViewTravellModule
          ),
      },
      {
        path: 'politicas-de-privacidad',
        loadChildren: () =>
          import('./pages/privacy-policies/privacy-policies.module').then(
            (m) => m.PrivacyPoliciesModule
          ),
      },
      {
        path: 'terminos-y-condiciones',
        loadChildren: () =>
          import('./pages/term-and-conditions/term-and-conditions.module').then(
            (m) => m.TermAndConditionsModule
          ),
      },
      {
        path: 'registrarse',
        loadChildren: () =>
          import('../auth/auth.module').then((m) => m.AuthModule),
        canActivate: [CanRegister],
        canMatch: [CanRegister],
      },
      {
        path: 'ayuda',
        redirectTo: 'preguntas-frecuentes',
      },
      {
        path: 'recomendaciones',
        redirectTo: 'paquetes',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}
