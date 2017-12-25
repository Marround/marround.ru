interface IRow {
  name: string;
  period: string;
  price: string;
}

export interface IPricelist {
  name: string;
  list: IRow[];
}
