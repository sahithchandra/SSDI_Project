import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from './features/components/student-list/student-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'view-student', pathMatch: 'full'},
  {path: 'view-student', component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
