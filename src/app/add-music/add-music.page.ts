import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { Router } from '@angular/router';

export interface Music{
  name : string;
  artist : string;
}

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.page.html',
  styleUrls: ['./add-music.page.scss'],
})

export class AddMusicPage implements OnInit {
  results : any;
  trackmatches : any;
  track = [];
  music : Music;
  public cancionBuscar : string;
  name : string; artista : string;
  constructor(
    private apiService : ServiceApiService,
    private router : Router
  ) { }

  ngOnInit() {
    //this.Buscar();
  }

  Buscar(){
    if(this.cancionBuscar != null && this.cancionBuscar != ""){
      this.apiService.get(this.cancionBuscar).subscribe(
        (data) =>{
          this.results = data['results'];
          this.trackmatches = this.results['trackmatches'];
          this.track = this.trackmatches['track'];
          this.name = this.track[0]['name'];
          this.artista = this.track[0]['artist'];
          // console.log(this.music.name)
        },(error) => {
          console.log("error al consumir la api")
        }
      );
    }
  }


}
