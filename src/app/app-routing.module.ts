import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { MilieuComponent } from './milieu/milieu.component';
import { HomeComponent } from './home/home.component';
import { ProduitsAlimentairesComponent } from './produits-alimentaires/produits-alimentaires.component';
import { ProductsComponent } from './products/products.component';
import { MenuProductsComponent } from './menu-products/menu-products.component';




const routes: Routes = [
  

  { path: 'home', component: HomeComponent },
  { path: 'products', redirectTo: 'products/all_products', pathMatch: 'full' },
  { path: 'products/all_products', component: MilieuComponent },
  { path: 'products/produits_alimentaires', component: ProduitsAlimentairesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  
  
  // Autres routes ici...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
