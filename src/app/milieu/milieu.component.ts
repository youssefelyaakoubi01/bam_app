import { Component } from '@angular/core';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticlesService } from '../services/articles.service';
import { ArticleComponent } from '../article/article.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-milieu',
  templateUrl: './milieu.component.html',
  styleUrls: ['./milieu.component.css']
})
export class MilieuComponent {
  articles:any;
  constructor(private _dialog:MatDialog, private article:ArticlesService){
    this.articles = this.article.articles;
  }
  Ajouter_au_panier(){
    this._dialog.open(AddArticleComponent,{
      height:"50%",
      width:"50%"
    })
  }
  Acheter(article:any){

  }
  openArticle(article_id: any) {
    const dialogRef = this._dialog.open(ArticleComponent, {
      height: "65%",
      width: "30%",
      data: { articleId: article_id } // Passer la valeur à ArticleComponent
    });
  }

  
}
