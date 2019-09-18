import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Don } from './don.model';

@Injectable({
  providedIn: 'root'
})
export class DonService {

  constructor(private http: HttpClient) { }

  promettreDon(don: Don){
    var body = {
      IDDonateur: don.IDDonateur,
      donArticles: don.donArticles
    }

    return this.http.post(environment.apiURL+'/don', body);
  }

}
