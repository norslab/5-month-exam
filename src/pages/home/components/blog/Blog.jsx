import React from "react";
import { Text } from "../../../../components/text/Text";
export const Blog = () => {
  const arrText = [
    {
      title: "From Our Latest Blogs",
      subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="container" style={{ width: "1200px", margin: "0 auto" , marginBottom:"65px" }}>
      <div style={{ paddingTop: "100px", paddingBottom: "50px" }}>
        {arrText.map((item, index) => (
          <Text key={index} {...item} />
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <div style={{ width: "290px",height:"220px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src="https://www.androidauthority.com/wp-content/uploads/2020/08/samsung-galaxy-watch-3-review-header.jpg"
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px",height:"220px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src="https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MTkyMzc3NzExMTUzNDU2Mzcw/1-apple-watch-series-8-review.jpg"
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px", height:"220px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src="https://cdn.thewatchpages.com/app/uploads/2021/05/13202702/iwc-big-pilots-watch-constant-force-tourbillon-iwc-racing-iw590501-2.jpg"
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px",height:"220px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src="https://cdn.shopify.com/s/files/1/1889/5061/files/watch-parts-annotation_ccd5a116-1bfa-4662-889a-1d2be3b1fdc8_1200x.jpg?v=1613534306"
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
      </div>
    </div>
  );
};
