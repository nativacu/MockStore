import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MockStore';

  constructor(private router: Router) { }

  ngOnInit() {
    this.logCurrentRoute();
  }

  logCurrentRoute() {
    this.router.events.subscribe(event => {
      console.log(this.router.url);
    });
  }
}
