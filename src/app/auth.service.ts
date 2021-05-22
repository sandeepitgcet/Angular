import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  response: string='';
  constructor() { }

  login(u: string, p: string): string{
    console.log('AuthService -->> login()', u,p);
    if(u=='Sandeep'&&p=='Singh'){
      this.response='Logged in Successfully';
    }
    else{
      this.response='Incorrect Credentials';
    }
    return this.response;
  }
}
