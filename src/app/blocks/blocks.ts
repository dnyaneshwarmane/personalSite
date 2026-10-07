import { Component, input } from '@angular/core';
import { Block } from '../data/model';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.html',
})
export class Blocks {
  readonly blocks = input.required<Block[]>();
}
