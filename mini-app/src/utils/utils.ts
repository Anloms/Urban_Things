export const Month = {
  metadata: {
    field0: "1",
    field1: "2",
    productId: "BZ04",
    operatorId: "12345"
  },
  price: 75.50,
  currency: "GBP",
  name: "Month",
  description: "A monthly ticket.",
  order: 0
}

export const Week = {
  metadata: {
    field0: "1",
    field1: "2",
    productId: "BZ03",
    operatorId: "12345"
  },
  price: 20.00,
  currency: "GBP",
  name: "Week",
  description: "A weekly ticket.",
  order: 1
};
export const Day = {
  metadata: {
    field0: "1",
    field1: "2",
    productId: "BZ02",
    operatorId: "12345"
  },
  price: 4.00,
  currency: "GBP",
  name: "Day",
  description: "A daily ticket.",
  order: 0
};

export interface UtilsType {
  metadata: {
    field0: string,
    field1: string,
    productId: string,
    operatorId: string

  },
  price: number,
  currency: string,
  name: string,
  description: string,
  order: number
}