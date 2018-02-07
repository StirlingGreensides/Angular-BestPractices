import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { appRoutes } from './routes';
import { AppComponent }  from './app.component';
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";
import { CoreModule } from './core/core.module';
import { ShareModule } from "./shared/share.module";
import { CatalogModule } from 'app/catalog/catalog.module';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    ShareModule,
    CatalogModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent
  ],
  providers: [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
