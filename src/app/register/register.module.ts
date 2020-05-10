import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[
        FormsModule,
        RegisterRoutingModule
    ],
    declarations:[RegisterComponent]
})

export class RegisterModule{}