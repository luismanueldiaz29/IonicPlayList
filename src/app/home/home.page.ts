import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',    
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tracks : any;
  track=[];
  ArryImage = [];
  imagen = []
  constructor(
    private serviceApiService : ServiceApiService,
    private router : Router
  ) {}

  ngOnInit(){
    this.get();
  }
  
  get(){
    this.serviceApiService.getAll().subscribe(
      (data) => {
        this.tracks = data["tracks"]
        this.track = this.tracks["track"]
        this.ArryImage = this.track[0]["image"]
        this.imagen = this.ArryImage[0]["#text"]
        console.log(this.track[0]["image"])
      },(error)=>{
        console.log("error al consultar la api")
      }
    );
  }

  detail(name : string, duration: string, imagen:string){
    console.log('cliked')
    localStorage.setItem('name', name);
    localStorage.setItem('duration', duration);
    localStorage.setItem('imagen', imagen);
    this.router.navigate(['/detail-music']);
  }

}
