import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PorductCard from "../../Pages/ProductCard";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { order } = useSelector((s) => s);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const Plus = (data) => {
    dispatch({ type: "PLUS", payload: data });
  };
  const Minus = (data) => {
    dispatch({ type: "MINUS", payload: data });
  };
  let PriceAll = order.reduce((acc, el) => {
    acc+= el.quantity* el.price
  }, 0);
  let quinAll = order.reduce((acc, el) => {
    acc += el.quantity;
  }, 0);
  const DeleteOrder =(data)=>{
    dispatch({type:"DELETE_ORDER", payload : data})
    
  }
  return (
    <div id="order">
      <h1 className=" text-center text-black-900 text-5xl mt-3">MY ORDERS</h1>
      <div className="container">
        {order.length ? (
          <div class="relative p-4 overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product Image
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Q-ty
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.map((el) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="p-4">
                      <img
                        src={el.url}
                        class="w-16 md:w-32 rounded max-w-full max-h-full"
                        alt="img  "
                      />
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {el.name}
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center justify-center">
                        <button
                          onClick={() => Minus(el)}
                          class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <h1 className=" text-2xl">{el.quantity}</h1>
                        </div>
                        <button
                          onClick={(e) => Plus(el)}
                          class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {el.price * el.quantity}$
                    </td>
                    <td class="px-6 py-4">
                      <button
                      onClick={()=> DeleteOrder(el)}
                        type="button"
                        class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="p-4"></td>
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white"></td>
                  <td class="px-6 py-4">
                    <div class="flex items-center justify-center">
                      <div>
                        <h1 className=" text-2xl">{quinAll}</h1>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {PriceAll}$
                  </td>
                  <td class="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div
            id="alert-4"
            class="flex items-center p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
          >
            <svg
              class="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium">
              у вас пока нету товаров нажмите на "X" чтобы заказать
            </div>
            <button
              onClick={() => nav("/menu")}
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-4"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
