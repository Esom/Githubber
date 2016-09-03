import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import models
import {User} from '../../models/user'
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {

	githubUsers: any = null;

	constructor(public http: Http) {}

	load(){
		if (this.githubUsers){
			return Promise.resolve(this.githubUsers);
		}

		//dont have any users yet?
		return new Promise(resolve => {
			// We're using Angular Http provider to request the users,
	    	// then on the response it'll map the JSON data to a parsed JS object.
	    	// Next we process the users and resolve the promise with the new data.
	    	this.http.get('http://api.github.com/users')
	    		.map( res => <Array<User>>(res.json()) )
	    		.subscribe(users => {
	    			// we've got back the raw users, now generate the core schedule users
          			// and save the users for later reference
          			this.githubUsers = users;
          			resolve(this.githubUsers);
	    		});
		});
	}

}

