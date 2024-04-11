import db from "../config/db.js";

const orderTotaltrigger = async() => {
    const triggerSQL = `CREATE OR REPLACE FUNCTION update_total()
    RETURNS TRIGGER AS
    $$
    DECLARE
      product_price NUMERIC;
    BEGIN
        SELECT price
        INTO product_price
        FROM products
        WHERE id = NEW.product_id;

        UPDATE "Order"
        SET total = product_price * NEW.quantity
        WHERE id = NEW.order_id;
    
        RETURN NEW;
    END;
    $$
    LANGUAGE plpgsql;
    
    CREATE TRIGGER update_order_total
    AFTER INSERT OR UPDATE OR DELETE ON OrderItem
    FOR EACH ROW
    EXECUTE FUNCTION update_total();
    `
    try {
        await db.query(triggerSQL);
        console.log("Trigger created successfully");
      } catch (error) {
        return error
      }
}

export {orderTotaltrigger}