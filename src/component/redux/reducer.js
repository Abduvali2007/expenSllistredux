let inithionalState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  order: JSON.parse(localStorage.getItem("order")) || [],
};

export const Reducer = (state = inithionalState, action) => {
  switch (action.type) {
    case "OBJ_VALUE":
      return { ...state, product: [...state.product, action.payload] };
    case "DELETE":
      let filterProduct= state.product.filter((el) => el.id !== action.payload)
      localStorage.setItem("product",JSON.stringify(filterProduct))
      return {
        ...state,
        product:filterProduct
      };
    case " ADD_TO_ORDER":
      let findPro = state.order.find((el) => el.id === action.payload.id);
      if (findPro) {
        console.log("bar");
      } else {
        let res = [...state.order, action.payload];
        localStorage.setItem("order", JSON.stringify(res));
        return { ...state, order: res };
      }
    case "PLUS":
      let findProduct = state.order.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("order", JSON.stringify(findProduct));
      return {
        ...state,
        order: findProduct,
      };
    case "MINUS":
      let MapProduct = state.order.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("order", JSON.stringify(MapProduct));
      return {
        ...state,
        order: MapProduct,
      };
case "DELETE_ORDER":
  let filterOrder= state.order.filter((el)=> el.id !== action.payload.id )
  localStorage.setItem("order", JSON.stringify(filterOrder))
  return{
    ...state,order: filterOrder
  }
    default:
      return state;
  }
};
