import { Component, Inject, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions} from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-birthdaypie',
  templateUrl: './birthdaypie.component.html',
  styleUrls: ['./birthdaypie.component.scss']
})
export class BirthdaypieComponent implements OnInit {

@Input() daysTillBirthday:  number = 50;

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
// public pieChartLegend = true;
// public pieChartPlugins = [pluginDataLabels];
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

changeLabels(): void {
  const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
    'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
    'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
    'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
    'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
  const randomWord = () => words[Math.trunc(Math.random() * words.length)];
 // this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
}
}
