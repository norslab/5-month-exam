import React from "react";
import { Add } from "../../assets/icons/add";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../../store/product";
export const CardCom = ({ id, img, name, price }) => {
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(add({ id, img, name, price }));
  };
  return (
    <div
      style={{
        maxWidth: "352px",
        padding: "10px",
        marginBottom:"80px",
        boxShadow: "0px 0px 11.83px 1.17px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ width: "270px", height: "270px" }}>
        <img
          style={{  height: "100%", width: "100%", objectFit: "contain" }}
          src={img}
          alt="sdsd"
        />
      </div>
      <p style={{ padding: "20px 0px" }}>{name}</p>
      <div
        style={{
          alignItems: "baseline",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p style={{ padding : "10px 0"}}>${price}</p>
        <p className="cardCom__button_text">
          <Button
            onClick={addProduct}
            style={{ borderRadius: "100px" }}
          >
            <Add />
          </Button>
        </p>
      </div>
    </div>
  );
};
