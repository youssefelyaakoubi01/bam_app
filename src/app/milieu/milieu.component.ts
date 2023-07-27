import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticlesService } from '../services/articles.service';

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
  
}
