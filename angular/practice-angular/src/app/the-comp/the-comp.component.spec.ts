import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCompComponent } from './the-comp.component';

describe('TheCompComponent', () => {
  let component: TheCompComponent;
  let fixture: ComponentFixture<TheCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
