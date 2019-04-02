import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  users = [
    {name: 'Leanne Graham', email: 'Sincere@april.biz'},
    {name: 'Ervin Howell', email: 'Shanna@melissa.tv'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
