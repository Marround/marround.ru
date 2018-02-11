import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
// import { Routes, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from '@angular/router';
import {staticPagesRouts, StaticPagesModule} from './services/staticpages/index';
import {MainComponent} from './services/main/main.component';



@NgModule({
  imports: [
    RouterModule.forChild(staticPagesRouts),
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
    FormsModule,
    MatSidenavModule,
    StaticPagesModule
  ],
  declarations: [HomeComponent, ServicesComponent, ContactsComponent, MainComponent],
  exports: [HomeComponent, ServicesComponent, ContactsComponent, MainComponent]
})

export class SectionsModule {

}
