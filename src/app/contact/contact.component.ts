import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  contact: any = {
  }
  errorMessage:boolean=false;
  successMessage:boolean=false;
  constructor(private fireStore: Firestore) { }

  SaveContact() {
    const collectionInstance = collection(this.fireStore, "ContactRequest");
    addDoc(collectionInstance, this.contact)
      .then(() => {
        this.successMessage=true
        this.contact = {
          "fullName": "",
          "email_address": "",
          "comments": ""
        }
        setTimeout(()=>{
          this.successMessage=false
        }, 5000);

      })
      .catch(err => {
        this.errorMessage=true
        setTimeout(()=>{
          this.errorMessage=false
        }, 5000);
      })
  }
 
}
