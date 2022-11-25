export interface Banks {
  data: Array<Bank>;
}

interface Bank {
  bankName: string;
  description: string;
  age: number;
  url: string;
}
