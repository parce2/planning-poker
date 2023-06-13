import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtomsModule } from '@components/atoms/atoms.module';
import { StartGameComponent } from './components/start-game/start-game.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StartComponent,
    StartGameComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    AtomsModule,
    ReactiveFormsModule
  ]
})
export class StartModule { }
