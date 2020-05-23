import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private errorsList: any[] = [];
  private warningList: any[] = [];
  get lastError() {
    return this.errorsList[this.errorsList.length - 1];
  }
  get errors() {
    return this.errorsList;
  }

  get lastWarning() {
    return this.warningList[this.warningList.length - 1];
  }
  constructor() { }

  public addError(error: any) {
    this.errorsList.push(error);
  }

  public addWarning(warning: any) {
    this.warningList.push(warning);
  }
}
