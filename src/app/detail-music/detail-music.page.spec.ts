import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMusicPage } from './detail-music.page';

describe('DetailMusicPage', () => {
  let component: DetailMusicPage;
  let fixture: ComponentFixture<DetailMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
