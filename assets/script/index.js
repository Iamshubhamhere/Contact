/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Contacts
    Noah & Shubham

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

 'use strict'
 const valMessage = document.querySelectorAll('.display1');
 const disMessage = document.querySelector('.display2');
 const grid = document.querySelector('#shape-grid');
 const addBtn = document.querySelector('.set');
 const inputContact = document.querySelector('.input');
 class contact {
    #name;
    #city;
    #email;
    constructor(name, city, email) {
      this.name = name;
      this.city = city;
      this.email = email
    }
  
    set name(name) {
      this.#name = name;
    }
  
    set city(city) {
      this.#city = city
    }
    
    set email(email) {
        this.#email = email
      }

    get name() {
      return this.#name;
    }
  
    get city() {
      return this.#city;
    }

    get email() {
        return this.#email;
    }
  
    listContacts() {
      return `${this.#name} \n${this.#city}\n ${this.#email}`;
    }
  }

let list= [];
let count = 0;
document.querySelector('.form').addEventListener('submit', function (event){
    event.preventDefault();
   
  
    const inputValue = inputContact.value.trim();
    const inputArray = inputValue.split(',');
    
    const[name, city, email] = inputArray;
    if (inputArray.length < 3) {
        const valMessage = document.querySelector('#display1');
        valMessage.innerHTML = 'Please enter all three values separated by commas.';
      }
      else{
        const nameCheck = /^[a-zA-Z\s]*$/.test(name.trim());
        const cityCheck = /^[a-zA-Z\s]*$/.test(city.trim());
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if(!nameCheck) {
        document.querySelector('#display1').innerHTML = 'Invalid name';
      } else if (!cityCheck) {
        document.querySelector('#display1').innerHTML = 'Invalid city';
      } else if (!emailCheck) {
        document.querySelector('#display1').innerHTML= 'Invalid email';
      }
        
      } 
   
  });
  

