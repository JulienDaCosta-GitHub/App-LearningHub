import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetsJvPage } from './projets-jv.page';

describe('ProjetsJvPage', () => {
  let component: ProjetsJvPage;
  let fixture: ComponentFixture<ProjetsJvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsJvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetsJvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
