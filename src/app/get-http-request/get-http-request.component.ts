import { Component, OnInit } from '@angular/core';
import { GetHttpRequestService } from './get-http-request.service';

@Component({
  selector: 'app-get-http-request',
  templateUrl: './get-http-request.component.html',
  styleUrls: ['./get-http-request.component.css']
})
export class GetHttpRequestComponent implements OnInit {

  users = [];

  constructor(
    private getHttpRequestService: GetHttpRequestService
  ) { }

  ngOnInit() {
    this.getHttpRequestService.sendGetRequest().subscribe((data:any) => {
      console.log(data);
      this.users = data;
    });
    this.getHttpRequestService.handleError;
  }
  

}
