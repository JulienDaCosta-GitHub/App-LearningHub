import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursAnimPage } from './cours-anim.page';

describe('CoursAnimPage', () => {
  let component: CoursAnimPage;
  let fixture: ComponentFixture<CoursAnimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursAnimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursAnimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
