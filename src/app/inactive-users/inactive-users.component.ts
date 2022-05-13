import { Component, OnInit } from "@angular/core";
import { Counter } from "../counter.service";
import { User } from "../user.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private user: User, private count: Counter) {}
  onSetToActive(id: number) {
    this.user.onSetToActive(id);
  }

  ngOnInit(): void {
    this.users = this.user.inactiveUsers;
  }
}
