import { NgModule } from "@angular/core";

import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";

const Material = [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
];
@NgModule({
    imports: Material,
    exports: Material
})
export class MaterialModule {

}