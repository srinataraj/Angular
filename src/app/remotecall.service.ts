import { Injectable } from '@angular/core';

@Injectable()
export class RemotecallService {

  constructor() { }
  callremote = function() {
    console.log("i am in service");

  }
}
