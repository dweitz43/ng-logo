import { Component } from '@angular/core';

import { COLORS, Color } from './color';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/dragula.min.css'],
  viewProviders: [ DragulaService ]
})
export class AppComponent {
  ngLogo = 'assets/img/angular.svg';
  name = 'Angular 2 Logo Designer';
  url = 'https://github.com/dweitz43';

  leftColor: string;
  rightColor: string;
  textColor: string;
  colorDragging: boolean;
  selectedColor: Color;
  buttonClicked: boolean;
  colors: Color[];

  constructor( private dragulaService: DragulaService) {
    this.leftColor = '#F44336';
    this.rightColor = '#D32F2F';
    this.textColor = '#FFFFFF';
    this.colors = COLORS;

    dragulaService.setOptions('shield', {
      moves: function (el, source, handle, sibling) {
        switch (el.id) {
          case 'left':
          case 'right':
          case 'text':
            return false;
          default:
            return true;
        }
      },
      accepts: function (el, target, source, sibling) {
        switch (target.id) {
          case 'left':
          case 'right':
          case 'text':
            return true;
          default:
            return false;
        }
      },
      copy: true
    });

    dragulaService.drag.subscribe((value) => {
      this.colorDragging = true;
    });

    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });

    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });

    dragulaService.drop.subscribe((value) => {
      this.colorDragging = false;
      this.buttonClicked = false;
      this.onDrop(value.slice(1));
    });
  }

  selectColor(color: Color) {
    if (this.selectedColor && color.name === this.selectedColor.name) {
      this.buttonClicked = !this.buttonClicked;
    } else {
      this.buttonClicked = true;
    }
    this.selectedColor = color;
  }

  private onOver(args) {
    let [e, el] = args;
    el.style.opacity = 1;
  }

  private onOut(args) {
    let [e, el] = args;
    el.style.opacity = '';
  }

  private onDrop(args) {
    let [e, el] = args;
    if (el) {
      el.removeChild(e);
      el.style.fill = e.id;
    }
  }
}
