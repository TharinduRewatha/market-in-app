import { Component, OnInit } from '@angular/core';
import { AllService } from '../../@W&S/mock/all.service';
import { category } from '../../@W&S/data/category';
import { appDetails } from '../../@W&S/otherClasses/appDetails';
import { tools } from '../../@W&S/otherClasses/tools';
import { message_ } from '../../@theme/components/message/message_';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { Router } from '@angular/router'; // CLI imports router


type State = { id: string, name: string,  price: string, index: number };

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
  cartQuantity = 1
  cartTotal = 0
  cartItemPrice = 0
  shoppintCartArray = []

  paymentMythod = ''
  customerContact = ''
  customerName = ''
  customerAddress = ''

  allProductsArray = []

  closeResult = ''

  constructor(
   
    private router: Router,
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

  open_(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getAllProducts(apiAddress) {
    this.allServiceObj.getData(apiAddress)
      .subscribe
      (
        httpresponse => {
          if (httpresponse !== null) {
            this.allProductsArray = httpresponse
            for (let i = 0; i < this.allProductsArray.length; i++) {
              let item = { id: '', name: '', discount: '', price: '', index: 0 }
              item.id = this.allProductsArray[i]['productId']
              item.name = this.allProductsArray[i]['productName']
              item.discount = this.allProductsArray[i]['disValue']
              item.price = this.allProductsArray[i]['price']
              item.index = i
              this.states.push(item)
            }
          }

        },
      );
  }

  setCartItemCount(key) {
    if (key === 'increse') {
      this.cartQuantity++
    }
    if (key === 'decrease') {
      this.cartQuantity--
    }
    this.setItemPrice()
  }


  addTocart() {
 
    if (this.model !== undefined) {
    
    
      let singleItem = {
        prductId: '', productName: '', price: 0, discount: 0, discountedPrice: 0,
        index: 0, quntity: 0, total: 0
      }
      singleItem.prductId = this.model.id
      singleItem.productName = this.model.name
      singleItem.price = Number(this.model.price)
      singleItem.quntity = this.cartQuantity
      singleItem.total = this.cartTotal
      this.shoppintCartArray.push(singleItem)
    
    this.clearItems()
  }
  }


  setItemPrice() {
    if (this.model !== undefined) {
      this.cartItemPrice = Number(this.model.price)
      this.cartTotal = this.cartItemPrice * this.cartQuantity
    }
  }

  clearItems() {
    this.model = undefined
    this.cartItemName = ''
    this.cartQuantity = 1
    this.cartTotal = 0
    this.cartItemPrice = 0
  }

  removeFromCart(index){
    let element = Number(index)
    this.shoppintCartArray.splice(element , 1)
  }

  viewInvoicePage(){
    sessionStorage.setItem('mycart' ,JSON.stringify(this.shoppintCartArray))
    sessionStorage.setItem('PaycustomerName' , this.customerName)
    sessionStorage.setItem('PaycustomerContact' , this.customerContact )
    sessionStorage.setItem('PaycustomerAddress' , this.customerAddress)
    sessionStorage.setItem('Paypaymythod' , this.paymentMythod)
    this.router.navigate(['/viewinvoice'])
  }

  setPaymentMethode(paymentMethod){
    this.paymentMythod = paymentMethod

  }
}
