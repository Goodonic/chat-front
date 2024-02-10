import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  chat:any;
  ws: any = new WebSocket("ws://localhost:3000");
  send:any;
  formEl:any;
  name:any;
  message:any;

  ngOnInit() {
    this.chat = document.getElementById("chat");
    this.ws.onmessage = (message:any) => {

    }
    this.send = (e:any) => {
      console.log('send')
      this.ws.send(JSON.stringify({
        name: this.name,
        message: this.message
      }))
      return false;
    }

  }

}
