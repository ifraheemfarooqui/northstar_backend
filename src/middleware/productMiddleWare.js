// Define the expected structure
const expectedStructure = { product_id: "", quantity: "" };
// Function to check if the payload matches the expected structure
function isPayloadValid(req, res ,next) {

    const payload = req.body.items

  // Check if payload is an array
  if (!Array.isArray(payload)) {
    res.status(400).json("Product is not a array");
  }

  if(Array.length > 1) {
    res.status(400).json("Item are Empty")
  }
  // Check if the length of payload matches the expected structure
  // if (payload.length !== expectedStructure.length) {
  //     return false;
  // }

  // Check each item in the payload
  for (let i = 0; i < payload.length; i++) {
    const item = payload[i];
    const expectedItem = expectedStructure;

    // Check if each key in the item matches the expected structure
    for (const key in expectedItem) {
      if (!(key in item)) {
        res.status(400).json("Structure of Payload is not correct");
      }
    }
  }

  // If all checks pass, payload structure is valid
  next();
}

export { isPayloadValid };
