import { Component, OnInit } from '@angular/core';
import { AllService } from '../../@W&S/mock/all.service';
import { merchant } from '../../@W&S/data/marchat';
import { appDetails } from '../../@W&S/otherClasses/appDetails';
import { tools } from '../../@W&S/otherClasses/tools';
import { message_ } from '../../@theme/components/message/message_';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'ngx-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {

  appDetailsObj = new appDetails()
  messageObj = new message_()
  toolObj = new tools()
  apiAddress = ''
  closeResult = ''

  merchantArray = []

  merchantId =''
  merchantName = ''
  contactTitle = ''
  personalInfo  = ''

  constructor(
    private modalService: NgbModal,
    private allServiceObj: AllService,

  ) { }

  ngOnInit(): void {
    this.apiAddress = this.appDetailsObj.getApiAddress + 'merchant'
    this.getData(this.apiAddress)
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
          console.log(httpresponse)
          if (httpresponse !== null) {
            let dataArray = this.toolObj.setIndex(httpresponse, 'country,address,email,postalCode,city')
            this.merchantArray = dataArray
            for(let i = 0; i < this.merchantArray.length; i++){
              let personalId = this.merchantArray[i]['personalInfo']
              if(personalId != ''){
                let personalApi = this.appDetailsObj.getApiAddress + 'personalInfo/' + this.merchantArray[i]['personalInfo']
                this.setPersonalInfomation(personalApi , this.merchantArray[i])
              }
            }
          }
        },
      );
  }

  

  postNewData(categoryObj: merchant) {
   
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
    let api = this.apiAddress + '/' + this.merchantId
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


  async setPersonalInfomation(apiAddress,dataArray){
    
    this.allServiceObj.getData(apiAddress)
    .subscribe
    (
      httpresponse => {
        if (httpresponse !== null) {
          dataArray['country']=httpresponse.country
          dataArray['address']=httpresponse.address
          dataArray['email']=httpresponse.email
          dataArray['postalCode']=httpresponse.postalCode
          dataArray['city']=httpresponse.city
        }
      },
    );
  }

  proceedToSubmit() {
    let dataObject = new merchant()
    dataObject.merchantName =this.merchantName
    dataObject.contactTitle = this.contactTitle
    dataObject.personalInfo  = this.personalInfo
    this.UpdateRecord(dataObject)
    
  }




  clearCategoryForm() {
    this.merchantId =''
    this.merchantName = ''
    this.contactTitle = ''
    this.personalInfo  = ''
  }

  setToDelete(index) {
     let element = Number(index)
     let id = this.merchantArray[element]['merchantId']
     this.deleteRecord(id)
  }

  setToUpdate(index) {
     let element = Number(index)
     this.merchantId = this.merchantArray[element]['merchantId']
     this.contactTitle = this.merchantArray[element]['contactTitle']
     this.merchantName = this.merchantArray[element]['merchantName']
   
  }



}
