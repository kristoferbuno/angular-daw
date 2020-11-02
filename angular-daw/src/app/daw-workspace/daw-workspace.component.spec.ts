import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DawWorkspaceComponent } from './daw-workspace.component';

describe('DawWorkspaceComponent', () => {
  let component: DawWorkspaceComponent;
  let fixture: ComponentFixture<DawWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DawWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DawWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
