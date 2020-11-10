export class newinvoice {
  dateTime : Date;
  username: String;
  payMethod :string[];// ["CASH", "VISA", "MASTER_CARD", "AMEX", "ONLINE"],
  totalDiscount : Number;
  totalValue : Number;
  customer : String;
  totalItems : Number;
  purchase : any[];
  merchant : String ;
}
