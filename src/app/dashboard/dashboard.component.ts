import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BackdropComponent } from '../backdrop/backdrop.component';
import { CreatePostComponent } from '../backdrop/create-post/create-post.component';
import { DynamicComponentService } from '../dynamic-component.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  components: object = {
    create: CreatePostComponent
  }

  @ViewChild('loadBackdrop', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private dcService: DynamicComponentService) { }

  ngOnInit(): void {
    console.log('%cWelcome%c' + localStorage.getItem('username').toUpperCase(), "background: black; color: white; font-size: 40px", "background: red; color: white; font-size: 40px");
  }

  triggerBackdrop(data: any) {
    const componentRef = this.dcService.createDynamicComponent(this.container, BackdropComponent);
    (<BackdropComponent>componentRef.instance).component = this.components[data.name];
    (<BackdropComponent>componentRef.instance).backdropRef = this.container;
  }

}
