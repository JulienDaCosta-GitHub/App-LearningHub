import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursComdPage } from './cours-comd.page';

describe('CoursComdPage', () => {
  let component: CoursComdPage;
  let fixture: ComponentFixture<CoursComdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursComdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursComdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
