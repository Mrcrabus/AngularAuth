import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {TooltipService, TooltipType} from "../../services/tooltip.service";
import {FormControl} from "@angular/forms";
import {ButtonType} from "../../components/button/button.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user!: User;
  public message = new FormControl('');

  constructor(private userService: UserService, private tooltipService: TooltipService) {
  }

  ngOnInit(): void {
     this.user = this.userService.getUser() as User;
  }

  public openTooltip = (type: TooltipType, message: string ) => {

    this.tooltipService.showTooltip(type, message)
  }

  public messageTooltip = () => {
    this.openTooltip(TooltipType.warning, this.message.value || "")
  }

  protected readonly TooltipType = TooltipType;
  protected readonly ButtonType = ButtonType;
}
