import { Component } from '@angular/core';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticlesService } from '../services/articles.service';
import { ArticleComponent } from '../article/article.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-milieu',
  templateUrl: './milieu.component.html',
  styleUrls: ['./milieu.component.css']
})
export class MilieuComponent {
  articles:any;
  constructor(private _dialog:MatDialog, private article:ArticlesService ,private _breakpointObserver: BreakpointObserver){
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
    let dialogHeight: string;
    let dialogWidth: string;
  
    if (this._breakpointObserver.isMatched(Breakpoints.Handset)) {
      dialogHeight = '100%';
      dialogWidth = '100%';
    } else {
      dialogHeight = '65%';
      dialogWidth = '30%';
    }
  
    const dialogRef = this._dialog.open(ArticleComponent, {
      height: dialogHeight,
      width: dialogWidth,
      data: { articleId: article_id }
    });
  }
  

  
}
