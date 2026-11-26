import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  public userName = input('userName');
  public message = output<string>();

  sendMessage() {
    this.message.emit('Hello, world!');
  }

}
