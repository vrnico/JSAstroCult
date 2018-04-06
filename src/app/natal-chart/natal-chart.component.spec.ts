import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatalChartComponent } from './natal-chart.component';

describe('NatalChartComponent', () => {
  let component: NatalChartComponent;
  let fixture: ComponentFixture<NatalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
