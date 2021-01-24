import { Component, Inject, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-birthdaypie',
  templateUrl: './birthdaypie.component.html',
  styleUrls: ['./birthdaypie.component.scss']
})
export class BirthdaypieComponent implements OnInit {

  @Input() daysTillBirthday: number = 50;

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      colorschemes: {
        scheme: 'brewer.Accent5'
      }
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [50, 50];
  public pieChartType: ChartType = 'pie';

  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  ngOnInit(): void {
    this.pieChartData = [this.daysTillBirthday, 365 - this.daysTillBirthday];
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
