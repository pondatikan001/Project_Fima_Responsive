//กำหนดค่าproduct
const productList = JSON.parse(localStorage.getItem('product'))
let value = []
let sumEachProduct = []
let sumAll = 0
let fee = 129; 

for (var i = 0; i < productList.length; i++) {
    value[i] = 1;
}
//function paymentsumPrice รับค่าจากผลรวมจากbagcartแล้วให้แสดงค่าใน summary
const sumtotalPrice = JSON.parse(localStorage.getItem('totalPrice'))
function paymentsumPrice() {
    let sum = sumAll
    document.getElementById('btn-totalPrice').innerHTML = 'Confrim Payment: $' + sumtotalPrice;
    document.getElementById('checkout-summary').innerHTML = ` 
        <div class="summary-content">
            <h1 class="content-bag-title">Summary</h1>
            <div class="sum-detail">
                <div class="row g-3">
                    <div class="col">
                        <p class="sum-detail-title">Subtotal</p>
                    </div>
                    <div class="col">
                        <p class="price">$${sumtotalPrice - fee}</p>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col">
                        <p class="sum-detail-title">Delivery</p>
                    </div>
                    <div class="col ">
                        <p class="price">$${fee}</p>
                    </div>
                </div>
            </div>
            <div class="row g-3 sum-total-all">
                <div class="col">
                    <p class="summary-total">Total</p>
                </div>
                <div class="col">
                    <p class="price-total checkout-price">$${sumtotalPrice}</p>
                </div>
            </div>
        </div>

`
}
//fuction paymentconfirmation = ราคารวม แล้วเวลา กดปุ่ม Confirm Payment จะแสดงผลออกหน้าจอ popup ตามข้อความที่ใส่ไว้
function paymentconfirmation() {
    let paymentconfirmation = sumtotalPrice;
    alert('Confirm Payment: $' + paymentconfirmation)
}