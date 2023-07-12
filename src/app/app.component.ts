import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';

  ngOnInit(): void{
    this.title= "Hello From BridgeLabz.";
  }
}
