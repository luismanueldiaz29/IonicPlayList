import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMusicPage } from './detail-music.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMusicPageRoutingModule {}
