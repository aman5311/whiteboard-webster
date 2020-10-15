import { Component } from '@angular/core';
import {NgWhiteboardService} from 'ng-whiteboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whiteboard';

  constructor(public ngWhiteboardService : NgWhiteboardService ){
    this.ngWhiteboardService.save();
  }
}
 