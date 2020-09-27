import { Component, OnInit } from '@angular/core';
import { formatDate, Time } from '@angular/common';
import { stringify } from 'querystring';
//import { timeStamp } from 'console';
//import { time } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public today: Date = new Date();
  newDate;
  ctime:any;
  setTime:any;
  difference1:any;
  difference2:any;
  

constructor() {
    setInterval(() => {this.today = this.enterTime()}, 5000);
    
    setInterval(() => {this.newDate = this.changeTime()}, 5000);
   // this.newDate = now;
}

  ngOnInit() {

  }


  enterTime(){

    if(this.setTime != null)
    {
      var now = new Date();
      var arr = this.setTime.split(":");
      now.setHours(arr[0]);
      now.setMinutes(arr[1]);
      console.log(this.setTime.split(":"));
      return now;
    }
    else
    {
      return new Date();
    }


    

  }


  changeTime() {

    if(this.difference1 == '+')
    {
    var now = this.today;
    var arr = this.ctime.split(":");
    now.setHours(now.getHours()+arr[0]);
    now.setMinutes(now.getMinutes()+arr[1]);
    now;
    console.log(this.ctime.split(":"));
    return now;
  }
  else
  {
    var now = this.today;
    var arr = this.ctime.split(":");
    now.setHours(now.getHours()-arr[0]);
    now.setMinutes(now.getMinutes()-arr[1]);
    now;
    console.log(this.ctime.split(":"));
    return now;
  }
  }

}
