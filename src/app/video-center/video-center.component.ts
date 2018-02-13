import { VideoService } from './../video.service';
import { Component, OnInit } from '@angular/core';
import { Video } from "../video";
@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {
  selectedVideo: Video;
  private hidenewVideo: boolean = true;
  private fvis1: boolean = false;
  private fvis2: boolean = false;
  private fvis3: boolean = false;
  videos: Array<Video>;
  selectedValue = null;
  defVal = 'null';
  defValp = 'null';
  def2Valp1 = 'null';
  def3Valp1 = 'null';
  def3Valp2 = 'null';
  defl1 = '0';
  defl2 = '1';
  defl3 = '2';
  selectedValue2 = null;
  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

  newVideo() {
    this.hidenewVideo = false;
  }

  handle(val) {
    this.def2Valp1 = val;
    console.log(val);
  }
  
  handle2(val) {
    this.def3Valp1 = val;
    console.log(val);
  }

  handle3(val) {
    this.def3Valp2 = val;
    console.log(val);
  }

  renderForm(level) {
    if(level==0) {
      this.fvis1 = true;
      this.fvis2 = false;
      this.fvis3 = false;
    }
    if(level==1) {
      this.fvis1 = false;
      this.fvis2 = true;
      this.fvis3 = false;
    }
    if(level==2) {
      this.fvis1 = false;
      this.fvis2 = false;
      this.fvis3 = true;
    }
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hidenewVideo = true;
        this.selectedVideo = resNewVideo;
      });

  }

  onUpdateVideoEvent(video: any) {
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
    this.selectedVideo = null;
  };

  onDeleteVideoEvent(video: any) {
    let videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo => {
        for (let i = 0; i < videoArray.length; i++) {
          if (videoArray[i]._id === video._id) {
            videoArray.splice(i, 1);
          }
        }
      });
    this.selectedVideo = null;
  };

}