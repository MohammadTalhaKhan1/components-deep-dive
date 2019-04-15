import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css']
})
export class ServerElementsComponent implements OnInit {
  @Input() element: { type: string, name: string, content: string };
  @Output() childEvent = new EventEmitter();
  constructor() { }
  fireEvent() {
    this.childEvent.emit('Parent Event');
  }
  ngOnInit() {
  }


}
