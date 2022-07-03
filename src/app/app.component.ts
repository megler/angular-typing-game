import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lorem = faker.lorem.sentence()
  userText = ''
  winner = false  

  onUserInput(value:string){
    this.userText = value
    if (this.userText === this.lorem) {
      this.winner = true
    }
  }

  compare(randomLetter:string, enteredLetter:string){
    if (!enteredLetter) {
      return 'pending'
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }
}
