import { Component, Input, ViewChild, ViewContainerRef, AfterViewInit, OnDestroy, OnInit, Renderer2, HostListener } from '@angular/core';
import { DynamicComponentService } from '../dynamic-component.service';
import { CreatePostComponent } from '../backdrop/create-post/create-post.component';

@Component({
  selector: 'backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() component: string;
  @Input() backdropRef: ViewContainerRef;
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
      this.backdropRef.clear();
  }

  components: object = {
    create: CreatePostComponent
  }

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private dcService: DynamicComponentService, private renderer: Renderer2) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const componentRef = this.dcService.createDynamicComponent(this.container, this.components[this.component]);
      (<any>componentRef.instance).backdropRef = this.backdropRef;
      this.renderer.addClass(document.body, 'backdrop-open');
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'backdrop-open');
  }

}
