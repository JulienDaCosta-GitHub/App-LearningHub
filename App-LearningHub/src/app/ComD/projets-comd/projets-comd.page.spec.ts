import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetsComdPage } from './projets-comd.page';

describe('ProjetsComdPage', () => {
  let component: ProjetsComdPage;
  let fixture: ComponentFixture<ProjetsComdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsComdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetsComdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
