import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DawWorkspaceComponent } from './daw-workspace/daw-workspace.component';

const routes: Routes = [
  { path: 'workspace', component: DawWorkspaceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
