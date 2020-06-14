import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any, isObject = false) {
    if (isObject) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  get(key, type = 'string') {
    const value = localStorage.getItem(key);
    switch (type) {
      case 'boolean':
        return value === 'true' ? true : false;
      case 'object':
        return JSON.parse(value);
    }
    return value;
  }
}
