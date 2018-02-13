import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoList3Component } from './video-list3.component';

describe('VideoList3Component', () => {
  let component: VideoList3Component;
  let fixture: ComponentFixture<VideoList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
