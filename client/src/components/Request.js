import CustomCard from "./CustomCard";

const Request = ({ basket, request, addProduct, RemoveItemFromBasket }) => (
  <CustomCard
    basket={basket}
    request={request}
    addProduct={addProduct}
    RemoveItemFromBasket={RemoveItemFromBasket}
  />
);

export default Request;