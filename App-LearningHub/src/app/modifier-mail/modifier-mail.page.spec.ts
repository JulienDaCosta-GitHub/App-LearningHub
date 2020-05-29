import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierMailPage } from './modifier-mail.page';

describe('ModifierMailPage', () => {
  let component: ModifierMailPage;
  let fixture: ComponentFixture<ModifierMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
