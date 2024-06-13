import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListCateComponent } from './admin-list-cate.component';

describe('AdminListCateComponent', () => {
  let component: AdminListCateComponent;
  let fixture: ComponentFixture<AdminListCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminListCateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminListCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
