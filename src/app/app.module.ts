import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentModule } from '@components/components.module';
import { CoreModule } from '@core/core.module';
import { PagesModule } from '@pages/pages.module';
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    ComponentModule,
    CoreModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
