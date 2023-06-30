import { Component, OnInit } from '@angular/core';
import { ReferralServiceService } from '../services/referral-service.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit{

  contacts :any
  ngOnInit(): void {
      this.service.get_contacts().subscribe(res => this.contacts = res)
      console.log(this.contacts, '#contacts')
  }
  
  constructor (private service: ReferralServiceService) {}

  referral_credit: Number = 7
  current_user: string = "Your friend's name"
  referrer_name: string = "referrer's name"
  referral_link: string = "referral link"
  company_name: string = "company's name"
  company_web_address: string = "company's website address"
  review_image: string = "./../../assets/images/Design inspiration-bro.png"
  review_link: string = ""
  program_description: string = ""
  program_starting_date: string = ""
  program_due_date: string = ""
  program_period: Number = 180
  program_reward: string = "Referral Program Rewards"
}
