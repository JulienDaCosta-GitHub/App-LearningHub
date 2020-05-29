import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursDevPage } from './cours-dev.page';

describe('CoursDevPage', () => {
  let component: CoursDevPage;
  let fixture: ComponentFixture<CoursDevPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursDevPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursDevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
