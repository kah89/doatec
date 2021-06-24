import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`http://localhost:3000/api/users/authenticate`, user).toPromise();
    console.log(result);
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      window.localStorage.setItem('cadastro', result.user);
      return true;
    }

    return false;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }



  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } 

    return true;
  }
}
