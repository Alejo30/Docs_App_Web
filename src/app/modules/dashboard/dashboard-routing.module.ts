import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent as DashboardComponent } from "./components/layout/layout.component";

const routes: Routes = [
    { path: '', component: DashboardComponent }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }