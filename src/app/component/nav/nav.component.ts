import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Router } from 'express';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  no_auth = true;  


  constructor(
    private usrService:UserService,
    // private router:Router
  ){
    
  }

  ngOnInit(): boolean {
    return true;
    // if(this.usrService.isAuthenticated()){
    //   this.no_auth = false;
    //   return true;
    //   // this.router.navigate(['/home']);
    // }
    // return false;
  }



  logout(){
    // this.usrService.logout();
    // localStorage.removeItem('token')
    // this.router.navigate(['/login'])

  }
}
