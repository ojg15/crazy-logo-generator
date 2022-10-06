import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Crazy Logo Maker';
  companyName = this.title;
  logoLetters: any[] = [['', 0], ['', 0], ['', 0]];
  possibleLogos = ['ARO', 'ORA', 'ROA'];

  private abcs: 'abcdefghijklmnopqrstuvwxyz' = 'abcdefghijklmnopqrstuvwxyz';

  constructor() {
    this.generateLogos();
  }

  public generateLogos() {
    this.updateMostCommon();

    this.possibleLogos = [];
    while (this.possibleLogos.length < 3) {
      let logo = `
        ${this.logoLetters[Math.floor(Math.random() * this.logoLetters.length)][0]}
        ${this.logoLetters[Math.floor(Math.random() * this.logoLetters.length)][0]}
        ${this.logoLetters[Math.floor(Math.random() * this.logoLetters.length)][0]}
      `;
      if (!this.possibleLogos.includes(logo)) {
        this.possibleLogos.push(logo);
      }
    }
  }

  public updateMostCommon() {
    const companyName = this.companyName.toLowerCase(); // Make sure we count caps as well
    this.logoLetters = [['', 0], ['', 0], ['', 0]]; // Tuple of letter and count eg. ('a', 7)

    // Loop through the alphabet
    for (let letter of this.abcs) {

      // Get the number of occurances of each letter in the name
      const count = (companyName.match( new RegExp(letter, 'gi') ) ?? []).length;

      // If the count beats any of our current top 3, then update the top 3
      for (let i=0; i < 3; i++) {
        if (count > this.logoLetters[i][1]) {
          this.logoLetters.splice(i, 0, [letter.toUpperCase(), count]);
          this.logoLetters.pop();
          break;
        }
      }
    }
  }

  public getRandomColor(): string {
    return `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
  }

  public getRandomFontWeight(): string {
    return `${Math.ceil(Math.random() * 7) * 100}`;
  }

  public getRandomFontSize(): string {
    return `${Math.random() * 2.5 + 1}rem`;
  }
}
