import { Component, OnInit, AfterViewInit, HostBinding, Renderer2, ViewChild } from '@angular/core';
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
  }

  onSubmit(): void {
    this.createFeeling.mutate(this.form.value, { context: { useMultipart: true } }).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
