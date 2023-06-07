import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, UserMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    ReactiveFormsModule,
    PrimeNgModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
