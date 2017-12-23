import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SectionsModule, routs} from './sections/index';
import { AppComponent } from './app.component';
import {NavbarComponent} from './globcomp/navbar/navbar.component';
import {FooterComponent} from './globcomp/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routs),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SectionsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
