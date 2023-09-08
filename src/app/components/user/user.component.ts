import { Component } from "@angular/core";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"]
})

export class UserComponent {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address;

    // Methods
    constructor() {
        this.firstName = "John";
        this.lastName = "Doe";
        this.age = 30;
        this.address = {
            street: "50 Main st",
            city: "Boston",
            state: "MA"
        }
    }

    showAge() {
        return this.age;
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }
}
