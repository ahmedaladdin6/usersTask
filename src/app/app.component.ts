import { Component } from '@angular/core';
import users from './files/users.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'userAssignment';

  usersListData: { name: string, code: string }[] = users;
  users = []
  levels = [];

  ngOnInit(): void {
    this.initUsers(this.usersListData)
  }

  initUsers(usersData) {
    usersData.map((item) => {
      this.createUSersWithLevels(item)
    })
    this.levels = [...new Set(this.levels)]
  }

  createUSersWithLevels(item) {
    const userListCode = item.code.split('.')
    this.users.push({
      code: userListCode[userListCode.length - 1],
      level: userListCode.length,
      name: item.name,
      parent: userListCode[userListCode.length - 2]
    })
    this.levels.push(userListCode.length)
  }

}
