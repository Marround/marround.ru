import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

declare let $: any;

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.css']
})
export class SeoComponent implements OnInit {


  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SEO - Услуги - Marround');
    this.meta.updateTag({
      name: 'keywords',
      content: ''
    });
    this.meta.updateTag({
      name: 'description',
      content: ''});
  }

  ngOnInit() {
    this.toTop();
  }
  toTop() {
    $('body,html').animate({
      scrollTop: 0
    }, 0);
  }
}
