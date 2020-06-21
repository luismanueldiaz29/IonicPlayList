import { Component, OnInit } from '@angular/core';
import { isEmptyExpression } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-music',
  templateUrl: './detail-music.page.html',
  styleUrls: ['./detail-music.page.scss'],
})
export class DetailMusicPage implements OnInit {
  name : string;
  duration : string;
  imagen : string;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    this.get();
  }

  get(){
    if(localStorage.getItem('name') != null){
      this.name = localStorage.getItem('name');localStorage.removeItem("name");
      this.duration = localStorage.getItem('duration');localStorage.removeItem("duration");
      this.imagen = localStorage.getItem('imagen');localStorage.removeItem("imagen");
    }else{
      this.router.navigate(['/']);
    }
  }
}
