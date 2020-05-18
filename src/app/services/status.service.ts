import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private errorsList = [];
  get lastError() {
    return this.errorsList[this.errorsList.length - 1];
  }
  get errors() {
    return this.errorsList;
  }
  constructor() { }

  public addError(error) {
    this.errorsList.push(error);
    console.error('ERROR:', error);
  }
}
