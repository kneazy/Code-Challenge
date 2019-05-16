import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class getDataService {
  private baseURL: string = 'https://api.flickr.com/services/rest'
  private apiKey: string = 'df923cc67ee2b5a0c181d8fb675cad0d'
  constructor(private _http: HttpClient) {}

  private searchData = new BehaviorSubject([]);
  currentSearchData = this.searchData.asObservable();

  changeData(array: any) {
    this.searchData.next(array)
  }

  getPhotosData(searchData: any = 'dogs'): Observable<any> {
    let params = new HttpParams()
      .set('method', 'flickr.photos.search')
      .set('api_key', this.apiKey)
      .set('text', searchData)
      .set('format', 'json')
      .set('nojsoncallback', '1')
    return this._http.get(this.baseURL, {params: params});
  }

  getAuthorPhoto(user_id: string): Observable<any> {
    let params = new HttpParams()
      .set('method', 'flickr.people.getPublicPhotos')
      .set('api_key', this.apiKey)
      .set('user_id', user_id)
      .set('format', 'json')
      .set('nojsoncallback', '1')
    return this._http.get(this.baseURL, {params: params});
  }

  getPhotoInfo(id: string, secret: string): Observable<any> {
    let params = new HttpParams()
      .set('method', 'flickr.photos.getInfo')
      .set('api_key', this.apiKey)
      .set('photo_id', id)
      .set('secret', secret)
      .set('format', 'json')
      .set('nojsoncallback', '1')
      return this._http.get(this.baseURL, {params: params});
  }
}