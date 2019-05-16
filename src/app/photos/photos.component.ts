import { Component, OnInit } from '@angular/core';

import { getDataService } from '../services/getData.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor( private _getDataService: getDataService ) {} 

  photolist = new Array();
  userId: string = ''


  ngOnInit() {
    this._getDataService.currentSearchData
      .subscribe((res: any) => {
        if (res.length === 0) {
          this._getDataService.getPhotosData()
            .subscribe((res: any) => { 
              this.photoInfo(res.photos.photo);
            });
        } 
        else {
          this.photolist = [];
          this.photoInfo(res.photos.photo);
        }
      });
  }

  photoInfo(photo: any) {
    photo.forEach((item: any) => {
      this._getDataService.getPhotoInfo(item.id, item.secret)
        .subscribe((data: any) => {
          this.photolist.push(data.photo)
        })
    });
  }
}
