import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (

  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
    <img src={blok?.Rocket?.filename} 
    style={{width:`${blok.width}px`}}
    />
  </div>
);

export default Feature;
