import { Injectable } from "@angular/core";

import { User } from "../interfaces/users.interface";

@Injectable({ providedIn: 'root' })
export class UsersService {
    usersKeyLS = 'users';
    users!: User[];

    initUsers() {
        const storedUsers = localStorage.getItem(this.usersKeyLS);

        this.users = storedUsers ? JSON.parse(storedUsers) : [];
    }

    addUserToUsersCollection(user: User) {
        this.users.push(user);
        localStorage.setItem(this.usersKeyLS, JSON.stringify(this.users))
    }
}
