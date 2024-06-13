import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditCateComponent } from './admin-edit-cate.component';

describe('AdminEditCateComponent', () => {
  let component: AdminEditCateComponent;
  let fixture: ComponentFixture<AdminEditCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditCateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEditCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
