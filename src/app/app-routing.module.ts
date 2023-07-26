import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { MilieuComponent } from './milieu/milieu.component';



const routes: Routes = [
  
  { path: 'products', component: MilieuComponent },
  // Autres routes ici...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
