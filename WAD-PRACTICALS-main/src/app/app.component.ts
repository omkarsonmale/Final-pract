import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Registration From';
  displayname='';
  displayaddress=''
  displaycontact='';
  displayemail='';
  getvalue(name: string, address: string, contact: string, email: string) {
    this.displayname=name;
    this.displayaddress=address
    this.displaycontact=contact;
    this.displayemail=email;
 
  }
}
/*   console.log('Name:', name);
    console.log('Address:', address);
    console.log('Contact:', contact);
    console.log('Email:', email); */