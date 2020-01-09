import { Component, Input, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';

@Component({
  selector: 'app-firebase-ui',
  templateUrl: './firebase-ui.component.html',
  styleUrls: ['./firebase-ui.component.scss']
})
export class FirebaseUIComponent implements OnInit {
  @Input() uiConfig: firebaseui.auth.Config;
  @Input() firebaseAuth: firebase.auth.Auth;

  constructor() {}

  ngOnInit() {
    const ui = new firebaseui.auth.AuthUI(this.firebaseAuth);
    ui.start('#firebaseui-auth-container', this.uiConfig);
  }
}
