import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v6',
  templateUrl: './v6.page.html',
  styleUrls: ['./v6.page.scss'],
})
export class V6Page implements OnInit {

  dataNames =[];
  dataJson: any;
  
  constructor(private router: Router) { }

  ngOnInit(){
    this.initializaIntems();
  }

  evento(){
    this.router.navigate(['/']);
  }

  initializaIntems(){
    this.dataNames = [
      {
        name: 'Gerard',
        edad: 22, 
      },
      {
        name: 'Roberto',
        edad: 30,
      },
      {
        name: 'Braulio',
        edad: 40,
      }
    ];
    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }


}
