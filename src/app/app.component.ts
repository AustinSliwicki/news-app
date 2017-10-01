import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News App';

  clickLike()
  {
      console.log("You have clicked the Like button")
  }

  clickShare()
  {
      console.log("You have clicked the Share button")
  }
  name = 'Austin Sliwicki\'s';
}
