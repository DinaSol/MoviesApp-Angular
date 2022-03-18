import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  notFoundImg:string = "../../assets/undraw_cancel_re_ctke.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
