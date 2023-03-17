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
      return `Name: ${this.#name} \n City: ${this.#city}\n Email: ${this.#email}`;
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
        return;
      }
      // using regex
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
        else{
            const newContact = new contact(name, city, email);
            list.push(newContact);
            
            const newDiv = document.createElement('div');
            newDiv.classList.add('contact');
            newDiv.style.color = "#f1f1f1";
            newDiv.style.fontSize = "16px";
            newDiv.style.textAlign="left";
            newDiv.style.backgroundColor= "rgba(255, 255, 255, 0.171)";
            newDiv.style.padding= '10px';
            newDiv.style.borderRadius= '3px';
            newDiv.innerHTML = `
              <div class="name">Name: ${newContact.name}</div>
              <div class="city">City: ${newContact.city}</div>
              <div class="email">Email: ${newContact.email}</div>
            `;
            grid.append(newDiv);
      
            inputContact.value = '';
            newDiv.onclick = function(){
                this.remove();
                count--;
                document.querySelector('.display2').innerHTML = `Total contacts: ${count}`;
              }
              count++;
              document.querySelector('.display2').innerHTML = `Total contacts: ${count}`;
        }
      } 
     
    
  });
  

