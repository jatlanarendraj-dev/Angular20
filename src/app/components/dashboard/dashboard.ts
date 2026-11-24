import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {

  private userService = inject(UserService);
  private authService = inject(AuthService);
  private router = inject(Router);

  public usersCount = signal(0);  

  ngOnInit(): void {
    this.getUsers();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getUsername() {
    return this.authService.getUsername();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (users: any) => {
        this.usersCount.set(users.length);
        console.log('Users:', users);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }
}