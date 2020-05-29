import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierPrenomPage } from './modifier-prenom.page';

describe('ModifierPrenomPage', () => {
  let component: ModifierPrenomPage;
  let fixture: ComponentFixture<ModifierPrenomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPrenomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierPrenomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
