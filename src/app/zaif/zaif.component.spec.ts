import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaifComponent } from './zaif.component';

describe('ZaifComponent', () => {
  let component: ZaifComponent;
  let fixture: ComponentFixture<ZaifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
