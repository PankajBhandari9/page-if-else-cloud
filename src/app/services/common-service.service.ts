import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServcie {

  constructor(private _httpClient:HttpClient) { }

  getAppData(){
    return this._httpClient.get<any []>('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }
}
