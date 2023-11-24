// Question #1: Shipping Cost Calculator

function calculateShippingCost(orders) {
  // เริ่มเขียนโค้ดตรงนี้
  const res = [];
  for (const order of orders) {
    const orderTotal = order.total
    if (orderTotal >= 6000) {
      res.push(`Order ${order.orderId}: Shipping is free.`)
    }
    else if (orderTotal >= 3000) {
      res.push(`Order ${order.orderId}: Shipping cost is 250.`)
    }
    else {
      res.push(`Order ${order.orderId}: Shopping cost is 500.`)
    }
  }
  return res
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

console.log(calculateShippingCost(orders));
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
