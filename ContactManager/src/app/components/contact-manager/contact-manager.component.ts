import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  public errorMessage!:string;
  public loading!:boolean;
  public contacts:IContact[]=[];

  constructor(private service:ContactService) { }

  ngOnInit(): void {
    this.loading=true;
    this.service.getContacts().subscribe((data)=>{
      this.contacts= data;
      this.loading=false;

    })
  }

}
