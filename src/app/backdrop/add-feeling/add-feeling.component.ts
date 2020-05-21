import { Component, OnInit, AfterViewInit, HostBinding, Renderer2, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { NgForm } from '@angular/forms';
import { FeelingGQL } from 'src/generated/types.graphql-gen';

@Component({
  selector: 'app-add-feeling',
  templateUrl: './add-feeling.component.html',
  styleUrls: ['./add-feeling.component.scss']
})
export class AddFeelingComponent implements OnInit, AfterViewInit {

  backBtn = faChevronLeft;
  file: File = null;

  @Input() selfViewRef: ViewContainerRef;
  @HostBinding('style.transform') transform;
  @HostBinding('style.left') left;

  @ViewChild('createFeelingForm') form: NgForm;

  constructor(private renderer: Renderer2, private createFeeling: FeelingGQL) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.left = '0';
    })
  }

  goBack(): void {
    this.left = '110%';
    this.renderer.setStyle(document.getElementById('createPostDiv'), 'transform', 'translateX(0)');
    setTimeout(() => {
      this.selfViewRef.clear();
    }, 400);
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  onSubmit(): void {
    this.createFeeling.mutate({
      name: this.form.value.name,
      emoticon: this.file
    }, { context: { useMultipart: true } }).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
