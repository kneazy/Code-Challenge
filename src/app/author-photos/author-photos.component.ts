import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getDataService } from '../services/getData.service';

@Component({
  selector: 'app-author-photos',
  templateUrl: './author-photos.component.html',
  styleUrls: ['./author-photos.component.scss']
})
export class AuthorPhotosComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _getDataService: getDataService
  ) {}

  photolist = new Array();

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this._getDataService.getAuthorPhoto(id)
      .subscribe((res: any) => {
        if (res.length !== 0 ) {
          this.photoInfo(res.photos.photo)
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
