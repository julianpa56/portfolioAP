import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  aux : number = 0

  constructor(  ) {
    fromEvent(document, 'scroll').subscribe(
      a => this.aux = 
        (document.documentElement.scrollTop === 0)
          ? 0
          : 1
    );
  
  }

  ngOnInit(): void {
    
  }

}
