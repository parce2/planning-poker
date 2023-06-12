import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from '@components/components.module';
import { CoreModule } from '@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
