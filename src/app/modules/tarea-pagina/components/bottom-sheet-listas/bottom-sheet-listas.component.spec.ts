import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetListasComponent } from './bottom-sheet-listas.component';

describe('BottomSheetListasComponent', () => {
  let component: BottomSheetListasComponent;
  let fixture: ComponentFixture<BottomSheetListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetListasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomSheetListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
