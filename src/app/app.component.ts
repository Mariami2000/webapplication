import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   form!: FormGroup;
  scrollPoint1(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView();
  }

  @ViewChild('point_2') private my_point_2!: ElementRef;
  scrollPoint2() {
    // this.my_point_3.nativeElement.scrollIntoView({behavior: "smooth"});
    this.my_point_2.nativeElement.scrollIntoView();
  }
  

  @ViewChild('point_3') private my_point_3!: ElementRef;
  scrollPoint3() {
    // this.my_point_3.nativeElement.scrollIntoView({behavior: "smooth"});
    this.my_point_3.nativeElement.scrollIntoView();
  }
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      textarea: ['', Validators.required],
    });

  }
  onSubmit(){
    console.log(this.form.value);
  }
  
  reloadPage(){
    window.location.reload();
  }
}
