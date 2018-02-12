import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../shared/share.module';
import { SignInComponent } from './sign-in.component';
import { RegisterComponent } from './register.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        ShareModule,
        RouterModule.forChild([
            { path: 'register', component: RegisterComponent },
            { path: 'sign-in', component: SignInComponent }
        ])
    ],
    declarations: [ RegisterComponent, SignInComponent],
    exports:[],
    providers:[]
})

export class UserModule{ };
