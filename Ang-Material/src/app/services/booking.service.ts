import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/Booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public dataUrl:string=`http://localhost:3000/bookings`;

  constructor(private http:HttpClient) { }
  getBookings():Observable<Booking[]>{
    return this.http.get<Booking[]>(this.dataUrl)
  }
}
