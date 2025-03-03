// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function lowestStock (inventory) {
  let minStock = inventory[0]
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity < minStock.quantity)
    minStock = inventory[i]
  }
}   

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minStock.name} ซึ่งมี ${minStock.quantity} ชิ้น`);
// สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น