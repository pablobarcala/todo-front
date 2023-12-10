import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPaginaComponent } from './tarea-pagina.component';

describe('TareaPaginaComponent', () => {
  let component: TareaPaginaComponent;
  let fixture: ComponentFixture<TareaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaPaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
