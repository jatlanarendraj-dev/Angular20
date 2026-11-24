import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  username = signal<string | null>(null);

  login(username: string) {
    this.username.set(username);
  }

  getUsername() {
    return this.username();
  }

  logout() {
    this.username.set(null);
  }

  isLoggedIn() {
    return this.username() !== null;
  }
}
