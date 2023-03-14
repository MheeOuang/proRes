export interface Order {
  orderID:  number;
  cusName:  string;
  foodName: string;
  amount:   number;
  status:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOrder(json: string): Order[] {
      return JSON.parse(json);
  }

  public static orderToJson(value: Order[]): string {
      return JSON.stringify(value);
  }
}
