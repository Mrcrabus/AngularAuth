import {Component, Input, OnInit} from '@angular/core';
import {Tooltip, TooltipService, TooltipType} from "../../services/tooltip.service";
import {timer} from "rxjs";

const tooltipStyle = {
  [TooltipType.fail]: "fail",
  [TooltipType.success]: "success",
  [TooltipType.warning]: "success",
}

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  @Input() data!: Tooltip;
  public isTooltipHiding = false;

  constructor(public tooltipService: TooltipService) {
  }

  ngOnInit(): void {
    this.hideTooltip();
  }

  public closeTooltip = () => {
    this.isTooltipHiding = true;
    setTimeout(() => {
      this.tooltipService.closeTooltip(this.data.timestamp)
    }, 250)

  }

  private hideTooltip = () => {
    setTimeout(() => {
      this.isTooltipHiding = true;
      this.closeTooltip()
    }, 15000)
  }

  // getTooltipStyle(): object {
  //   switch (this.data.type) {
  //     case TooltipType.success:
  //       return {
  //         borderLeft: '5px solid #249F5D',
  //       };
  //     case TooltipType.fail:
  //       return {
  //         borderLeft: '5px solid #FC5A5A',
  //       };
  //     case TooltipType.warning:
  //       return {
  //         borderLeft: '5px solid #FCCA00',
  //       };
  //     default:
  //       return {
  //         borderLeft: '5px solid #FCCA00',
  //       };
  //   }
  // }

  getTooltipStyle(): string {
    return tooltipStyle[this.data.type]
}


  protected readonly TooltipType = TooltipType;
}
