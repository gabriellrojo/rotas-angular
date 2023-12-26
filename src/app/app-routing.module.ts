import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "about", component: AboutComponent, children: [
    { path: ":id/:user", component: AboutComponent }
  ] },
  {path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule )}, //lazy load
  {path: "**", component: ErrorComponent} //rota coringa ** rota inexistente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
