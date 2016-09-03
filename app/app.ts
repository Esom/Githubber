import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {UsersPage} from './pages/users/users';
import {ReposPage} from './pages/repos/repos';
import {OrganizationsPage} from './pages/organizations/organizations';



@Component({
  // template: '<ion-nav [root]="rootPage"></ion-nav>'
  templateUrl: 'build/app.html'
})

class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = UsersPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    // this.rootPage = UsersPage;
    this.initializeApp();

      //set app pages 
      this.pages = [
        {title: 'Users', component: UsersPage },
        {title: 'Repos', component: ReposPage},
        {title: 'Organizations', component: OrganizationsPage}
      ];
    }

    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
      });
    }

    openPage(page){
      // close the menu when clicking a link from the menu
      this.menu.close();
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
}

ionicBootstrap(MyApp);
