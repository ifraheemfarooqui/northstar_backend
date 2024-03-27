import { Inventory } from "./Inventory.js";

const get_inventory_by_id = async (inventory_id) => {
  const inventory = await Inventory.findByPk(inventory_id);
  return inventory;
}

const get_inventory_by_product_id = async (product_id) => {
  const inventory = await Inventory.findOne({where : {product_id : product_id}});
  return inventory;
};

const create_inventory = async (quantity, product_id) => {
  const inventory = await Inventory.create({ quantity, product_id });
  return inventory;
};

const update_inventory = async (data, product_id) => {
  const inventory = await Inventory.update(data, {
    where: { product_id: product_id },
    returning: true,
    plain: true,
  });
  return inventory;
};

const delete_inventory = async (product_id) => {
  const inventory = await Inventory.destroy({ where: { product_id: product_id } });
  return inventory;
};

export {
  get_inventory_by_product_id,
  get_inventory_by_id,
  create_inventory,
  update_inventory,
  delete_inventory,
};
