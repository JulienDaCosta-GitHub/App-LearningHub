import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierProfilPage } from './modifier-profil.page';

describe('ModifierProfilPage', () => {
  let component: ModifierProfilPage;
  let fixture: ComponentFixture<ModifierProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
