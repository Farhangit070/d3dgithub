import { Component} from '@angular/core';

import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { initializeApp } from "firebase/app";
import { AngularFirestore } from '@angular/fire//firestore';


import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  items: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    this.items = firestore.collection('items').valueChanges();

  }

}


