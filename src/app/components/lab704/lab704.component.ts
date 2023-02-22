import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab704',
  templateUrl: './lab704.component.html',
  styleUrls: ['./lab704.component.css']
})
export class Lab704Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blindMode: boolean = false;

  toggleColorblindMode() {
    this.blindMode = !this.blindMode;
  }

  getBackgroundColor(value: number): string {
    switch(value) {
      case 0:
        return this.blindMode ? '#7EC9F7' : '#8EF77E'; 
      case 1:
        return this.blindMode ? '#008000' : '#DC143C';
      case 2:
        return this.blindMode ? '#FFA500' : '#00BFFF'; 
      default:
        return ''; 
    }
  }

  getTextColor(value: number): string  {
    switch(value) {
      case 0:
        return this.blindMode ? '#FFA500' : '#DC143C'; 
      case 1:
        return this.blindMode ? '#7EC9F7' : '#00BFFF'; 
      case 2:
        return this.blindMode ? '#008000' : '#8EF77E'; 
      default:
        return '';
    }
  }

  getBorderColor() {
    return this.blindMode ? '4px solid #808080' : '1px solid black';
  }

  onBoxMouseOver(box: HTMLElement, textColor: string, bgColor: string) {
    box.style.backgroundColor = textColor;
    box.style.color = bgColor;

  }

  onBoxMouseOut(box: HTMLElement, textColor: string, bgColor: string) {
    box.style.backgroundColor = bgColor;
    box.style.color = textColor;
  }

}

