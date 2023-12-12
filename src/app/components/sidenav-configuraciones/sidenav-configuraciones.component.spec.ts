import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavConfiguracionesComponent } from './sidenav-configuraciones.component';

describe('SidenavConfiguracionesComponent', () => {
  let component: SidenavConfiguracionesComponent;
  let fixture: ComponentFixture<SidenavConfiguracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavConfiguracionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavConfiguracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
