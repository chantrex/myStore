import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
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
}
