import Realm from "realm";

class Products extends Realm.Object {}
Products.schema = {
  name: "Products",
  primaryKey: "id",
  properties: {
    id: "string",
    imgproduct: "int",
    tag : "int",
    nameproduct: "string",
    price: "string",
    dis : "string",
    current : "int"
  },
};

export default Products;
