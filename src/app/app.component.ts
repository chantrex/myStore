import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export  class AppComponent {
  name = 'Christopher';
  age = 37;
  falsePicture = 'https://this-person-does-not-exist.com/img/avatar-58a1c0483ddef100cda16bf719df4512.jpg';
  btnDisabled = true;
  person = {
    name: 'ChrisTops',
    age: 40,
    avatar: 'https://this-person-does-not-exist.com/img/avatar-58a1c0483ddef100cda16bf719df4513.jpg'
  }
 names: string[] = ['Chris','Tops','Chantres','Dolores','Emilia'];
 newName = '';

 register = {
   name: '',
   password: '',
   email: ''
 }
 products: Product[] = [

   {name: 'El mejor juguete',
   price: 555,
   image: './assets/images/toy.jpg',
   category: 'all'
  },
  {name: 'El mejor balon',
  price: 555,
  image: './assets/images/toy.jpg'
 },
 {name: 'El mejor candado',
   price: 555,
   image: './assets/images/toy.jpg'
  },
  {name: 'El mejor auto',
   price: 555,
   image: './assets/images/toy.jpg'
  },
  {name: 'El mejor papa',
   price: 555,
   image: './assets/images/toy.jpg'
  },
  {name: 'El mejor laptop',
   price: 555,
   image: './assets/images/toy.jpg'
  },
  {name: 'El mejor perro',
   price: 555,
   image: './assets/images/toy.jpg'
  }
 ]
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  aumentaEdad(){
    this.person.age ++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }
  onRegister() {
    console.log(this.register);
  }
}
