import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserView } from "../Context/viewContext";
import Header from "./Header";
import Footer from "./Footer";

function Drinks() {
  const drinks = [
    {
      id: 1,
      title: "Cognac rose",
      description: "Smooth and rich flavor",
      price: 29.99,
      image:
        "https://img.freepik.com/premium-vector/old-vintage-liquor-packaging-design-realistic-product-with-brand-label-place-texts_1268-2616.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 2,
      title: "Lager Mockup",
      description: "Pure and versatile spirit",
      price: 24.99,
      image:
        "https://img.freepik.com/premium-psd/close-up-mezcal-drink-bottle-with-glasses_23-2149262805.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 3,
      title: "Rum",
      description: "Sweet and flavorful, great for cocktails",
      price: 22.99,
      image:
        "https://img.freepik.com/free-photo/alcoholic-drink-bottle_176474-6029.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 4,
      title: "Gin",
      description: "Herbaceous and aromatic spirit",
      price: 27.99,
      image:
        "https://img.freepik.com/premium-vector/whiskey-realistic-bottle-product-packaging-brand-design-place-texts_1268-2634.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 5,
      title: "Tequila",
      description: "Agave-based spirit with a kick",
      price: 34.99,
      image:
        "https://img.freepik.com/premium-photo/belarus-minsk-may-21-2020-bottle-honey-pepper-vodka-nemiroff-black-background_524291-552.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 6,
      title: "Brandy",
      description: "Rich and smooth, perfect for sipping",
      price: 29.99,
      image:
        "https://img.freepik.com/free-vector/bottle-vodka-with-red-label_1268-95.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 7,
      title: "Bourbon",
      description: "Sweet and full-bodied, with notes of vanilla",
      price: 35.99,
      image:
        "https://img.freepik.com/free-vector/elegant-bottle_1268-89.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 8,
      title: "Scotch",
      description: "Smoky and complex, a classic choice",
      price: 39.99,
      image:
        "https://img.freepik.com/free-photo/delicious-fruits-kombucha-bottles-still-life_23-2150252186.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 9,
      title: "Irish Cream",
      description: "Creamy liqueur with a hint of chocolate",
      price: 25.99,
      image:
        "https://img.freepik.com/premium-psd/close-up-mezcal-drink-bottle-with-ingredients_23-2149262814.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 10,
      title: "Absinthe",
      description: "Strong herbal spirit with a unique flavor",
      price: 45.99,
      image:
        "https://img.freepik.com/premium-photo/passport-scotch-whisky_1083750-683.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 11,
      title: "Pisco",
      description: "Peruvian brandy with fruity notes",
      price: 32.99,
      image:
        "https://img.freepik.com/free-vector/realistic-beer-background_23-2147741018.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 12,
      title: "Sake",
      description: "Japanese rice wine, smooth and delicate",
      price: 19.99,
      image:
        "https://img.freepik.com/premium-photo/liquor-is-drink-many-bottles-laying-floorfor-those-who-like-drink-take-pictures_154026-4130.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 13,
      title: "Mezcal",
      description: "Smoky and earthy agave spirit",
      price: 36.99,
      image:
        "https://img.freepik.com/free-vector/rose-wine-ad_52683-34568.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 14,
      title: "Cachaça",
      description: "Brazilian sugarcane spirit, perfect for caipirinhas",
      price: 24.99,
      image:
        "https://img.freepik.com/premium-psd/luxury-bottle-mockup_381336-329.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 15,
      title: "Limoncello",
      description: "Italian lemon liqueur, sweet and zesty",
      price: 18.99,
      image:
        "https://img.freepik.com/premium-psd/wine-bottle-mockup-debossed-effect_338742-3537.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 16,
      title: "Amaretto",
      description: "Sweet almond-flavored liqueur",
      price: 22.99,
      image:
        "https://img.freepik.com/premium-psd/wine-bottle-mockup_78815-1440.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 17,
      title: "Campari",
      description: "Bittersweet aperitif with a vibrant red color",
      price: 27.99,
      image:
        "https://img.freepik.com/premium-psd/close-up-mezcal-drink-bottle-with-ingredients_23-2149262813.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 18,
      title: "Triple Sec",
      description: "Orange-flavored liqueur, great for cocktails",
      price: 21.99,
      image:
        "https://img.freepik.com/free-vector/floral-wine-etiquette-beverage-advertising_23-2148438501.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 19,
      title: "Jägermeister",
      description: "Herbal liqueur with a bold flavor",
      price: 29.99,
      image:
        "https://img.freepik.com/free-psd/beer-day-celebration-halfpage-banner_23-2151339137.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 20,
      title: "Frangelico",
      description: "Hazelnut liqueur with a sweet and nutty taste",
      price: 26.99,
      image:
        "https://img.freepik.com/free-vector/brandy-bottle-banner_33099-2077.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 21,
      title: "Kahlúa",
      description: "Coffee liqueur, perfect for desserts",
      price: 23.99,
      image:
        "https://img.freepik.com/free-photo/view-mexican-sotol-drink-with-glass-bottle_23-2150987491.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 22,
      title: "Baileys Irish Cream",
      description: "Creamy liqueur with rich chocolate flavor",
      price: 28.99,
      image:
        "https://img.freepik.com/free-photo/whisky-glass-bottle-wooden-table_1150-18676.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 23,
      title: "Cointreau",
      description: "Premium orange liqueur with a balanced flavor",
      price: 34.99,
      image:
        "https://img.freepik.com/premium-psd/whiskey-glass-bottle-mockup-isolated_1119-787.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 24,
      title: "Schnapps",
      description: "Sweet liqueur, available in various flavors",
      price: 19.99,
      image:
        "https://img.freepik.com/free-photo/arrangement-with-tasty-american-beer_23-2148907634.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 25,
      title: "Lillet",
      description: "French aperitif wine with fruit flavors",
      price: 27.99,
      image:
        "https://img.freepik.com/premium-psd/gin-bottle-label-mock-up_23-2149747070.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 26,
      title: "Absinthe",
      description: "Strong herbal spirit with a unique flavor",
      price: 45.99,
      image:
        "https://img.freepik.com/free-photo/3d-rendered-composition-with-whiskey-bottle-glasses_250435-1276.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 27,
      title: "Pernod",
      description: "Anise-flavored liqueur that pairs well with cocktails",
      price: 30.99,
      image:
        "https://img.freepik.com/premium-psd/liquor-glass-bottle-mockup-design-3d-rendering_1119-871.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 28,
      title: "Calvados",
      description: "Apple brandy from the Normandy region of France",
      price: 39.99,
      image:
        "https://img.freepik.com/premium-vector/product-packaging-mock-up-scotch-whiskey-bottle_1268-4518.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 29,
      title: "Ardbeg 10 Year Old",
      description: "Peaty and smoky single malt Scotch whisky",
      price: 49.99,
      image:
        "https://img.freepik.com/free-vector/vector-wine-bottle-with-empty-label-cork-isolated-gradient-background_1284-48357.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 30,
      title: "Hendrick's Gin",
      description: "Unique gin infused with cucumber and rose",
      price: 39.99,
      image:
        "https://img.freepik.com/free-photo/view-mexican-sotol-drink-with-glass-bottle_23-2150987475.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 31,
      title: "Crown Royal",
      description: "Canadian whisky with a smooth taste",
      price: 36.99,
      image:
        "https://img.freepik.com/premium-psd/sake-beverage-bottle-mock-up-design_23-2150270160.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 32,
      title: "Tito's Handmade Vodka",
      description: "Crafted from corn, clean and gluten-free",
      price: 29.99,
      image:
        "https://img.freepik.com/premium-photo/close-up-view-bottle-whiskey-glass-aside-grey-back_948265-304937.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 33,
      title: "Belvedere Vodka",
      description: "Polish vodka made from rye, smooth and creamy",
      price: 39.99,
      image:
        "https://img.freepik.com/free-photo/alcoholic-beverage-bottle_176474-6025.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 34,
      title: "Don Julio Tequila",
      description: "High-quality tequila with a smooth finish",
      price: 49.99,
      image:
        "https://img.freepik.com/premium-psd/still-life-gin-bottle-with-label-mockup_23-2149645971.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 35,
      title: "Chivas Regal",
      description: "Blended Scotch whisky with a rich taste",
      price: 44.99,
      image:
        "https://img.freepik.com/premium-psd/square-dark-rum-bottle-mockup-with-label_250435-289.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 36,
      title: "Glenfiddich 12 Year Old",
      description: "Classic single malt Scotch whisky, smooth and fruity",
      price: 42.99,
      image:
        "https://img.freepik.com/premium-psd/glass-emboss-logo-mockup_23-2150535134.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 37,
      title: "Jack Daniel's",
      description: "Tennessee whiskey with a distinct flavor",
      price: 36.99,
      image:
        "https://img.freepik.com/premium-psd/liquor-bottle-mockup-side-view_1332-25414.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 38,
      title: "Woodford Reserve",
      description: "Premium bourbon with a rich, full-bodied flavor",
      price: 49.99,
      image:
        "https://img.freepik.com/premium-photo/apple-cider-vinegar-white-vinegar-wooden-background_1048944-24758662.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 39,
      title: "Pappy Van Winkle's",
      description: "Highly sought-after bourbon, rich and complex",
      price: 299.99,
      image:
        "https://img.freepik.com/premium-photo/close-up-hand-holding-glass-bottle-against-black-background_1048944-26692335.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
    },
    {
      id: 40,
      title: "Grey Goose Vodka",
      description: "French vodka known for its smoothness",
      price: 39.99,
      image:
        "https://img.freepik.com/free-photo/glass-beer-with-green-bottle-ears-wheat-wooden-backdrop_23-2147952053.jpg?uid=R155615767&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
      category: "Liquor",
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
  } = UserView();

  return (
    <div>
      <Header />
      <div className="bg-indigo-900 text-white py-4 mt-8">
        <h3 className="text-center  font-bold text-2xl md:text-3xl">
          All Purpose{" "}
        </h3>
      </div>
      <div className="grid grid-cols-3  lg:grid-cols-5 lg:rows-1 gap-2 p-4 mx-auto  h-auto sm:gap-1 sm:p-2 md:gap-4 md:p-4 lg:gap-8 lg:p-12">
        {drinks.map((drink) => {
          return (
            <div
              key={drink.id}
              className="h-64 p-2 mt-8 sm:h-72 bg-white sm:p-4 md:h-96 md:p-6 relative lg:hover:border-2 hover:border-indigo-500"
            >
              <img
                src={drink.image}
                alt=""
                className="object-cover w-full relative h-[65%]"
              />
              <p className="text-red-500 text-lg h-16 lg:text-sm md:text-sm font-bold leading-tight sm:text-lg overflow-hidden">
                {drink.title}
              </p>
              <div className="flex justify-between overflow-hidden items-center sm:text-lg">
                <p className="font-bold">${drink.price}</p>
              </div>

              <Link to="/product">
                <button
                  className="flex item-center hover:bg-indigo-500 justify-center bg-indigo-800 text-white px-5 py-1 w-full sm:text-2xl"
                  onClick={() => {
                    console.log(currentProduct);
                    console.log(drink.image), console.log(viewItem);
                    setCurrentProduct({
                      id: drink.id,
                      image: drink.image,
                      name: drink.title,
                      price: drink.price,
                      discountPercentage: "",
                      pieces: 1,
                      description: drink.description,
                    }),
                      setViewItem(true);
                  }}
                >
                  VIEW
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Drinks;
