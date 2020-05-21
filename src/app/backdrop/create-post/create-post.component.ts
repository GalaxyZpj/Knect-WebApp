import { Component, OnInit, Input, ViewContainerRef, ViewChild, HostBinding, Renderer2 } from '@angular/core';
import { DynamicComponentService } from 'src/app/dynamic-component.service';
import { AddFeelingComponent } from '../add-feeling/add-feeling.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'createPost',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  crossIcon = faTimes;

  components: object = {
    addFeeling: AddFeelingComponent,
  }

  @Input() backdropRef: ViewContainerRef;
  name: string;

  @ViewChild('nestedDynamicComponent', { read: ViewContainerRef }) nestedContainer: ViewContainerRef;

  constructor(private dynamicComponentService: DynamicComponentService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('username');
  }

  ngOnDestroy(): void {
  }

  addNestedComponent(componentName: string): void {
    this.renderer.setStyle(document.getElementById('createPostDiv'), 'transform', 'translateX(-110%)');
    const nestedComponentRef = this.dynamicComponentService.createDynamicComponent(this.nestedContainer, this.components[componentName]);
    (<AddFeelingComponent>nestedComponentRef.instance).selfViewRef = this.nestedContainer;
  }

}
