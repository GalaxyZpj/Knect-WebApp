import { Component, OnInit, Input, ViewContainerRef, ViewChild, HostBinding, Renderer2, ComponentRef } from '@angular/core';
import { DynamicComponentService } from 'src/app/dynamic-component.service';
import { AddFeelingComponent } from '../add-feeling/add-feeling.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CreatePostGQL } from 'src/generated/types.graphql-gen';
import { NgForm } from '@angular/forms';

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
  sharedWithDefault: string = 'friends';

  @ViewChild('nestedDynamicComponent', { read: ViewContainerRef }) nestedContainer: ViewContainerRef;
  @ViewChild('createPostForm') postForm: NgForm;

  constructor(private dynamicComponentService: DynamicComponentService, private renderer: Renderer2, private createPost: CreatePostGQL) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('username');
  }

  ngOnDestroy(): void {
  }

  addNestedComponent(componentName: string): void {
    this.renderer.setStyle(document.getElementById('createPostDiv'), 'transform', 'translateX(-110%)');
    const nestedComponentRef = this.dynamicComponentService.createDynamicComponent(this.nestedContainer, this.components[componentName]);
    (<any>nestedComponentRef.instance).selfViewRef = this.nestedContainer;
  }

  onSubmit() {
    this.backdropRef.clear();
    console.log(this.postForm.value);
    this.createPost.mutate(this.postForm.value, { context: { useMultipart: true } }).subscribe(response => {
      console.log(response);
    });
  }

}
