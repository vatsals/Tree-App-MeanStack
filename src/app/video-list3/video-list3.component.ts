import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list3',
  templateUrl: './video-list3.component.html',
  styleUrls: ['./video-list3.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoList3Component implements OnInit {
  public SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

}