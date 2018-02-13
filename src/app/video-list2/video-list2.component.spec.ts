import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoList2Component } from './video-list2.component';

describe('VideoList2Component', () => {
  let component: VideoList2Component;
  let fixture: ComponentFixture<VideoList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
