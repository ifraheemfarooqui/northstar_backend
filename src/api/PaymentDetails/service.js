import { PaymentDetails } from "./PaymentDetails.js";

const get_paydetails_by_id = async (paydetails_id) => {
  const paydetails = await PaymentDetails.findByPk(paydetails_id);
  return paydetails;
};

const get_paydetails = async () => {
  const paydetailss = await PaymentDetails.findAll();
  return paydetailss;
};

const create_paydetails = async (amount , provider , status) => {
  const cat = await PaymentDetails.create({ amount , provider , status });
  return cat;
};

const update_paydetails = async (data, paydetails_id) => {
  const cat = await PaymentDetails.update(data, {
    where: { id: paydetails_id },
    returning: true,
    plain: true,
  });
  return cat;
};

const delete_paydetails = async (paydetails_id) => {
  const cat = await PaymentDetails.destroy({ where: { id: paydetails_id } });
  return cat;
};

export {
  get_paydetails_by_id,
  get_paydetails,
  create_paydetails,
  update_paydetails,
  delete_paydetails,
};
