import { storyblokEditable } from "@storyblok/react";

const Product = ({ blok }) => {
  return (
  <div>
    <h3 {...storyblokEditable(blok)}>{blok.Title}</h3>
    <p {...storyblokEditable(blok)}>{blok.Price}kr </p>
    <p {...storyblokEditable(blok)}>{blok.Description} </p>
    <button style = {{backgroundColor: "red"}}>{blok.ButtonTitle}</button>
    </div>)
};

export default Product;
