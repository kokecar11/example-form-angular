import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
