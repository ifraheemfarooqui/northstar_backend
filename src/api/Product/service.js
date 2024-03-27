import { Inventory } from "../Inventory/Inventory.js";
import { create_inventory } from "../Inventory/services.js";
import { Product } from "./Product.js";

const get_product = async () => {
  const product = await Product.findAll();
  return product;
};
const get_product_by_id = async (product_id) => {
  const product = await Product.findByPk(product_id, {include : {model : Inventory, attributes : ['quantity','product_id']}});
  return product;
};

const get_product_by_cat = async (category_id) => {
  const product = await Product.findAll({
    where: { category_id: category_id },
  });
  return product;
};

const create_product = async (name, description, price, category_id, quantity) => {
  const product = await Product.create({
    name,
    description,
    price,
    category_id,
  });

const inventory = await create_inventory(quantity, product.id);

  return {product : product, inventory : inventory};
};

const update_product = async (body, product_id) => {
  const product = await Product.update(body, {
    where: { id: product_id },
    returning: true,
    plain: true,
  });
  return product;
};

const delete_product = async (product_id) => {
  const product = await Product.destroy({ where: { id: product_id } });
  return product;
};

export {
  get_product,
  get_product_by_id,
  get_product_by_cat,
  create_product,
  delete_product,
  update_product,
};
