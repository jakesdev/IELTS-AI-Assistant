import { Component } from '@angular/core';

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.scss']
})
export class GptComponent {

  content: string = '';

  giveScore() {
    console.log(`sds`, this.content);
  }
}
