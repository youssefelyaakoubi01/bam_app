import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ArticlesService } from '../services/articles.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  v_article:any;
  article:any;
  constructor(
    public dialogRef: MatDialogRef<ArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  { articleId: any },private articles:ArticlesService
  ) { 
    const v_number = this.data.articleId;
    this.v_article = articles.articles.find(article => article.id === v_number);
  }
  ngOnInit() {
    // Vous pouvez accéder à la valeur ici
     
  }
  
}
