const getCartData = () => {
    const data = localStorage.getItem('cart-list')
    if (data) {
        const jsonData = JSON.parse(data)
        return jsonData;
    }
    else {
        return []
    }
}


const addToCart = (id) => {
    const storedData = getCartData();
    if (storedData.includes(id)) {
        console.log('already existed');
    }
    else {
        storedData.push(id)
        const storedDataStr = JSON.stringify(storedData)
        localStorage.setItem('cart-list', storedDataStr)

    }



}


const getWishList = () => {
    const storedWishList = localStorage.getItem('wish-list')
    if (storedWishList) {
        const wishlist = JSON.parse(storedWishList)
        return wishlist;
    }
    else {
        return []
    }
}

const addToWishList = (id,setButtonDisable) => {
    const wishListData = getWishList();

    if (wishListData.includes(id)) {
        setButtonDisable(true);
        console.log('already in wish list');

    }
    else {
        wishListData.push(id)
        const wishListStr = JSON.stringify(wishListData)
        localStorage.setItem('wish-list', wishListStr)
    }
}


const updateCart=(id)=>
{
    const storedData = getCartData();

    const updatedList = storedData.filter(itemId=> itemId !== id)
    const updatedListStr = JSON.stringify(updatedList)
    localStorage.setItem('cart-list',updatedListStr)

}



export { addToCart, addToWishList, getCartData, getWishList,updateCart}