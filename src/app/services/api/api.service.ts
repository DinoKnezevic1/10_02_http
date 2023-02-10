import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  url = 'https://dog-api.kinduff.com/api/facts?number=5';
  getRandomDogFact() {
    this.http.get(this.url).subscribe((response) => {
      console.log(response);
    });
  }
}
