import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListasComponent } from './sidenav-listas.component';

describe('SidenavListasComponent', () => {
  let component: SidenavListasComponent;
  let fixture: ComponentFixture<SidenavListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavListasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
