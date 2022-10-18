import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {
  public bookings:Booking[]=[];
  columnsToDisplay:string[]=['customerName']

  constructor(private service:BookingService) { }

  ngOnInit(): void {
    this.service.getBookings().subscribe((data)=>{
      this.bookings=data;
    })
  }

}
