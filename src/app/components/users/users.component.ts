import { Component, OnInit, ViewChild } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        image: 'https://img.freepik.com/free-photo/face-happy-male-executive-looking-camera-smiling_1262-14920.jpg?w=1060&t=st=1694147501~exp=1694148101~hmac=1344b9be95321974e6413b24bdd2965c5b2b865454a53b688948468a0f07ee6b',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen.williams@gmail.com',
        age: 35,
        address: {
          street: '50 Main st',
          city: 'Austin',
          state: 'TX'
        },
        image: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?size=626&ext=jpg',
        isActive: false,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true
      },
      {
        firstName: 'Hugh',
        lastName: 'Doug',
        email: 'hugh.doug@gmail.com',
        age: 33,
        address: {
          street: '50 Main st',
          city: 'Miami',
          state: 'FL'
        },
        image: 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-poses-camera-smiles_132075-10662.jpg?size=626&ext=jpg',
        isActive: true,
        registered: new Date('01/02/2021 08:30:00'),
        hide: true
      }
    ];

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
      this.users.unshift(value);
      this.form.reset();
    }
  }

  fireEvent(e: any) {
    console.log(e.type);
    console.log(e.target.value);
  }

}
