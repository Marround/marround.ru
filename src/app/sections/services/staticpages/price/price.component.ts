import { Component, OnInit } from '@angular/core';
import {IPricelist} from '../../../../srvice/pricelist';
import {LoadJsonService} from '../../../../srvice/loadjson.service';
import {Meta, Title} from '@angular/platform-browser';


@Component({
  moduleId: module.id,
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  pricelist: IPricelist;

  priceUrl: string;

  errorMessage: string;

  constructor(private jsonService: LoadJsonService, private title: Title, private meta: Meta) {
    this.title.setTitle('Прайслист - Услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Прайслист, цены, тарифы, разработка сайтов, создание сайта, сопровождение сайта, публикация сайта, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Прайслист, полный перечень оказываемых услуг'});
  }

  ngOnInit() {
    this.priceUrl = 'http://marround.ru/assets/json/price.json';
    this.jsonService.getJSON(this.priceUrl).subscribe(data => this.pricelist = data.pricelist, error => this.errorMessage = < any > error);
  }

}
