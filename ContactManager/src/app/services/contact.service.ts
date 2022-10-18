import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { IContact } from '../models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public dataUrl:string=`http://localhost:3000/contacts`;

  constructor(private http:HttpClient) { }
  // GET Contacts

  public getContacts():Observable<IContact[]>{
    return this.http.get<IContact[]>(this.dataUrl).pipe();
  }

  // GET Single Contact
  public getContact(id:number):Observable<IContact>{
    return this.http.get<IContact>(`${this.dataUrl}/${id}`);

  }
  // Create a Contact
  public createContact(contact:IContact):Observable<IContact>{
    return this.http.post<IContact>(`${this.dataUrl}`,contact);
  }
  // updateContact
  public updateContact(id:number,contact:IContact):Observable<IContact>{
    return this.http.put<IContact>(`${this.dataUrl}/${id}`,contact);

  }
  // deleteContact
  public deleteContact(id:number):Observable<IContact>{
    return this.http.delete<IContact>(`${this.dataUrl}/${id}`);
  }






  // ErrorHandling
  public handleError(error:HttpErrorResponse){
    let errorMessage:string='';
    if(error.error instanceof ErrorEvent){
      // ClientError
      errorMessage=`Error:${error.error.message}`
    
    }
    else{
      // server Error
      errorMessage=`status:${error.status}\n Message:${error.message}`
    }
    

  }
}
