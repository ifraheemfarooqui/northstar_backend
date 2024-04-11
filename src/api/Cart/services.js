import { OrderItem } from "../OrderItem/OrderItem.js";
import { Cart } from "./Cart.js";

const get_cart_by_id = async (cart_id) => {
  const cart = await Cart.findByPk(cart_id);
  return cart;
};
const get_cart_by_user_id = async (user_id) => {
  const cart = await Cart.findByPk(user_id, {include: OrderItem});
  return cart;
};

const get_cart = async () => {
  const cart = await Cart.findAll();
  return cart;
};

const create_cart = async ({ quantity }) => {
  const cart = await Cart.create({
    quantity,
  });
  return cart;
};

const update_cart = async (data, cart_id) => {
  const cart = await Cart.update(data, {
    where: { id: cart_id },
    returning: true,
    plain: true,
  });
  return cart;
};

const delete_cart = async (cart_id) => {
  const cart = await Cart.destroy({ where: { id: cart_id } });
  return cart;
};

export {
  get_cart_by_id,
  get_cart_by_user_id,
  get_cart,
  create_cart,
  update_cart,
  delete_cart,
};
