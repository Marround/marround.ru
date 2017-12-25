import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './services/services.component';
import {ContactsComponent} from './contacts/contacts.component';
import {staticPagesRouts} from './services/staticpages/index';

export const routs = [
  {path: '', component: HomeComponent},
  {path: 'services', redirectTo: '/services/price', pathMatch: 'full'},
  {path: 'services', component: ServicesComponent, children: staticPagesRouts},
  {path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
]
