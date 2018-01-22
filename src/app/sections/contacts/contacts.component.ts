import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
export class Message {
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
    this.title.setTitle('Контакты - Marround - частный вэб мастер - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Контакты, телефон, Email, skype, telegram, Marround, частный вэб мастер, Белгород'});
    this.meta.updateTag({name: 'description', content: 'Страница контактов частного вэб мастера Marround Белгород'});
  }

  ngOnInit() {
  }
  sendMessage(uName, email, phone, textMessage) {
    this.message = new Message(uName, email, phone, textMessage);
    console.log(this.message);
  }
}
