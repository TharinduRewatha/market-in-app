interface getCustomer {
  name: string;
  phone: string;
  address: string;
}

export class Customer {
  name: string;
  phone: string;
  address: string;
}

export class CustomerUpdate {
  name: string;
  address: string;
}


export interface SearchCustomer {
  name: string;
  phone: number;
  address: number;
}

//api/customer/0771234567
