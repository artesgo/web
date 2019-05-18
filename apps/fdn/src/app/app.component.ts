import { Component } from "@angular/core";

@Component({
  selector: "fdn-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  page = "Git"
  public colSizes = [
    { value: 200, unit: "px" },
    { value: 4, unit: "fr" },
    { value: 2, unit: "fr" },
  ]
}
