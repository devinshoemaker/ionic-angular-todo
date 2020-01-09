import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirebaseUIComponent } from './firebase-ui.component';

describe('FirebaseUIComponent', () => {
  let component: FirebaseUIComponent;
  let fixture: ComponentFixture<FirebaseUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseUIComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
