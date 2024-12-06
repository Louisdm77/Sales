import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserView } from "../Context/viewContext";
import Header from "./Header";
import Footer from "./Footer";

function laptops() {
  function calculateTotal(x, y) {
    return x * y;
  }
  const laptops = [
    {
      id: 101,
      title: "Dell XPS 13",
      description:
        "Compact design with powerful performance, perfect for on-the-go.",
      price: 999.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7xsTCI2iH227YfV2OopTu5qP7ImLJeK0SQ&s",
      category: "Ultrabook",
    },
    {
      id: 102,
      title: "Apple MacBook Air",
      description:
        "Lightweight, high-performance laptop with a stunning Retina display.",
      price: 1099.99,
      image:
        "https://cdn.myrapidtrack.com/products/images/1655380676169267647.jpg",
      category: "Ultrabook",
    },
    {
      id: 103,
      title: "HP Spectre x360",
      description:
        "Versatile 2-in-1 laptop with a sleek design and long battery life.",
      price: 1299.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIoqSVB3KMgGVnZItooHvDfHHKR8RQUpNwA&s",
      category: "Convertible",
    },
    {
      id: 104,
      title: "Lenovo ThinkPad X1 Carbon",
      description:
        "Business laptop with excellent keyboard and robust security features.",
      price: 1399.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71jePBtgBURKmCJPNm6QJILYas_jQJ7MXkg&s",
      category: "Business",
    },
    {
      id: 105,
      title: "Asus ROG Zephyrus G14",
      description: "Gaming laptop with high refresh rate and powerful GPU.",
      price: 1499.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuzV1PfxfB9JWGhH-7wtJYsvn3mx69tmR3g&s",
      category: "Gaming",
    },
    {
      id: 106,
      title: "Microsoft Surface Laptop 4",
      description: "Elegant design with a high-resolution touchscreen.",
      price: 1299.99,
      image:
        "https://cdn.myrapidtrack.com/products/images/1641551056169829764.jpg",
      category: "Ultrabook",
    },
    {
      id: 107,
      title: "Razer Blade 15",
      description: "High-performance gaming laptop with a sleek design.",
      price: 1999.99,
      image:
        "https://img.favpng.com/15/17/3/laptop-asus-netbook-ivy-bridge-random-access-memory-png-favpng-mLN2BSuPSCemeZ88VgMvpY9RZ.jpg",
      category: "Gaming",
    },
    {
      id: 108,
      title: "Acer Swift 3",
      description:
        "Affordable ultrabook with solid performance and lightweight design.",
      price: 749.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2TGYslwDoS2DBehRcyaRkPm92v2m60bkUNdkQw7Huh8ckMs3fTYaPc7py7j1wlxULJk&usqp=CAU",
      category: "Ultrabook",
    },
    {
      id: 109,
      title: "HP Envy x360",
      description:
        "2-in-1 laptop with a vibrant display and great performance.",
      price: 949.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV03llBwWhfOS7s_pXCiYgHYIwWS9CPWWUA&s",
      category: "Convertible",
    },
    {
      id: 110,
      title: "LG Gram 17",
      description: "Ultra-light laptop with a large 17-inch display.",
      price: 1699.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoKZFe8oIts8g0PaIIvCJdom8gQQV9gcVRw&s",
      category: "Ultrabook",
    },
    {
      id: 111,
      title: "Dell G5 15",
      description:
        "Gaming laptop that strikes a balance between performance and price.",
      price: 1099.99,
      image:
        "https://s.alicdn.com/@sc04/kf/H0a4aa11ee0b045e39ef137f618f39746d.jpg_300x300.jpg",
      category: "Gaming",
    },
    {
      id: 112,
      title: "Apple MacBook Pro 16",
      description:
        "Powerful laptop for professionals with exceptional performance.",
      price: 2399.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTee7hII7OiYIYjr1_ZZbjlAWAbIA5N466VZQ&s",
      category: "Ultrabook",
    },
    {
      id: 113,
      title: "Asus VivoBook 15",
      description:
        "Stylish laptop with a powerful performance at a budget-friendly price.",
      price: 599.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7xsTCI2iH227YfV2OopTu5qP7ImLJeK0SQ&s",
      category: "Ultrabook",
    },
    {
      id: 114,
      title: "Microsoft Surface Pro 7",
      description: "Versatile 2-in-1 laptop with exceptional performance.",
      price: 899.99,
      image:
        "https://cdn.myrapidtrack.com/products/images/1655380676169267647.jpg",
      category: "Convertible",
    },
    {
      id: 115,
      title: "Acer Predator Helios 300",
      description: "Gaming laptop with high refresh rate and RGB keyboard.",
      price: 1299.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIoqSVB3KMgGVnZItooHvDfHHKR8RQUpNwA&s",
      category: "Gaming",
    },
    {
      id: 116,
      title: "HP Omen 15",
      description: "High-performance gaming laptop with a sleek design.",
      price: 1399.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuzV1PfxfB9JWGhH-7wtJYsvn3mx69tmR3g&s",
      category: "Gaming",
    },
    {
      id: 117,
      title: "Lenovo Yoga C940",
      description:
        "2-in-1 laptop with a stunning display and powerful performance.",
      price: 1399.99,
      image:
        "https://cdn.myrapidtrack.com/products/images/1641551056169829764.jpg",
      category: "Convertible",
    },
    {
      id: 118,
      title: "Dell Inspiron 15",
      description: "Affordable laptop with great performance for everyday use.",
      price: 699.99,
      image:
        "https://img.favpng.com/15/17/3/laptop-asus-netbook-ivy-bridge-random-access-memory-png-favpng-mLN2BSuPSCemeZ88VgMvpY9RZ.jpg",
      category: "Budget",
    },
    {
      id: 119,
      title: "Asus ZenBook 14",
      description: "Premium ultrabook with a sleek design and powerful specs.",
      price: 1399.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2TGYslwDoS2DBehRcyaRkPm92v2m60bkUNdkQw7Huh8ckMs3fTYaPc7py7j1wlxULJk&usqp=CAU",
      category: "Ultrabook",
    },
    {
      id: 120,
      title: "Toshiba Dynabook Tecra",
      description:
        "Business laptop with excellent security features and performance.",
      price: 1099.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV03llBwWhfOS7s_pXCiYgHYIwWS9CPWWUA&s",
      category: "Business",
    },
    {
      id: 121,
      title: "Samsung Galaxy Book Pro",
      description: "Stylish and lightweight laptop with AMOLED display.",
      price: 1199.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoKZFe8oIts8g0PaIIvCJdom8gQQV9gcVRw&s",
      category: "Ultrabook",
    },
    {
      id: 122,
      title: "MSI GS66 Stealth",
      description: "Gaming laptop with powerful performance and sleek design.",
      price: 1999.99,
      image:
        "https://s.alicdn.com/@sc04/kf/H0a4aa11ee0b045e39ef137f618f39746d.jpg_300x300.jpg",
      category: "Gaming",
    },
    {
      id: 123,
      title: "Lenovo IdeaPad 3",
      description: "Affordable laptop for everyday tasks and entertainment.",
      price: 499.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTee7hII7OiYIYjr1_ZZbjlAWAbIA5N466VZQ&s",
      category: "Budget",
    },
    {
      id: 124,
      title: "Acer Aspire 5",
      description: "Affordable laptop with solid performance for students.",
      price: 599.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7xsTCI2iH227YfV2OopTu5qP7ImLJeK0SQ&s",
      category: "Budget",
    },
    {
      id: 125,
      title: "HP ProBook 450 G7",
      description: "Business laptop with reliable performance and security.",
      price: 899.99,
      image:
        "https://cdn.myrapidtrack.com/products/images/1655380676169267647.jpg",
      category: "Business",
    },
    {
      id: 126,
      title: "Dell Latitude 7420",
      description: "Business laptop with premium design and advanced features.",
      price: 1399.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIoqSVB3KMgGVnZItooHvDfHHKR8RQUpNwA&s",
      category: "Business",
    },
    {
      id: 127,
      title: "Razer Blade Stealth 13",
      description: "Compact gaming laptop with powerful performance.",
      price: 1499.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuzV1PfxfB9JWGhH-7wtJYsvn3mx69tmR3g&s",
      category: "Gaming",
    },
    {
      id: 128,
      title: "Huawei MateBook X Pro",
      description:
        "Premium laptop with sleek design and high-resolution display.",
      price: 1399.99,
      image:
        "https://cdn.myrapidtrack.com/products/images/1641551056169829764.jpg",
      category: "Ultrabook",
    },
    {
      id: 129,
      title: "Acer Aspire 5",
      description: "Affordable laptop with solid performance for students.",
      price: 599.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7xsTCI2iH227YfV2OopTu5qP7ImLJeK0SQ&s",
      category: "Budget",
    },
    {
      id: 130,
      title: "HP ProBook 450 G7",
      description: "Business laptop with reliable performance and security.",
      price: 899.99,
      image:
        "https://cdn.myrapidtrack.com/products/images/1655380676169267647.jpg",
      category: "Business",
    },
  ];

  const [dums, setDums] = useState([]);
  const {
    viewItem,
    setViewItem,
    currentProduct,
    setCurrentProduct,
    itemCount,
    setItemCount,
    itemNum,
    setItemNum,
    cartItems,
    num,
    setNum,
  } = UserView();
  useEffect(() => {
    console.log(currentProduct);
    console.log(currentProduct.total, "curtotal");
  }, [itemNum, currentProduct, cartItems]);

  return (
    <div>
      <Header />
      <div className="bg-indigo-900 text-white py-4 mt-8">
        <div className="text-center text-lg md:text-xl lg:text-2xl">
          Ready for the festive season shopping?? available discounts!!!!
        </div>
        <div className=" ">
          <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-5 lg:rows-1 gap-2 p-4 mx-auto  h-auto sm:gap-1 sm:p-2 md:gap-4 md:p-4 lg:gap-8 lg:p-12">
            <a href="#">
              <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/powerbanks_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
            <a href="#" className="hidden lg:block">
              <div className="col border hidden lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/laptops_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
            <a href="#">
              <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/freezers_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
            <a href="#">
              <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/washing-machines_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
            <a href="#">
              <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/smartphones_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3  lg:grid-cols-5 lg:rows-1 gap-2 p-4 mx-auto  h-auto sm:gap-1 sm:p-2 md:gap-4 md:p-4 lg:gap-8 lg:p-12">
        {laptops.map((laptop) => {
          return (
            <div
              key={laptop.id}
              className="h-64 p-2 mt-8 sm:h-72 bg-white sm:p-4 md:h-96 md:p-6 relative lg:hover:border-2 hover:border-indigo-500"
            >
              <img
                src={laptop.image}
                alt=""
                className="object-contain w-full relative h-[65%]"
              />
              <p className="text-red-500 text-lg h-16 lg:text-xl md:text-lg font-bold leading-tight sm:text-lg overflow-hidden">
                {laptop.title}
              </p>
              <div className="flex justify-between overflow-hidden items-center sm:text-lg">
                <p className="font-bold">${laptop.price}</p>
              </div>

              <Link to="/product">
                <button
                  className="flex item-center hover:bg-indigo-500 justify-center bg-indigo-800 text-white px-5 py-1 w-full sm:text-2xl"
                  onClick={() => {
                    console.log(itemNum), console.log(viewItem);
                    setCurrentProduct({
                      id: laptop.id,
                      image: laptop.image,
                      name: laptop.title,
                      price: laptop.price,
                      discountPercentage: "",
                      pieces: itemCount[currentProduct.id],
                      description: laptop.description,
                      total: itemNum * currentProduct.pieces,
                    }),
                      setViewItem(true);
                    setItemNum(0);
                    setNum(1);
                  }}
                >
                  VIEW
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-10 mb-4 bg-indigo-900 p-14 flex justify-between items-center text-white py-4">
        <h2 className="text-2xl font-bold">You might also like:</h2>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-5 lg:rows-1 gap-2 p-4 mx-auto  h-auto sm:gap-1 sm:p-2 md:gap-4 md:p-4 lg:gap-8 lg:p-12">
        <div className="col border  lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/electronics/300x400/cameras_300x400.png"
              alt="camera"
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
        <div className="col border hidden lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/beauty.png"
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
        <div className="col border lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/fashion/300x400/Updated/Artboard_1.jpg"
              alt="sneakers"
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
        <div className="col border  lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/fashion/300x400/Updated/Artboard_1_copy_3.jpg"
              alt="jewelry"
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
        <div className="col border  lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/fashion/300x400/Updated/Artboard_1_copy_4.jpg"
              alt="sneakers"
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default laptops;
