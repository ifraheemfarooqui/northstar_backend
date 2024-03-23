import { Discount } from "./Discount.js";

const get_discount = async () => {
  const discount = await Discount.findAll();
  return discount;
};

const get_discount_by_id = async (discount_id) => {
  const discount = await Discount.findByPk(discount_id);
  return discount;
};

const create_discount = async (percent) => {
  const discount = await Discount.create(percent);
  return discount;
};

const update_discount = async (data, discount_id) => {
  const discount = await Discount.update(data, {
    where: { id: discount_id },
    plain: true,
    returning: true,
  });
};

const delete_discount = async (discount_id) => {
  const discount = await Discount.destroy({ where: (id = discount_id) });
  return discount;
};

export {
  get_discount,
  delete_discount,
  get_discount_by_id,
  update_discount,
  create_discount,
};
