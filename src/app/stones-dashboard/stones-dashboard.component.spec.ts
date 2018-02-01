import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonesDashboardComponent } from './stones-dashboard.component';

describe('StonesDashboardComponent', () => {
  let component: StonesDashboardComponent;
  let fixture: ComponentFixture<StonesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
