import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchbalComponent } from './components/achbal/achbal.component';
import { FetyaneComponent } from './components/fetyane/fetyane.component';
import { HomeComponent } from './components/home/home.component';
import { MoutakademComponent } from './components/moutakadem/moutakadem.component';

const routes: Routes = [
  {path: 'achbal', component: AchbalComponent},
  {path: '', redirectTo: '/achbal', pathMatch: 'full'},
  {path: 'fetyane', component: FetyaneComponent},
  {path: 'moutakadem', component: MoutakademComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
