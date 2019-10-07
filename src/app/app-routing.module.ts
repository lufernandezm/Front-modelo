import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

const routes: Routes = [
	{ path: 'index', component: IndexComponent},
	{ path: 'evaluation', component: EvaluationComponent},
	{ path: '', pathMatch: 'full', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent, EvaluationComponent]
