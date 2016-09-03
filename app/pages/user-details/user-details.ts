import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import githubusers provider
import  {GithubUsers} from '../../providers/github-users/github-users';

/*
  Generated class for the UserDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-details/user-details.html',
})
export class UserDetailsPage {
	login: string;
  constructor(public nav: NavController, navParams: NavParams) {
  	//retrieve login from navugation params
  	this.login = navParams.get('login');
  }

}
