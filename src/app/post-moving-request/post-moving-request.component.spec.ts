import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMovingRequestComponent } from './post-moving-request.component';

describe('PostMovingRequestComponent', () => {
  let component: PostMovingRequestComponent;
  let fixture: ComponentFixture<PostMovingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMovingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMovingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
