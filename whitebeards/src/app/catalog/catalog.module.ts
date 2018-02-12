import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../shared/share.module';
import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { FilterClassesService } from 'app/catalog/filter-classes.service';

@NgModule({
  imports: [
    RouterModule,
    ShareModule
  ],
  declarations: [ CatalogComponent],
  providers:[ CatalogRepositoryService, FilterClassesService],
  exports:[]
})
export class CatalogModule { }
