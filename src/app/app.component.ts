import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc} from "@angular/fire/firestore";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fireb';
}

