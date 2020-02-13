import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHttpRequestComponent } from './get-http-request.component';

describe('GetHttpRequestComponent', () => {
  let component: GetHttpRequestComponent;
  let fixture: ComponentFixture<GetHttpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHttpRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
