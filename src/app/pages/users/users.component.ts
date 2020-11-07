import { postUsers, changePasswordUser } from './../../@W&S/data/Users';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
import {message_} from '../../@theme/components/message/message_';


@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listOfUsers: any[];
  page = 1;
  pageSize = 4;
  Swal = require('sweetalert2');
  messageObj = new message_();
  // to change user password
  userName = '';
  newPassword = '';
  confirmPassword = '';
  // end to change user password

  signupnewuser: postUsers[];
  closeResult = '';// nb-modal close button

  // to new user
  userType_ = '';
  Name_ = '';
  password_ = '';
  userName_ = '';
  //End to new user

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
   
  }


 

}
