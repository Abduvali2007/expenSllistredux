import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PorductCard = ({ el }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s);
  const addToOrder = (data) => {
    dispatch({ type: " ADD_TO_ORDER", payload: data });
  };
  const del = () => {
    dispatch({ type: "DELETE", payload: el.id });
  };
  return (
    <div>
      <div class=" w-[250px] h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg w-full h-[150px] object-cover"
            src={el.url}
            alt=""
          />
        </a>
        <div class="p-5 flex gap-8">
          <div className="flex flex-col">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.name}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {el.price} $
            </p>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => addToOrder(el)}
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ADD TO ORDER
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            <button
              onClick={() => del()}
              type="button"
              class="text-white bg-gradient-to-r mt-2 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorductCard;
