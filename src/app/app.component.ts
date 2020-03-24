import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  // to be used as directive
  templateUrl: "./app.component.html",
  // can even type out html on this very page. For that the property name is 'template'. Like
  // template: "<h1>{{title}}</h1>",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "First Project";
  message = "Project is created using angular cli";
}
