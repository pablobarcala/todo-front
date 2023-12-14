import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditListaComponent } from './dialog-edit-lista.component';

describe('DialogEditListaComponent', () => {
  let component: DialogEditListaComponent;
  let fixture: ComponentFixture<DialogEditListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
