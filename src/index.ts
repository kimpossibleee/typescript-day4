import Shop from './shop';
import User from './user';

const shop = new Shop();

const user = new User('YY', 26);

const items = shop.getItems();
user.addToCart(items[0]);
user.addToCart(items[1]);
user.addToCart(items[2]);

user.printCart();

user.removeFromCart(items[1]);

user.removeQuantityFromCart(items[0], 2);

user.printCart();

const cartTotal = user.cartTotal();
console.log(`Cart Total: $${cartTotal}`);
