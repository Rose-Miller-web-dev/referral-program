import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contacts } from 'src/contacts';

@Injectable({
  providedIn: 'root'
})
export class ReferralServiceService{

  constructor() { }

  contacts: any = Contacts

  get_contacts(): Observable<any> {
    return of(this.contacts)
  }
}
