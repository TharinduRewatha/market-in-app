import { Component, OnInit } from '@angular/core';
import { AllService } from '../../@W&S/mock/all.service';
import { category } from '../../@W&S/data/category';
import { appDetails } from '../../@W&S/otherClasses/appDetails';
import { tools } from '../../@W&S/otherClasses/tools';
import { message_ } from '../../@theme/components/message/message_';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'ngx-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  
  appDetailsObj = new appDetails()
  messageObj = new message_()
  toolObj = new tools()
  apiAddress = ''

  
  invoiceArray = []

  closeResult= ''

  constructor(
    private modalService: NgbModal,
    private allServiceObj: AllService

  ) { }

  ngOnInit(): void {
    this.apiAddress = this.appDetailsObj.getApiAddress + 'invoice'
    this.getData(this.apiAddress + '')
  }

  
  open_(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  



  getData(apiAddress) {
    this.allServiceObj.getData(apiAddress)
      .subscribe
      (
        httpresponse => {
          if (httpresponse !== null) {
          let dataArray =  this.toolObj.setIndex(httpresponse ,'other')
           this.invoiceArray = dataArray
           for(let i = 0; i < this.invoiceArray.length; i++){
             this.invoiceArray[i]['dateTime'] = this.toolObj.formatDate( this.invoiceArray[i]['dateTime'])
           }
          }
        },
      );
  }






  postNewData(categoryObj: category) {
    let apiAddress = this.appDetailsObj.getApiAddress + 'category'
    this.allServiceObj.postData(apiAddress, categoryObj)
      .subscribe
      (
        data => {
          this.getData(this.apiAddress)
          this.messageObj.getSuccessMessage()
        },(err) => {
          this.messageObj.getErrorMessageWithError(err.message)
        }
      );
  }





  UpdateRecord(categoryObj) {
    // let apiAddress = this.appDetailsObj.getApiAddress + 'category/' + this.categoryId
    // this.allServiceObj.putData(apiAddress, categoryObj)
    //   .subscribe
    //   (
    //     data => {
    //       this.getData(this.apiAddress)
    //      this.messageObj.getSuccessMessage()
    //     },(err) =>{
    //       this.messageObj.getErrorMessageWithError(err.massage)
    //     }
    //   );
  }

  
  deleteRecord(itemId) {
    let apiAddress = this.appDetailsObj.getApiAddress + 'invoice/' + itemId
    this.allServiceObj.deleteData(apiAddress)
      .subscribe
      (
        data => {
          this.getData(this.apiAddress)
         this.messageObj.getSuccessMessage()
        },(err) =>{
          this.messageObj.getErrorMessageWithError(err.massage)
        }
      );
  }



  submitCategory(key) {
    // let categoryObj = new category()
    // categoryObj.categoryDescription = this.categoryDescription
    // categoryObj.categoryName = this.categoryName
    // if (key === 'postNewcategory') {
    //   this.postNewData(categoryObj)
    // } else {
    //   this.UpdateRecord(categoryObj)  
    // }
  }




  clearCategoryForm(){
    //  this.categoryId = ''
    //  this.categoryName = ''
    //  this.categoryDescription = ''
  }

  setToDelete(index){
     let element = Number(index)
   let invoiceID = this.invoiceArray[element]['categoryId']
     this.deleteRecord(invoiceID)
  }

  setToUpdate(index){
    // let element = Number(index)
    //  this.categoryId = this.categoryArray[element]['categoryId']
    //  this.categoryName = this.categoryArray[element]['categoryName']
    //  this.categoryDescription = this.categoryArray[element]['categoryDescription']
  }
}
