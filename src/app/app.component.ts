import { Component, Inject, OnInit } from '@angular/core';
import localeDeCH from '@angular/common/locales/de-CH';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chartApp';
  public birthdayStatistics: BirthdayStatistic[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<BirthdayStatistic[]>(baseUrl.replace('4200', '5000') + 'birthday').subscribe(result => {
      this.birthdayStatistics = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
    registerLocaleData(localeDeCH, 'de-CH');
  }
}
export interface BirthdayStatistic {
  dateOfBirth: Date;
  daysOfLife: number;
  weekdayOfBirth: string;
  name: string;
  daysTillBirthday: number;
}
