import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { StartRoutingModule } from './start.routing';
import { AtomsModule } from '@components/atoms/atoms.module';

@NgModule({
  declarations: [
    StartComponent,
    StartGameComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    AtomsModule
  ]
})
export class StartModule { }
