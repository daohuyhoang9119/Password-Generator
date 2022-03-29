import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '0';
  letter: boolean = false;
  number: boolean = false;
  symbols: boolean = false;
  lengthOfPassword: number = 0;
  allLowerAlpha = [...'abcdefghijklmnopqrstuvwxyz'];
  allUniqueChars = [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`];
  randomNumber: number = 0;
  isDone: boolean = false;
  // const randomInt(max, min) => Math.round(Math.random() * (max - min)) + min;
  constructor() {
    this.password = '';
  }

  onButtonClick() {
    this.password = 'This is my password';
    let base = [
      ...this.allLowerAlpha,
      ...this.allUniqueChars,
      this.randomNumber,
    ];

    if (this.number) {
      this.randomNumber = Math.round(Math.random() * 9);
    }
    if (this.letter && this.symbols && this.number) {
      this.password = [...Array(this.lengthOfPassword)]
        .map((i) => base[(Math.random() * base.length) | 0])
        .join('');
      this.isDone = true;
    }
    return this.password;
  }
  onChangeLength(input: any) {
    const parseValue = parseInt(input.target.value);
    if (!isNaN(parseValue)) {
      this.lengthOfPassword = parseValue;
    }
  }

  onChangeUseLetter() {
    this.letter = !this.letter;
  }
  onChangeUseNumber() {
    this.number = !this.number;
  }
  onChangeUseSymbols() {
    this.symbols = !this.symbols;
  }
}
