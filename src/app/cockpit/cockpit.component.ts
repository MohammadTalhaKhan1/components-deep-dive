import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrint = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Input() parentData;
  
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }
  onAddBlueprint() {
    this.bluePrint.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }
  

}
