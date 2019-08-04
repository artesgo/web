import { Component } from "@angular/core";

@Component({
  selector: "fdn-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  page = "Git"
  _open = true;
  constructor() {
    // listen to browser resize
  }

  colSizes = [
    { value: 200, unit: "px" },
    { value: 4, unit: "fr" },
    { value: 2, unit: "fr" },
  ]

  toggleSide() {
      const [one, two, three] = this.colSizes;
      this.colSizes = [];
      if (this._open) {
        this.colSizes = [{ value: 10, unit: "px" }, two, three];
      } else {
        this.colSizes = [{ value: 200, unit: "px" }, two, three];
      }
      this._open = !this._open;
  }
  
  skipToMain() {
    
  }


}
