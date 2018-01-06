import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }
  sendMessage(uName, email, phone, textMessage) {
    this.message = new Message(uName, email, phone, textMessage);
    console.log(this.message);
  }
}
