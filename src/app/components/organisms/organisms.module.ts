import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { CommonModule } from "@angular/common";
import { AtomsModule } from "@components/atoms/atoms.module";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class OrganismsModule {}
