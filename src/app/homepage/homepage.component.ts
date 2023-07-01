import { Component, OnInit } from '@angular/core';
import { ReferralServiceService } from '../services/referral-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  ngOnInit(): void {
      
  }

  constructor(private service: ReferralServiceService) {

  }

  friend_site_link = 'http://voyagescope.com'

  personal_refers: Number = 0
  contact_number: Number = 10
  bucks_per_activation: Number = 2
  referral_reward: Number = 196
  current_referrals: Number = 50
  paid_referrals: Number = 34
  days_remaining: Number = 180

  guide_1: string = "Create an account at Locom and then start following the prompts"
  guide_2: string = "You have added value to Locom when the person you referred creates an account. Earn up to 10 shares"
  guide_3: string = "You will be informed about the final reward amount via email at the end of the program"

  current_user_profile: string = "./../../assets/images/icons8-user-96.png"
  current_user_username: string = "username"
  current_user_referral_num: Number = 12
  current_user_earned: Number = 324
  current_user_pending: Number = 15
  current_user_email: string = "user@gmail.con"

}
