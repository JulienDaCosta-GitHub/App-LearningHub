import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutFormPage } from './ajout-form.page';

describe('AjoutFormPage', () => {
  let component: AjoutFormPage;
  let fixture: ComponentFixture<AjoutFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
