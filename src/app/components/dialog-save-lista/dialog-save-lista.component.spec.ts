import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveListaComponent } from './dialog-save-lista.component';

describe('DialogSaveListaComponent', () => {
  let component: DialogSaveListaComponent;
  let fixture: ComponentFixture<DialogSaveListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSaveListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogSaveListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
