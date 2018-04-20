import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs.Rx';
import { WebsocketService } from './websocket.service';

const ZAIF_URL = 'ws://ws.zaif.jp/stream?currency_pair=btc_jpy';

export interface Message {
    bids: Object[],
    asks: Object[],
}

@Injectable()
export class ZaifService {
    public  messages: Subject<Message>;

    constructor(wsService:WebsocketService){
      this.messages = <Subject<Message>>wsService
        .connect(ZAIF_URL)
        .map((res:MessageEvent): Message =>{
          let data = JSON.parse(res.data);
          return {
            bids:data.bids,
            asks:data.asks
          }
        });
    }
}
