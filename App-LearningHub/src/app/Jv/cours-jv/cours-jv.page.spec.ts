import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursJvPage } from './cours-jv.page';

describe('CoursJvPage', () => {
  let component: CoursJvPage;
  let fixture: ComponentFixture<CoursJvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursJvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursJvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
