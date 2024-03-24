import { Address } from "./Address.js";

const get_address_by_id = async (address_id) => {
  const address = await Address.findByPk(address_id);
  return address;
};
const get_address_by_user_id = async (user_id) => {
  const address = await Address.findByPk(user_id);
  return address;
};

const get_address = async () => {
  const address = await Address.findAll();
  return address;
};

const create_address = async ({
  location,
  city,
  country,
  postalcode,
  telephone,
}) => {
  const address = await Address.create({
    location,
    city,
    country,
    postalcode,
    telephone,
  });
  return address;
};

const update_address = async (data, address_id) => {
  const address = await Address.update(data, {
    where: { id: address_id },
    returning: true,
    plain: true,
  });
  return address;
};

const delete_address = async (address_id) => {
  const address = await Address.destroy({ where: { id: address_id } });
  return address;
};

export {
  get_address_by_id,
  get_address_by_user_id,
  get_address,
  create_address,
  update_address,
  delete_address,
};
