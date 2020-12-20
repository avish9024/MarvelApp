import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FidisysAssignment';
  @ViewChild('mySidebar') mySideBar: ElementRef;
  @ViewChild('main') main: ElementRef;
  openNav(): void{
    document.getElementById('mySidebar').style.width = '250px';
    // document.getElementById('main').style.marginRight = '250px';
  }

  closeNav(): void {
    document.getElementById('mySidebar').style.width = '0';
    // document.getElementById('main').style.marginRight = '0';
  }
}
