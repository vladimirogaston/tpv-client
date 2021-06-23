import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelYesDialogComponent } from './cancel-yes-dialog.component';

describe('CancelYesDialogComponent', () => {
  let component: CancelYesDialogComponent;
  let fixture: ComponentFixture<CancelYesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelYesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelYesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
