import { Component, OnInit } from "@angular/core";
import { Counter } from "../counter.service";
import { User } from "../user.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private user: User) {}

  onSetToInactive(id: number) {
    this.user.onSetToInactive(id);
  }

  ngOnInit(): void {
    this.users = this.user.activeUsers;
  }
}
