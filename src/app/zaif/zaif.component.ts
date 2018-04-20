import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { ZaifService } from '../services/zaif.service';

@Component({
  selector: 'zaif',
  templateUrl: './zaif.component.html',
  styleUrls: ['./zaif.component.css']
})
export class ZaifComponent implements OnInit {

  bids: number[];
  asks: number[];
  ii;
  constructor(private zaif:ZaifService) {
    this.ii = zaif.messages.subscribe(msg => {
      this.bids = msg.bids;
      this.asks = msg.asks;
      // console.log('Response: ' + msg.bids);
      // console.log('Response: ' + msg.asks);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.ii.unsubscribe();
  }
}
