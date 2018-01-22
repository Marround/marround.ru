import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-allinclusive',
  templateUrl: './allinclusive.component.html',
  styleUrls: ['./allinclusive.component.css']
})
export class AllinclusiveComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Тариф "All inclusive" - Услуги - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'All inclusive, Сопровождение сайтов, техническое обслуживание сайтов, наполнение сайтов, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Тариф на обслуживание сата "All inclusive", информация о тарифе, список видов работ'});
  }

  ngOnInit() {
  }

}
