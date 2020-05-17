import { Component, Input, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DynamicComponentService } from '../dynamic-component.service';

@Component({
  selector: 'backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements AfterViewInit {

  @Input() component: any;
  @Input() backdropRef: ViewContainerRef;

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private dcService: DynamicComponentService) { }

  ngAfterViewInit(): void {
    const containerRef = this.dcService.createDynamicComponent(this.container, this.component);
  }

}
