import { Component, OnInit } from '@angular/core';
import {IPricelist} from '../../../../srvice/pricelist';
import {LoadJsonService} from '../../../../srvice/loadjson.service';

@Component({
  moduleId: module.id,
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  pricelist: IPricelist;

  priceUrl = '/assets/json/price.json';

  errorMessage: string;

  constructor(private jsonService: LoadJsonService) { }

  ngOnInit() {

    this.jsonService.getJSON(this.priceUrl).subscribe(data => this.pricelist = data.pricelist, error => this.errorMessage = < any > error);

  }

}
