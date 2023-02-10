import { storyblokEditable } from "@storyblok/react";

const Header = ({ blok }) => {
  return <h1  {...storyblokEditable(blok)}>{blok.Name}</h1>;
};

export default Header;
