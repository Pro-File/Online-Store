export var CalculateBill = (CartItems) => {
    var TotalAmmount = 0;
    CartItems.forEach((CartItem) => {
        TotalAmmount = (TotalAmmount + (CartItem.quantity * CartItem.cost));
    })
    // console.log(TotalAmmount)
    return TotalAmmount;
}