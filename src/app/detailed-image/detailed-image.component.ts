import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getDataService } from '../services/getData.service';

@Component({
  selector: 'app-detailed-image',
  templateUrl: './detailed-image.component.html',
  styleUrls: ['./detailed-image.component.scss']
})
export class DetailedImageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: getDataService
  ) {}
  date: Date = new Date();
  photoDetail: any;
  error:any;
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let id2 = this.route.snapshot.paramMap.get('id2');
    this.service.getPhotoInfo(id, id2)
      .subscribe((res: any) => {
        if (res.length !== 0 ) {
          this.photoDetail = res.photo
        }
      });
  }
}
