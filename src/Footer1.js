import React from "react";

const Footer1 = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-light text-center">
        <p> Copyright © {year}</p>
      </footer>
    </>
  );
};

export default Footer1;
