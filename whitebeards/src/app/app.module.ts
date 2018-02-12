import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { appRoutes } from './routes';
import { AppComponent }  from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from "./shared/share.module";
import { CatalogModule } from './catalog/catalog.module';
import { UserModule } from './users/users.module';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    ShareModule,
    CatalogModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
