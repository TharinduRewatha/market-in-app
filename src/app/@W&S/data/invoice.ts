export class invoice {
  dateTime : Date;
  username: String;
  payMethod :string[];// ["CASH", "VISA", "MASTER_CARD", "AMEX", "ONLINE"],
  totalDiscount : Number;
  totalValue : Number;
  customer : String;
  totalItems : Number;
  purchase : string[];
  merchant : String ;
}
