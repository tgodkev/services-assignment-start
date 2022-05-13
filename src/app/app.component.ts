import { Component, OnInit } from "@angular/core";
import { User } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private user: User) {}

  ngOnInit(): void {
    this.user.activeUsers;
    this.user.inactiveUsers;
  }
}
