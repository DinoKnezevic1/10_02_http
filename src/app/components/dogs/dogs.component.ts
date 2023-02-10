import { ApiService } from './../../services/api/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {
  
  dogsFacts:any;
  constructor(private api:ApiService){
    this.api.getRandomDogFact().subscribe((response)=>{
      this.dogsFacts=response
    })
  }

}
