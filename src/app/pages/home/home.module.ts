import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing";
import { OrganismsModule } from "@components/organisms/organisms.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, OrganismsModule, HomeRoutingModule]
})
export class HomeModule {}
