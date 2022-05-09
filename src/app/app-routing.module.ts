import { DataTableAllComponent } from './data-table-all/data-table-all.component';
import { DataTableComponent } from './data-table/data-table.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DataTableComponent },
  { path: 'show-all', component: DataTableAllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
