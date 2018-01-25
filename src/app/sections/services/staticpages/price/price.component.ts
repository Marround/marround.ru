import { Component, OnInit } from '@angular/core';
import {IPricelist} from '../../../../srvice/pricelist';
import {LoadJsonService} from '../../../../srvice/loadjson.service';
import {makeStateKey, Meta, Title, TransferState} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';

const PRICE_KEY = makeStateKey('price');

@Component({
  moduleId: module.id,
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  pricelist: IPricelist;
  // priceUrl: string;
  //
  // errorMessage: string;

  constructor(private title: Title, private meta: Meta, private http: HttpClient, private state: TransferState) {
    this.title.setTitle('Прайслист - Услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Прайслист, цены, тарифы, разработка сайтов, создание сайта, сопровождение сайта, публикация сайта, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Прайслист, полный перечень оказываемых услуг'});
  }

  ngOnInit() {
    this.pricelist = this.state.get(PRICE_KEY, null as any);

    if (!this.pricelist) {
      this.http
        .get('http://marround.ru/assets/json/price.json')
        .map((response: Response) => response.json())
        .subscribe(data => {
          data.then(value => {
            this.pricelist = value.pricelist;
            this.state.set(PRICE_KEY, value.pricelist as any);
          });
        });
    }

    // this.priceUrl = 'http://' + location.hostname + '/assets/json/price.json';
    // this.jsonService.getJSON(this.priceUrl).subscribe(data => this.pricelist = data.pricelist, error => this.errorMessage = < any > error);
  }

}
