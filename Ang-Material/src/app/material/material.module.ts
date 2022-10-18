import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatButtonModule}from '@angular/material/button';
import{MatIconModule}from '@angular/material/icon';
import{MatInputModule}from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatSelectModule}from '@angular/material/select';
import{MatTableModule}from '@angular/material/table';


const MaterialComponents=[MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatTableModule]

@NgModule({
  declarations: [],
  imports: [MaterialComponents,
    CommonModule,
  ],
  exports: [MaterialComponents ]


})
export class MaterialModule { }
