import { Component, OnInit } from '@angular/core';
import { newinvoice } from '../@W&S/data/newInvoice';
import { AllService } from '../@W&S/mock/all.service';
import { appDetails } from '../@W&S/otherClasses/appDetails';
import { message_ } from '../@theme/components/message/message_';
@Component({
  selector: 'ngx-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {
  
  appDetailsObj = new appDetails()
  messageObj = new message_()
  apiAddress = ''
  user = 'admin';
  Paypaymythod = ''
  PaycustomerAddress =''
  PaycustomerContact = ''
  PaycustomerName = ''
  invoiceId = "123";
  totalItems = 1
  total = 0

  invoiceDatArray = []

  date_;
  constructor(
    private allserviceObj:AllService
  ) { }

  ngOnInit(): void {
    this.date_ = new Date()
    this.apiAddress = this.appDetailsObj.getApiAddress + 'invoice'
    this.invoiceDatArray = JSON.parse( sessionStorage.getItem('mycart'))
  
    for(let i = 0; i < this.invoiceDatArray.length; i++){
      let subTotal = this.invoiceDatArray[i]['total']
      this.total += subTotal
      this.totalItems++
    }

    this.Paypaymythod = sessionStorage.getItem('Paypaymythod')
    this.PaycustomerAddress = sessionStorage.getItem('PaycustomerAddress')
    this.PaycustomerContact = sessionStorage.getItem('PaycustomerContact')
    this.PaycustomerName = sessionStorage.getItem('PaycustomerName')

    console.log(this.invoiceDatArray)
  }


  postInvoice(){
  let  invoiceObj = new newinvoice()
  invoiceObj.customer = this.PaycustomerName
  invoiceObj.dateTime = new Date()
  invoiceObj.merchant = null
  invoiceObj.payMethod = [this.Paypaymythod]
  invoiceObj.purchase = []
  invoiceObj.totalDiscount = 0 
  invoiceObj.totalItems = this.totalItems
  invoiceObj.totalValue = this.total
  invoiceObj.username = this.user

  for(let i = 0; i < this.invoiceDatArray.length; i++){

    let purchesItem = { invoice: '' , qty: 0 , discount: 0 , unitPrice: 0 , item: '' , brandName: '' , dateTime: new Date() }
    purchesItem.invoice = this.invoiceId
    purchesItem.qty = this.totalItems
    purchesItem.unitPrice = this.invoiceDatArray[i]['price']
    purchesItem.item = this.invoiceDatArray[i]['prductId']
    invoiceObj.purchase.push(purchesItem)
  }
  this.postNewData(invoiceObj)

  

  }


  postNewData(invoiceObj:newinvoice) {
   
    this.allserviceObj.postData(this.apiAddress, invoiceObj)
      .subscribe
      (
        data => {
        
          this.messageObj.getSuccessMessage()
        }, (err) => {
          this.messageObj.getErrorMessageWithError(err.message)
        }
      );
  }


}
