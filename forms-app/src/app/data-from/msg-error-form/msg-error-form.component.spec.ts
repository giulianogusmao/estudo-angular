import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgErrorFormComponent } from './msg-error-form.component';

describe('MsgErrorFormComponent', () => {
  let component: MsgErrorFormComponent;
  let fixture: ComponentFixture<MsgErrorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgErrorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgErrorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
