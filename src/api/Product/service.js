import { Product } from "./Product.js";

const get_product = async () => {
  const product = await Product.findAll();
  return product;
};
const get_product_by_cat = async (category_id) => {
  const product = await Product.findByPk(category_id);
  return product;
};

const get_product_by_id = async (product_id) => {
  const product = await Product.findByPk(product_id,{
    where : {category_id : category_id},
    returning: true,
    plain : true,
  });
  return product;
};

const create_product = async (name, description, price) => {
  const product = await Product.create({ names, description, price });
  return product;
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
