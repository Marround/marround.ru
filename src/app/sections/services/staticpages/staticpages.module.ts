import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PriceComponent } from './price/price.component';
import { SpaComponent } from './spa/spa.component';
import { SitecutawayComponent } from './sitecutaway/sitecutaway.component';
import { SitecatalogComponent } from './sitecatalog/sitecatalog.component';
import { StandartComponent } from './standart/standart.component';
import { AllinclusiveComponent } from './allinclusive/allinclusive.component';
import { HostingComponent } from './hosting/hosting.component';
import { DomainnameComponent } from './domainname/domainname.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [LandingpageComponent, PriceComponent, SpaComponent, SitecutawayComponent, SitecatalogComponent, StandartComponent, AllinclusiveComponent, HostingComponent, DomainnameComponent],
  exports: [LandingpageComponent, PriceComponent, SpaComponent, SitecutawayComponent, SitecatalogComponent, StandartComponent, AllinclusiveComponent, HostingComponent, DomainnameComponent]
})

export class StaticPagesModule {

}
