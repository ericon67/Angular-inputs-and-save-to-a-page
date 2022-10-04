import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlog1Component } from './my-blog1.component';

describe('MyBlog1Component', () => {
  let component: MyBlog1Component;
  let fixture: ComponentFixture<MyBlog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBlog1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
