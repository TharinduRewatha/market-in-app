import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { signInUsers } from '../@W&S/data/Users';
import {message_} from '../../app/@theme/components/message/message_';
@Component({
  selector: 'ngx-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  messageObj = new message_();
  userLog= 0;
  pwd = ''
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.setServerUrl();
  }

  onClickSubmit(data) {

   console.log(data.passwd)
   console.log('kkkkkk')
   console.log(this.pwd)
    
    this.router.navigate(['/pages']);
    var userData = new signInUsers();
    userData.username = data.emailid;
    userData.password = data.passwd;
    
   


  }

  setServerUrl() {
   
  }
  



}
