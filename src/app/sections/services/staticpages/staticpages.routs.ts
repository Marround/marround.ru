import {LandingpageComponent} from './landingpage/landingpage.component';
import {PriceComponent} from './price/price.component';
import {SpaComponent} from './spa/spa.component';
import {SitecutawayComponent} from './sitecutaway/sitecutaway.component';
import {SitecatalogComponent} from './sitecatalog/sitecatalog.component';
import {StandartComponent} from './standart/standart.component';
import {AllinclusiveComponent} from './allinclusive/allinclusive.component';
import {HostingComponent} from './hosting/hosting.component';
import {DomainnameComponent} from './domainname/domainname.component';
import {SeoComponent} from './seo/seo.component';


export const staticPagesRouts = [
  {path: 'price', component: PriceComponent},
  {path: 'landingpage', component: LandingpageComponent},
  {path: 'spa', component: SpaComponent},
  {path: 'sitecutaway', component: SitecutawayComponent},
  {path: 'sitecatalog', component: SitecatalogComponent},
  {path: 'standard', component: StandartComponent},
  {path: 'allinclusive', component: AllinclusiveComponent},
  {path: 'seo', component: SeoComponent},
  {path: 'hosting', component: HostingComponent},
  {path: 'domain', component: DomainnameComponent}
]
