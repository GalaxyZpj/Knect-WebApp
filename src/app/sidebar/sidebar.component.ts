import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  dark: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.dark = !this.dark;
    let theme = this.dark ? 'dark' : 'light';
    let properties: string[] = [
      '--ui-primary',
      '--ui-secondary',
      '--ui-pre-accent',
      '--ui-color',
      '--ui-shadow-color'
    ]
    for (let property of properties) {
      let value = getComputedStyle(document.documentElement).getPropertyValue(property+'-'+theme);
      document.documentElement.style.setProperty(property, value);
    }
  }
}
