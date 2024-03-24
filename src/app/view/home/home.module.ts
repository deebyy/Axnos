import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HeroComponent } from './components/hero/hero.component';
import { BenifitsComponent } from './components/benifits/benifits.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    BenifitsComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
 exports:[
  FooterComponent
 ]
})
export class HomeModule { }
