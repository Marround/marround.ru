import { Component, OnInit } from '@angular/core';
declare let $: any;
export class Message {
  constructor(public neme: string,
              public email: string,
              public phone: string,
              public text: string) { }
}
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: Message;

  constructor() { }

  ngOnInit() {
    window.scroll(0, 15);
    window.scroll(0, 0);
  }
  goToNext(nextElem) {
    const nextElementY = document.getElementById(nextElem).offsetTop;
    $('body,html').animate({
      scrollTop: nextElementY
    }, 500);
  }
  sendMessage(uName, email, phone, textMessage) {
    this.message = new Message(uName, email, phone, textMessage);
    console.log(this.message);
  }
}
