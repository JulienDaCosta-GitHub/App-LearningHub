import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetsCreaPage } from './projets-crea.page';

describe('ProjetsCreaPage', () => {
  let component: ProjetsCreaPage;
  let fixture: ComponentFixture<ProjetsCreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsCreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetsCreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
