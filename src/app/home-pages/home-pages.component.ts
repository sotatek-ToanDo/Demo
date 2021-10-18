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
  image= "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e";
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
    this.listDate = this.listDate.filter((item: any) => item !== element);
  }
  changeSelected(event:any){
    event.isSelected = !event.isSelected;
  }
}
