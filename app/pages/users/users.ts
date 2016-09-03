import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import githubusers provider
import  {GithubUsers} from '../../providers/github-users/github-users';

//import user details page
import {UserDetailsPage} from '../user-details/user-details';

//import User model
import {User} from '../../models/user';
/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  //add provider as par tof component
  providers: [GithubUsers]
})
export class UsersPage {
  // declare users as an array of User model
  users: User[];

  // Inject the GithubUsers in the constructor of our page component
  constructor(public nav: NavController, githubUsers: GithubUsers) {
  	//test whether the github service returns data
  	githubUsers
  		.load()
  		//using arrow function notation
  		.then(users => this.users = users);
  }

  // Navigate to user details page with the login as a parameter
  goToDetails(event,login){
    this.nav.push(UserDetailsPage,{login: login});
  }

}
