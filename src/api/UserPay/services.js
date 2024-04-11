import { UserPay } from "./UserPay.js";

const get_userpay_by_id = async (userpay_id) => {
  const userpay = await UserPay.findByPk(userpay_id);
  return userpay;
};

const get_userpay = async () => {
  const userpays = await UserPay.findAll();
  return userpays;
};

const create_userpay = async (title, img_url) => {
  const cat = await UserPay.create({ title, img_url });
  return cat;
};

const update_userpay = async (data, userpay_id) => {
  const cat = await UserPay.update(data, {
    where: { id: userpay_id },
    returning: true,
    plain: true,
  });
  return cat;
};

const delete_userpay = async (userpay_id) => {
  const cat = await UserPay.destroy({ where: { id: userpay_id } });
  return cat;
};

export {
  get_userpay_by_id,
  get_userpay,
  create_userpay,
  update_userpay,
  delete_userpay,
};
