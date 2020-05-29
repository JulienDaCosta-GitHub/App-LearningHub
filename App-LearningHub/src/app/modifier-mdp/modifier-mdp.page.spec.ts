import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierMdpPage } from './modifier-mdp.page';

describe('ModifierMdpPage', () => {
  let component: ModifierMdpPage;
  let fixture: ComponentFixture<ModifierMdpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMdpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierMdpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
