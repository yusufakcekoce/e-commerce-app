import Men from "../../img/men.jpg";
import Women from "../../img/women.jpg";
import Kids from "../../img/kids.jpg";
import Shoes from "../../img/shoes.jpg"
import Kit from "../../img/kit.jpg"

const Categories = [
  {
    id: 1,
    category: "Men",
    title: "Men Tshirt",
    price: 185,
    image: `${Men}`,
  },
  {
    id: 2,
    category: "Women",
    title: "Women Sweatshirt",
    price: 240,
    image: `${Women}`,
  },
  {
    id: 3,
    category: "Kids",
    title: "Kids Tshirt",
    price: 120,
    image: `${Kids}`,
  },
  {
    id: 4,
    category: "Football",
    title: "Nike Mercurial",
    price: 50,
    image: `${Shoes}`,
  },
  {
    id: 5,
    category: "Football",
    title: "Fenerbahçe Jersey",
    price: 100,
    image: `${Kit}`
  },
];

export default Categories;
