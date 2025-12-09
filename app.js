const headerCategories = document.querySelector(".header-categories");
const bestSmartphones = document.querySelector(".smartphones-grid");
const topCategories = document.querySelector(".top-categories-grid");
const dailyEssentials = document.querySelector(".daily-essentials-grid");
const footerCategories = document.querySelector(".footer-categories");
const footerServices = document.querySelector(".footer-services");
const topElectronic = document.querySelector(".electronic-brands-grid");

const HEADER_CATEGORIES = [
  {
    id: "1",
    name: "Groceries",
  },
  {
    id: "2",
    name: "Premium Fruits",
  },
  {
    id: "3",
    name: "Home & Kitchen",
  },
  {
    id: "5",
    name: "Fashion",
  },
  {
    id: "6",
    name: "Electronics",
  },
  {
    id: "7",
    name: "Beauty",
  },
  {
    id: "8",
    name: "Home Improvment",
  },
  {
    id: "9",
    name: "Sport, Toys & Luggage",
  },
];

const BEST_SMARTPHONES = [
  {
    id: "1",
    img: "/phone-1.png",
    name: "Galaxy S22 Ultra",
    discountPrice: 32999,
    price: 74999,
    savePrice: 32999,
    discountPercantage: 56,
  },
  {
    id: "2",
    img: "/phone-2.png",
    name: "Galaxy M13 (4GB | 64 GB)",
    discountPrice: 10499,
    price: 14999,
    savePrice: 4500,
    discountPercantage: 56,
  },
  {
    id: "3",
    img: "/phone-3.png",
    name: "Galaxy M33 (4 GB | 64 GB)",
    discountPrice: 16999,
    price: 24999,
    savePrice: 8000,
    discountPercantage: 56,
  },
  {
    id: "4",
    img: "/phone-4.png",
    name: "Galaxy M53 (4 GB | 64 GB)",
    discountPrice: 31999,
    price: 40999,
    savePrice: 9000,
    discountPercantage: 56,
  },
  {
    id: "5",
    img: "/phone-5.png",
    name: "Galaxy S22 Ultra",
    discountPrice: 67999,
    price: 85999,
    savePrice: 18000,
    discountPercantage: 56,
  },
];

const TOP_CATEGORIES = [
  {
    id: "1",
    img: "/phone-1.png",
    name: "Mobile",
  },
  {
    id: "2",
    img: "/cosmetics.png",
    name: "Cosmetics",
  },
  {
    id: "3",
    img: "/electronics.png",
    name: "Electronics",
  },
  {
    id: "4",
    img: "/furniture.png",
    name: "Furniture",
  },
  {
    id: "5",
    img: "/header-watch.png",
    name: "Watches",
  },
  {
    id: "6",
    img: "/decor.png",
    name: "Decor",
  },
  {
    id: "7",
    img: "/accessories.png",
    name: "Accessories",
  },
];

const DAILY_ESSENTIALS = [
  {
    id: "1",
    img: "/essentials-1.png",
    name: "Daily Essentials",
  },
  {
    id: "2",
    img: "/essentials-2.png",
    name: "Vegetables",
  },
  {
    id: "3",
    img: "/essentials-3.png",
    name: "Fruits",
  },
  {
    id: "4",
    img: "/essentials-4.png",
    name: "Strawberry",
  },
  {
    id: "5",
    img: "/essentials-5.png",
    name: "Mango",
  },
  {
    id: "6",
    img: "/essentials-6.png",
    name: "Cherry",
  },
];

const CUSTOMER_SERVICES = [
  {
    id: "1",
    name: "About Us",
  },
  {
    id: "2",
    name: "Terms & Conditions",
  },
  {
    id: "3",
    name: "FAQ",
  },
  {
    id: "4",
    name: "Privacy Policy",
  },
  {
    id: "5",
    name: "E-waste Policy",
  },
  {
    id: "6",
    name: "Cancellation & Return Policy",
  },
];

const TOP_ELECTRONICS = [
  {
    id: "1",
    bgColor: "#313131",
    textBgColor: "#494949",
    textColor: "#fff",
    name: "IPHONE",
    logo: "/apple.svg",
    img: "/iphone.png",
  },
  {
    id: "2",
    bgColor: "#FFF3CC",
    textBgColor: "#F6DE8D",
    textColor: "#000",
    name: "REALME",
    logo: "/realme.svg",
    img: "/realme.png",
  },
  {
    id: "3",
    bgColor: "#FFECDF",
    textBgColor: "#FFD1B0",
    textColor: "#000",
    name: "REDMI",
    logo: "/redmi.svg",
    img: "/redmi.png",
  },
];

window.addEventListener("load", () => {
  HEADER_CATEGORIES.forEach((category) => {
    headerCategories.innerHTML += `<div class="flex gap-3 px-4 py-2 rounded-full hover:bg-[#008ECC] hover:text-[#fff] group text-[#666666] bg-[#F3F9FB] cursor-pointer">
            <span class="text-sm">${category.name}</span>
            <img src="./public/chevron-down.svg" class="group-hover:block hidden" />
            <img src="./public/chevron-down-1.svg" class="group-hover:hidden block" />
        </div>`;
  });

  BEST_SMARTPHONES.forEach((phone) => {
    bestSmartphones.innerHTML += `  <div class="rounded-lg border hover:border-[#008ECC] hover:border-2 cursor-pointer">
            <div class="bg-[#F5F5F5] rounded-lg relative">
              <img
                src="./public/images${phone.img}"
                alt="${phone.name}"
                class="w-full h-full object-cover"
              />
              <div
                class="text-sm absolute top-0 right-0 flex flex-col rounded-tr-lg bg-[#008ECC] px-3 py-1 text-[#fff] rounded-bl-lg"
              >
                <span>${phone.discountPercantage}%</span>
                <span>OFF</span>
              </div>
            </div>
            <div class="p-3">
              <div class="flex flex-col border-b pb-4">
                <h3 class="font-bold">${phone.name}</h3>
                <h3 class="font-bold flex gap-3 items-center">
                  <span>₹${phone.discountPrice}</span> <del class="text-[#666666]">₹${phone.price}</del>
                </h3>
              </div>
              <h3 class="text-[#249B3E] pt-4">Save - ₹${phone.savePrice}</h3>
            </div>
          </div>`;
  });

  TOP_CATEGORIES.forEach((category) => {
    topCategories.innerHTML += `<div class="flex flex-col justify-center items-center text-center gap-3">
             <div class="rounded-full w-[150px] h-[150px] flex justify-center items-center p-2 bg-[#F5F5F5] hover:border-[#008ECC] hover:border-2 cursor-pointer">
            <img src="./public/images${category.img}" alt="${category.name}" class="w-[100px] h-[100px] object-cover" />
           </div>
           <span>${category.name}</span>
          </div>`;
  });

  DAILY_ESSENTIALS.forEach((category) => {
    dailyEssentials.innerHTML += `<div class="flex flex-col justify-center items-center text-center gap-3">
             <div class="rounded-xl w-[200px] h-[200px] flex justify-center items-center p-2 bg-[#F5F5F5] hover:border-[#008ECC] hover:border-2 cursor-pointer">
            <img src="./public/images${category.img}" alt="${category.name}" class="w-[150px] h-[150px] object-cover" />
           </div>
           <span>${category.name}</span>
           <h3 class="font-bold text-xl">UP to 50% OFF</h3>
          </div>`;
  });

  TOP_CATEGORIES.forEach((category) => {
    footerCategories.innerHTML += `<li>
    ${category.name}
    </li>`;
  });

  CUSTOMER_SERVICES.forEach((category) => {
    footerServices.innerHTML += `<li>
    ${category.name}
    </li>`;
  });

  TOP_ELECTRONICS.forEach((electronic) => {
    topElectronic.innerHTML += `  <div class="rounded-xl bg-[${electronic.bgColor}] flex justify-between p-5">
            <div class="flex flex-col gap-5">
              <div class="bg-[${electronic.textBgColor}] rounded-xl text-center p-3 text-[${electronic.textColor}]">
                ${electronic.name}
              </div>
              <img
                src="./public${electronic.logo}"
                class="w-[90px] h-[90px]"
              />
              <span class="text-[${electronic.textColor}] font-bold text-xl">UP to 80% OFF</span>
            </div>
            <img
              src="./public/images${electronic.img}"
              class="w-[200px] h-[200px]    "
            />
          </div>`;
  });
});
