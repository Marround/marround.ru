import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

declare let $: any;

class Message {
  constructor(public neme: string,
              public email: string,
              public phone: string,
              public text: string) { }
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  message: Message;
  uName: string;
  email: string;
  phone: string;
  textMessage: string;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Контакты - Marround');
    this.meta.updateTag({name: 'keywords', content: 'Контакты, телефон, номер, skype, telegram, Marround'});
    this.meta.updateTag({name: 'description', content: 'Контактные данные Marround. 8(920) 205-51-25'});
  }

  ngOnInit() {
    $('body,html').animate({
      scrollTop: 0
    }, 200);
  }

  sendMessage(uName, email, phone, textMessage) {
    this.message = new Message(uName, email, phone, textMessage);
    console.log(this.message);
  }
}
