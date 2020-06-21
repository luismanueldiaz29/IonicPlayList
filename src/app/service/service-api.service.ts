import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })  
};

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  //transicion de entrada ionicViewWiEnter
  UrlSearch : string;
  Url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b284db959637031077380e7e2c6f2775&format=json';
  
  constructor(
    private http : HttpClient
  ){}

  getAll(){
    return this.http.get(this.Url);
  }

  get(music : string){
    //this.UrlSearch ='http://ws.audioscrobbler.com/2.0/?method=track.search&track=tusa&api_key=b284db959637031077380e7e2c6f2775&format=json'
    this.UrlSearch = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track='+music+'&api_key=b284db959637031077380e7e2c6f2775&format=json';
    return this.http.get(this.UrlSearch);
  }

}
