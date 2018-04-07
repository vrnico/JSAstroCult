import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crypto(){
  var copyText = "3ArunZof3gsJk7NALYUQxuMsxA2aZnufXb";
  var aux = document.createElement("input");
   aux.setAttribute("value", "3ArunZof3gsJk7NALYUQxuMsxA2aZnufXb");
   document.body.appendChild(aux);
   aux.select();
   document.execCommand("copy");
   document.body.removeChild(aux);
  alert('Wallet address copied to clipboard');
}
  }
