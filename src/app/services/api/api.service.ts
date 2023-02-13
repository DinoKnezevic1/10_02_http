import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  url = 'https://dog-api.kinduff.com/api/facts?number=5';
  getRandomDogFact() {
    return this.http.get(this.url);
    // .subscribe((response) => {
    //   console.log(response);
    // });
  }
  urlCat= 'https://api.thecatapi.com/v1/images/search?limit=1';
  urlCatFacts='https://cat-fact.herokuapp.com/facts';
  getRandomCatImage(){
    return this.http.get(this.urlCat);
  }
  getDailyCatFacts(){
    return this.http.get(this.urlCatFacts);
  }
}
