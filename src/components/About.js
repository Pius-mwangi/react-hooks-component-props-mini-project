

import React from "react";

function About({ image, about }) {
  const defaultImage =
    "https://via.placeholder.com/215"; // Default image URL

  return (
    <aside>
      {image && <img src={image} alt="blog logo" />} {/* Render the image if provided */}
      {!image && <img src={defaultImage} alt="blog logo" />} {/* Render the default image if no image provided */}
      <p>{about}</p>
    </aside>
  );
}

export default About;
