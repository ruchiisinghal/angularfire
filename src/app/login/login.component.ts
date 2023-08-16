import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc} from "@angular/fire/firestore";
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'angular-fireb';
  userData!: Observable<any>;

  constructor(private firestore: Firestore){
    this.getData();
  }

  addData(f:any) {

   const collectionInstance = collection(this.firestore, 'users');
   addDoc(collectionInstance, f.value).then(()=>{
    console.log('Successfully Created');
   })
  .catch((err)=>{
    console.log(err);
  })
  }
  getData(){
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance , {idField: 'id'})
    .subscribe(val=>{
      console.log(val);
    })
    this.userData=collectionData(collectionInstance, {idField: 'id'});

  }
  updateData(id: string){
const docInstance= doc(this.firestore, 'users',id );
const updateData={
  name:'updateName'
}
updateDoc(docInstance, updateData)
.then(()=>{
  console.log("Data updated");
})
.catch((err)=>{
  console.log(err);
})
  }

  deleteData(id: string){
    const docInstance= doc(this.firestore, 'users',id );
    deleteDoc(docInstance)
    .then(()=>{
      console.log("Deleted");
      
    })
  }
  
}

