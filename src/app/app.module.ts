import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SectionsModule, routs} from './sections/index';
import { AppComponent } from './app.component';
import {NavbarComponent} from './globcomp/navbar/navbar.component';
import {FooterComponent} from './globcomp/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {LoadJsonService} from './srvice/loadjson.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routs),
    BrowserModule.withServerTransition({appId: 'marround'}),
    BrowserAnimationsModule,
    HttpModule,
    SectionsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [LoadJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
