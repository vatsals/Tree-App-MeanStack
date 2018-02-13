import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list2',
  templateUrl: './video-list2.component.html',
  styleUrls: ['./video-list2.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoList2Component implements OnInit {
  public SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

}