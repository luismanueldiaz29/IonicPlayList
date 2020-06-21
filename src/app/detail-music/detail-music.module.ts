import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMusicPageRoutingModule } from './detail-music-routing.module';

import { DetailMusicPage } from './detail-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMusicPageRoutingModule
  ],
  declarations: [DetailMusicPage]
})
export class DetailMusicPageModule {}
