import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../services/api/api.service';
import { Component } from '@angular/core'

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {
  catsFacts:any;
  imagePath='';
  urlCat= 'https://api.thecatapi.com/v1/images/search?limit=1';
  constructor(private api:ApiService){
    // this.api.getRandomCatFact().subscribe((response: any)=>{
    //   this.catsFacts=response
    // })

    this.api.getDailyCatFacts().subscribe((response)=>{
      this.catsFacts=response
    })
  }
}

