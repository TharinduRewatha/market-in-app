import { Component, OnInit } from '@angular/core';
import { AllService } from '../../@W&S/mock/all.service';
import { category } from '../../@W&S/data/category';
import { appDetails } from '../../@W&S/otherClasses/appDetails';
import { tools } from '../../@W&S/otherClasses/tools';
import { message_ } from '../../@theme/components/message/message_';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';


type State = {id: string, name: string , discount :string , price : string ,index:number};

@Component({
  selector: 'ngx-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent implements OnInit {
  
 
  public model: State;
  states: State[] = []

  appDetailsObj = new appDetails()
  messageObj = new message_()
  toolObj = new tools()
  apiAddress = ''

  cartItemName = ''
  cartQuantity= 1
  cartDiscount= 0
  cartTotal = 0
  cartItemPrice = 0
  allProductsArray = []

  closeResult= ''

  constructor(
    private modalService: NgbModal,
    private allServiceObj: AllService

  ) { }

  ngOnInit(): void {
    this.apiAddress = this.appDetailsObj.getApiAddress
    this.getAllProducts(this.apiAddress + 'product')
  }

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.states.filter(state => new RegExp(term, 'mi').test(state.name)).slice(0, 10))
  )
  formatter = (state: State) => state.name;


  getAllProducts(apiAddress) {
    this.allServiceObj.getData(apiAddress)
      .subscribe
      (
        httpresponse => {
          if (httpresponse !== null) {
            this.allProductsArray = httpresponse
            for(let i = 0; i < this.allProductsArray.length; i++){
              let item  = {id:'', name: '' , discount : '' , price : '' , index: 0}
              item.id = this.allProductsArray[i]['productId']
              item.name = this.allProductsArray[i]['productName']
              item.discount = this.allProductsArray[i]['disValue']
              item.price = this.allProductsArray[i]['price']
              item.index = i
              this.states.push(item)
            }
          }

          console.log(this.states)
        },
      );
  }

  setCartItemCount(key){
    if(key === 'increse'){
      this.cartQuantity++
    }
    if(key === 'decrease'){
      this.cartQuantity--
    }
  }


  addTocart(){
    if(this.model !== undefined ){
      console.log(this.model)

      
    }
  }
}
