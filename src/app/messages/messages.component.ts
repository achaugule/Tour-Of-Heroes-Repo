import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //constructor() { }
  //The messageService property should be public because you're going to bind it to template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
