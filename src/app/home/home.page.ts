import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router: Router) { }

  v1(){
    this.router.navigate(['/v1']);
  }
  v2(){
    this.router.navigate(['/v2']);
  }
  v3(){
    this.router.navigate(['/v3']);
  }
  v4(){
    this.router.navigate(['/v4']);
  }
  v5(){
    this.router.navigate(['/v5']);
  }
  v6(){
    this.router.navigate(['/v6']);
  }
}
