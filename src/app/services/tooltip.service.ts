import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, take, timer} from "rxjs";

export enum TooltipType {
  success,
  warning,
  fail
}

export interface Tooltip {
  type: TooltipType;
  text: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private tooltips: BehaviorSubject<Tooltip[]> = new BehaviorSubject<Tooltip[]>([]);

  get tooltips$(): Observable<Tooltip[]> {
    return this.tooltips.asObservable();
  }

  showTooltip(type: TooltipType, text: string): void {
    const tooltip: Tooltip = {type, text, timestamp: Date.now()};
    const updatedTooltips = [...this.tooltips.getValue(), tooltip].slice(-3);

    this.tooltips.next(updatedTooltips);

  }

  closeTooltip(timestamp: number): void {
    this.tooltips.next(this.tooltips.getValue().filter(el => el.timestamp !== timestamp))
  }
}
