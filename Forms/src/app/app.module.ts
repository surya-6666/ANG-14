import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import{MatTableModule}from '@angular/material/table';
import{MatButtonModule}from '@angular/material/button';
import{MatPaginatorModule}from '@angular/material/paginator';
import{MatSortModule}from '@angular/material/sort';
import{MatDialogModule}from '@angular/material/dialog';
import{MatCheckboxModule}from '@angular/material/checkbox';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/company.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatDialogModule,
    MatTableModule,MatButtonModule,MatPaginatorModule,MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
