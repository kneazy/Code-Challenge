import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getDataService } from './services/getData.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchControl = new FormControl();
  error: boolean = false;
  data: any = null;

  @ViewChild('newForm') newForm: any;

  constructor(private searchPhoto: getDataService) {}

  onSubmit(value: any): void {
    this.searchPhoto.getPhotosData(value.search)
      .subscribe(data => {
        this.searchPhoto.changeData(data)
        this.data = data;
        this.error = false;
      });
      this.newForm.reset();
    }

  ngOnInit() {
  }
}
