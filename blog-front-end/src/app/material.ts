import { NgModule } from '@angular/core';
import {MatCheckboxModule,MatSliderModule,MatToolbarModule,} from '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatDividerModule} from  '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatMenuModule} from '@angular/material/menu';


@NgModule({
    imports: [MatButtonModule,MatCheckboxModule,MatSliderModule,MatToolbarModule,
        MatDatepickerModule,MatRadioModule,MatSelectModule,MatDividerModule,MatCardModule,
        MatFormFieldModule,MatInputModule,MatProgressSpinnerModule,MatMenuModule],
    exports: [MatButtonModule,MatCheckboxModule,MatSliderModule,MatToolbarModule,
        MatDatepickerModule,MatRadioModule,MatSelectModule,MatDividerModule,MatCardModule,
        MatFormFieldModule,MatInputModule,MatProgressSpinnerModule,MatMenuModule]
})
export class BlogMaterialModule{

}
