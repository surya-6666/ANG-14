import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
mobiles=[
  {name:'xyz',
price:20000,
ram:6,
Storage:64
},
{name:'abc',
price:10000,
ram:4,
Storage:32
},
{name:'def',
price:25000,
ram:6,
Storage:128
}
];
  constructor(){}

  ngOnInit(){}
}
