class apiurl {
  // static baseUrl = "http://localhost:4000";
  static baseUrl = "https://ecommerce-hub-4wzs.onrender.com"

  static accountLogin = this.baseUrl + "/user/login";
  static profileDetails = this.baseUrl + "/user/profile/details";
  static signup = this.baseUrl + "/user/signup";
  static logout = this.baseUrl + "/user/logout";
  static productList = this.baseUrl + "/user/list/products";
  static productDetails = this.baseUrl + "/user/product/details";
  static addCart = this.baseUrl + "/user/add/item";
  static fetchAllCart = this.baseUrl + "/user/list/cart/items";
  static clearCart = this.baseUrl + "/user/clear/cart";
  static deleteCartItem = this.baseUrl + "/user/delete/cart/item";
  static createOrder = this.baseUrl + "/user/initiate/order";
  static fetchOrderDetails = this.baseUrl + "/user/view/order/details";
}

export default apiurl;
