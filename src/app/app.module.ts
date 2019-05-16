import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { DetailedImageComponent } from './detailed-image/detailed-image.component';
import { AuthorPhotosComponent } from './author-photos/author-photos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { getDataService } from './services/getData.service';
import { PhotoCardComponent } from './photo-card/photo-card.component';

const appRoutes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'detailedImage/:id/:id2', component: DetailedImageComponent },
  { path: 'authorPhotos/:id', component: AuthorPhotosComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    DetailedImageComponent,
    PageNotFoundComponent,
    AuthorPhotosComponent,
    PhotoCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [getDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
