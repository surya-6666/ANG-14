import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/Company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companydata!:Company[];

  constructor() { }

  ngOnInit(): void {
  }
  displaycolumns:string[]=["id","name","empcount","revenue","address","isActive","action"]

}
