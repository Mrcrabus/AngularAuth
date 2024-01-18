import {Component, OnInit} from '@angular/core';
import {Tooltip, TooltipService} from './services/tooltip.service';
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tooltips$!: Observable<Tooltip[]>;

  constructor (private tooltipService: TooltipService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.tooltips$ = this.tooltipService.tooltips$;
    this.authService.checkAuth();
  }


}
