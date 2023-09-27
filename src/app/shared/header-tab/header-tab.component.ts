import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss'],
})
export class HeaderTabComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() titulo: string = "";

}
