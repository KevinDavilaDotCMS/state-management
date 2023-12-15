import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisorComponent } from './emisor.component';

describe('EmisorComponent', () => {
  let component: EmisorComponent;
  let fixture: ComponentFixture<EmisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmisorComponent]
    });
    fixture = TestBed.createComponent(EmisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
