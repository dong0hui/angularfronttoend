import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from '../../services/data.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    age: undefined,
    address: {
      street: '',
      city: '',
      state: ''
    },
    image: '',
    isActive: undefined,
    registered: null,
    hide: true
  };
  users!: User[];
  showExtended: boolean = false;
  enableAdd: boolean = true;
  loaded: boolean = true;
  addUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private dataService: DataService) { 

  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });

    this.users = this.dataService.getUsers();

    this.loaded = true;

  }


  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: undefined,
      address: {
        street: '',
        city: '',
        state: ''
      },
      image: '',
      isActive: undefined,
      registered: null,
      hide: true
    };
  }

  onSubmit({value, valid} : {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is not valid');
    } else {
      console.log(value);
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);
      this.form.reset();
    }
  }

  fireEvent(e: any) {
    console.log(e.type);
    console.log(e.target.value);
  }

}
