import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss'],
  providers: [DatePipe],
})
export class HomePagesComponent implements OnInit {
  userForm: FormGroup;
  listDate: any;
  date = new Date() || null;
  currentDate: any;
  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.listDate = [];
    this.userForm = this.fb.group({
      name: ['', Validators.required],
    });
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  submitted = false;
  ngOnInit(): void {}
  get f() { return this.userForm.controls; }
  public addItem(): void {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    if (this.userForm.value.name !== '' || this.userForm.value.name != null) {
      this.listDate.push(this.userForm.value);
      this.userForm.reset();
      this.submitted = false;
    }
  }
  reset() {
    this.userForm.reset();
  }
  removeItem(element: any) {
    console.log(element);
    this.listDate = this.listDate.filter((item: any) => item !== element);
    console.log(this.listDate);
  }
}
