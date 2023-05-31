import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrequentQuestionsRoutingModule } from './frequent-questions-routing.module';
import { FrequentQuestionsComponent } from './frequent-questions.component';

@NgModule({
  declarations: [FrequentQuestionsComponent],
  imports: [CommonModule, FrequentQuestionsRoutingModule],
})
export class FrequentQuestionsModule {}
