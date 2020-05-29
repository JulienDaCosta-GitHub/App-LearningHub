import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetsDevPage } from './projets-dev.page';

describe('ProjetsDevPage', () => {
  let component: ProjetsDevPage;
  let fixture: ComponentFixture<ProjetsDevPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsDevPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetsDevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
