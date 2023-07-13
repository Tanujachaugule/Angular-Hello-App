import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';
  img = "../assets/img.jpg";
  url = "https://www.bridgelabz.com/" ;
  userName: String = "";

  ngOnInit(): void{
    this.title= "Hello From BridgeLabz.";
    this.img= "../assets/img.jpg";
    this.url= "https://www.bridgelabz.com/";
  }
  onClick($event: any){
    console.log("Save button is clicked!",$event)
    window.open(this.url, "_blanck");
  }
}
