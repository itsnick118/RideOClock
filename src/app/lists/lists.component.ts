import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  amembers:any;

  users=[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getusers();
    this.getmembers();
  }

  getmembers() {
    this.http.get('https://localhost:44310/api/members').subscribe(
      response => {
       this.amembers=response;
      },
      error => {
        console.log(error);
      }
    )
  }

  private getusers(){
    this.http.get('https://localhost:44310/api/users').subscribe(data=>{
      console.log(data);
    })
  }
}
