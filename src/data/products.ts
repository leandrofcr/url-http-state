export async function getProducts() {
  //delay 1s
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    { id: 619364, name: 'Black Skirt', price: 62.45 },
    { id: 294781, name: 'Yellow Dress', price: 64.32 },
    { id: 870041, name: 'Blue Skirt', price: 53.09 },
    { id: 416609, name: 'Black Hat', price: 28.18 },
    { id: 83205, name: 'White Skirt', price: 33.80 },
    { id: 111648, name: 'Green Jacket', price: 73.98 },
    { id: 578056, name: 'Purple Skirt', price: 21.21 },
    { id: 979122, name: 'Red Skirt', price: 54.66 },
    { id: 155565, name: 'Black Socks', price: 38.41 },
    { id: 386122, name: 'Pink Shirt', price: 47.46 },
    // { id: 708425, name: 'Red Socks', price: 23.79 },
    // { id: 365119, name: 'Blue Pants', price: 50.02 },
    // { id: 326362, name: 'Black Pants', price: 25.97 },
    // { id: 130691, name: 'White Pants', price: 65.94 },
    // { id: 667692, name: 'Pink Jeans', price: 58.15 },
    // { id: 874731, name: 'Black Shirt', price: 46.05 },
    // { id: 602060, name: 'Black Jacket', price: 33.18 },
    // { id: 630203, name: 'Orange Pants', price: 38.68 },
    // { id: 44693, name: 'Yellow Socks', price: 24.40 },
    // { id: 574378, name: 'Green Pants', price: 46.61 }
  ]

}