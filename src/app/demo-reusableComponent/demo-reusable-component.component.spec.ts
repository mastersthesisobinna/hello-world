import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReusableComponentComponent } from './demo-reusable-component.component';

describe('DemoReusableComponentComponent', () => {
  let component: DemoReusableComponentComponent;
  let fixture: ComponentFixture<DemoReusableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoReusableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReusableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
