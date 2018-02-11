import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './services/services.component';
import {ContactsComponent} from './contacts/contacts.component';
import {staticPagesRouts} from './services/staticpages/index';
import {MainComponent} from './services/main/main.component';

export const routs = [
  {path: '', component: HomeComponent},
  {path: 'services', component: MainComponent, pathMatch: 'full'},
  {path: 'services', component: ServicesComponent, children: staticPagesRouts},
  {path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
]
