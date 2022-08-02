import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCommonComponent } from './not-common.component';

describe('NotCommonComponent', () => {
  let component: NotCommonComponent;
  let fixture: ComponentFixture<NotCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
