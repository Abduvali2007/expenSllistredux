import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();
  const messageSucces = () => {
    toast.success("⭐продукт успешно добавлен!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const messageError = () => {
    toast.error("😊 заполните пустые поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const btnAll = () => {
    if (img.trim() === "" || name.trim() === "" || price.trim() === "") {
      messageError();
    } else {
      let obj = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        name: name,
        url: img,
        price: price,
        quantity: 1,
      };
      let res = [...product, obj];
      localStorage.setItem("product", JSON.stringify(res));
      dispatch({ type: "OBJ_VALUE", payload: obj });
      setImg("");
      setName("");
      setPrice("");
      messageSucces();
    }
  };
  return (
    <form class="max-w-sm mx-auto mt-10 flex  flex-col">
      <h1 className="text-center text-black-900 text-4xl mt-3 p-10">
        {" "}
        Create Product
      </h1>
      <div class="mb-5">
        <input
          onChange={(e) => setImg(e.target.value)}
          value={img}
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Url ...."
          required
        />
      </div>
      <div class="mb-5">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
        />
      </div>
      <div class="mb-5">
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Price"
          required
        />
      </div>
      <button
        onClick={() => btnAll()}
        type="button"
        class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      >
        <svg
          class="w-4 h-4 me-2 -ms-1"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="paypal"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
          ></path>
        </svg>
        Create
      </button>
      <ToastContainer />
    </form>
  );
};

export default Admin;
