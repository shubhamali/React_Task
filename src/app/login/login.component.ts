import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   email!: string;
   password!:string;
    public account = {
    password: <string><unknown>null
};
public barLabel: string = "Password strength:";
public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
public thresholds = [90, 75, 45, 25];
   constructor() { }
   ngOnInit(): void {
    }
    User(item:any){
    console.log(item);
     if(this.email=="awesome@user.com"&&this.password=="Shubhada!@1234"){
      console.log("Welcome to dashboard");
      }else{
       //  alert("Email and Password is Wrong");
      }
    }
}
