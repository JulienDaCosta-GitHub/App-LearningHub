import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierNomPage } from './modifier-nom.page';

describe('ModifierNomPage', () => {
  let component: ModifierNomPage;
  let fixture: ComponentFixture<ModifierNomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierNomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierNomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
