import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { UserFormComponent } from './components/user-form/user-form.component';


const routes: Routes = [
  {
    path: '', component: StartComponent,
    children: [
      {
        path: 'game', component: StartGameComponent
      },
      {
        path: 'user-form', component: UserFormComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule {
}
