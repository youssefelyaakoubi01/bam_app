import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { MilieuComponent } from './milieu/milieu.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { AddArticleComponent } from './add-article/add-article.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { VerifierArticleComponent } from './verifier-article/verifier-article.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AngularFireModule } from '@angular/fire/compat'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MilieuComponent,
    FooterComponent,
    AddArticleComponent,
    VerifierArticleComponent,
    HomeComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatTabsModule,
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
