import React from "react";
import { Text } from "../../../../components/text/Text";
import { CardCom } from "../../../../components/card/card-com";
import { Button } from "@mui/material";

export const NewProduct = () => {
  const arrText = [
    {
      title: "New Arrival products",
      subTitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.",
    },
  ];
  const arrCard = [
    {
      img: "https://cdn.shopify.com/s/files/1/2794/7060/products/arron-28ct-942705_2000x.png?v=1667891176",
      name: "ARRON 28CT. 6TZ DIAMOND",
      price: 117455,
    },
    {
      img: "https://www.helloice.com/media/catalog/product/cache/877042223109cc2bc0869ffe42af0ed8/6/2/62d67bf573014jpg.jpg",
      name: "Helloice Emerald Baguette",
      price: 169.99,
    },
    {
      img: "https://www.helloice.com/media/catalog/product/cache/877042223109cc2bc0869ffe42af0ed8/6/2/62e3914f13a1ajpg_1.jpg",
      name:"Helloice Iced Emerald",
      price: 79.99,
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1117/3536/products/green_1_480x.jpg?v=1677639928",
      name: "Iced Out Rolex Datejust",
      price: 16361,
    },
    {
      img: "https://www.thesun.co.uk/wp-content/uploads/2022/08/NINTCHDBPICT000754504670-1.jpg",
      name: "Hublot Kicked Out",
      price: 90582,
    },
    {
      img: "https://www.thesun.co.uk/wp-content/uploads/2022/08/7da54577-867b-4cc7-8a72-02cf53f24080.jpg",
      name: "Hublot Jacob",
      price: 120467,
    },
  ];
  return (
    <div style={{ paddingTop: "80px" }}>
      {arrText.map((item, index) => (
        <Text key={index} {...item} />
      ))}

      <div className="container"
        style={{
          width: "1200px",
          display: "flex",
          flexWrap:"wrap",
          paddingTop: "60px",
          gap: "70px",
          justifyContent: "space-between",
        }}
      >
        {arrCard.map((item, index) => (
          <CardCom key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
