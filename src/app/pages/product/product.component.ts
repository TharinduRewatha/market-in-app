import { Component, OnInit } from '@angular/core';
import { AllService } from '../../@W&S/mock/all.service';
import { products } from '../../@W&S/data/products';
import { appDetails } from '../../@W&S/otherClasses/appDetails';
import { tools } from '../../@W&S/otherClasses/tools';
import { message_ } from '../../@theme/components/message/message_';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  appDetailsObj = new appDetails()
  messageObj = new message_()
  toolObj = new tools()
  apiAddress = ''
  closeResult = ''


  categoryArray = []
  merchantArray = []
  productArray = []

  productId = ''
  brandName = ''
  category = ''
  productName = ''
  description = ''
  tag = ''
  cost = ''
  price = ''
  disValue = ''
  actualPrice = ''
  merchant = ''
  reorderLevel = ''

  constructor(
    private modalService: NgbModal,
    private allServiceObj: AllService,

  ) { }

  ngOnInit(): void {
    this.apiAddress = this.appDetailsObj.getApiAddress + 'product'
    this.getCategory(this.appDetailsObj.getApiAddress + 'category')
    this.getMerchant(this.appDetailsObj.getApiAddress + 'merchant')
    this.getData(this.apiAddress )
  }


  open_(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
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




async  getData(apiAddress) {
    this.allServiceObj.getData(apiAddress)
      .subscribe
      (
        httpresponse => {
          if (httpresponse !== null) {
            let dataArray = this.toolObj.setIndex(httpresponse, 'other')
            this.productArray = dataArray
            console.log(this.productArray)
          }
        },
      );
  }

  getCategory(apiAddress) {
    this.allServiceObj.getData(apiAddress)
      .subscribe
      (
        httpresponse => {
          if (httpresponse !== null) {
            let dataArray = this.toolObj.setIndex(httpresponse, 'other')
            this.categoryArray = dataArray
          }
        },
      );
  }

  getMerchant(apiAddress) {
    this.allServiceObj.getData(apiAddress)
      .subscribe
      (
        httpresponse => {
          if (httpresponse !== null) {
            let dataArray = this.toolObj.setIndex(httpresponse, 'other')
            this.merchantArray = dataArray
          }
        },
      );
  }




  postNewData(categoryObj: products) {
   
    this.allServiceObj.postData(this.apiAddress, categoryObj)
      .subscribe
      (
        data => {
          this.getData(this.apiAddress )
          this.messageObj.getSuccessMessage()
        }, (err) => {
          this.messageObj.getErrorMessageWithError(err.message)
        }
      );
  }





  UpdateRecord(categoryObj) {
    let api = this.apiAddress + '/' + this.productId
    this.allServiceObj.putData(api, categoryObj)
      .subscribe
      (
        data => {
          this.getData(this.apiAddress )
          this.messageObj.getSuccessMessage()
        }, (err) => {
          console.log(err)
          this.messageObj.getErrorMessageWithError(err.message)
        }
      );
  }


  deleteRecord(id) {
    let apiAddress = this.apiAddress +'/' + id
    this.allServiceObj.deleteData(apiAddress)
      .subscribe
      (
        data => {
          this.getData(this.apiAddress )
          this.messageObj.getSuccessMessage()
        }, (err) => {
          this.messageObj.getErrorMessageWithError(err.massage)
        }
      );
  }



  proceedToSubmit(key) {
    let dataObject = new products()
    dataObject.brandName = this.brandName
    dataObject.category = this.category
    dataObject.productName = this.productName
    dataObject.description = this.description
    dataObject.tag = this.tag
    dataObject.cost = Number(this.cost)
    dataObject.price = Number(this.price)
    dataObject.disValue = Number(this.disValue)
    dataObject.actualPrice = Number(this.actualPrice)
    dataObject.merchant = this.merchant
    dataObject.reorderLevel = this.reorderLevel

    if (key === 'post') {
      this.postNewData(dataObject)
    } else {
      this.UpdateRecord(dataObject)
    }
  }




  clearCategoryForm() {
    this.productId = ''
    this.brandName = ''
    this.category = ''
    this.productName = ''
    this.description = ''
    this.tag = ''
    this.cost = ''
    this.reorderLevel = ''
    this.price = ''
    this.disValue = ''
    this.actualPrice = ''
    this.merchant = ''
  }

  setToDelete(index) {
     let element = Number(index)
     let id = this.productArray[element]['productId']
     this.deleteRecord(id)
  }

  setToUpdate(index) {
    let element = Number(index)
    this.productId = this.productArray[element]['productId']
    this.brandName = this.productArray[element]['brandName']
    this.category = this.productArray[element]['category']
    this.productName = this.productArray[element]['productName']
    this.description = this.productArray[element]['description']
    this.tag = this.productArray[element]['tag']
    this.cost = this.productArray[element]['cost']
    this.reorderLevel =this.productArray[element]['reorderLevel']
    this.merchant = this.productArray[element]['merchant']
    this.price = this.productArray[element]['price']
    this.disValue = this.productArray[element]['disValue']
    this.actualPrice = this.productArray[element]['actualPrice']
  }


}
