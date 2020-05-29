import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursCreaPage } from './cours-crea.page';

describe('CoursCreaPage', () => {
  let component: CoursCreaPage;
  let fixture: ComponentFixture<CoursCreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursCreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursCreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
