import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'createPost',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  @Input() backdropRef: ViewContainerRef;
  name: string;

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('username');
  }

  ngOnDestroy(): void {
  }

}
