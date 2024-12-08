    // 1. 쇼핑 카트의 총 금액 계산하기

const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }
];

let totalPrice = 0; // 초기값 0으로 초기화
for (let i=0; i<cart.length; i++) 
{
    totalPrice += cart[i].price*cart[i].quantity;
}
console.log(`Total Price: ${totalPrice}`);
//console.log(제품별 금액: $(itemsTotals)');    
    totalPrice = 0;
    cart.forEach(goods => totalPrice += goods.price * goods.quantity);
    console.log(`Total Price: ${totalPrice}`);
    
    totalPrice = cart.reduce((a,goods) =>(a + goods.price *goods.quantity),0); //0은 a의 초기값
    console.log(`Total Price: ${totalPrice}`);
    
    const itemsTotals = cart.map(goods => ({
        item: goods.item,
        total: goods.price * goods.quantity
    }));
    console.log(`제품별 금액:`, itemsTotals);

    // 2. 이름 목록 변환하기

    //const names = ['alice', 'bob', 'charlie'];

    //const uppercasedNames = names.map(

    //);

    ///const capitalStartnames = names.map(

    //);