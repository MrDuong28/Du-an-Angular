import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCateComponent } from './admin-add-cate.component';

describe('AdminAddCateComponent', () => {
  let component: AdminAddCateComponent;
  let fixture: ComponentFixture<AdminAddCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddCateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
