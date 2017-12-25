import {LandingpageComponent} from './landingpage/landingpage.component';
import {PriceComponent} from './price/price.component';
import {SpaComponent} from './spa/spa.component';
import {SitecutawayComponent} from './sitecutaway/sitecutaway.component';
import {SitecatalogComponent} from './sitecatalog/sitecatalog.component';
import {StandartComponent} from './standart/standart.component';
import {AllinclusiveComponent} from './allinclusive/allinclusive.component';
import {HostingComponent} from './hosting/hosting.component';
import {DomainnameComponent} from './domainname/domainname.component';


export const staticPagesRouts = [
  {path: 'price', component: PriceComponent},
  {path: 'landingpage', component: LandingpageComponent},
  {path: 'spa', component: SpaComponent},
  {path: 'sitecutaway', component: SitecutawayComponent},
  {path: 'sitecatalog', component: SitecatalogComponent},
  {path: 'standart', component: StandartComponent},
  {path: 'allinclusive', component: AllinclusiveComponent},
  {path: 'hosting', component: HostingComponent},
  {path: 'domain', component: DomainnameComponent}
]
