import React from "react";
// import foodData from "../common_files/foodData";

const foodData = [
  {
    foodNo: 1,
    foodName: "Burger",
    foodPrice: 100,
    category: "American",
    foodImageUrl:
      "https://cdn.statically.io/gh/devSouvik/restohelp-assets/main/burger.jpeg",
  },
  {
    foodNo: 2,
    foodName: "Pizza",
    foodPrice: 150,
    category: "Italian",
    foodImageUrl:
      "https://cdn.statically.io/gh/devSouvik/restohelp-assets/main/pizza.jpg",
  },
];

function HomePage() {
  return (
    <>
      {foodData.map((food) => {
        return (
          <>
            <div className="">
              <div className="divide-y divide-dashed">
                <div key={food.foodNo} className="grid grid-cols-2 gap-4">
                  {/* data */}
                  <div>
                    <p className="font-bold">{food.foodName}</p>
                    <p className="font-semibold text-slate-600">
                      {food.category}
                    </p>
                    <p className="font-semibold">Rs. {food.foodPrice}</p>
                  </div>
                  {/* image */}
                  <div className="relative">
                    <img
                      className=""
                      src={food.foodImageUrl}
                      alt="dummy-image"
                    />
                    <button className="absolute left-14 bottom-[10] bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/* <hr className="my-12 h-px bg-gray-200 border-0 dark:bg-gray-700" /> */}
            </div>
          </>
        );
      })}
    </>
  );
}

export default HomePage;
