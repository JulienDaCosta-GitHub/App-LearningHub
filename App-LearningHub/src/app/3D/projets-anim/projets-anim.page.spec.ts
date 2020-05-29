import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetsAnimPage } from './projets-anim.page';

describe('ProjetsAnimPage', () => {
  let component: ProjetsAnimPage;
  let fixture: ComponentFixture<ProjetsAnimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsAnimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetsAnimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
