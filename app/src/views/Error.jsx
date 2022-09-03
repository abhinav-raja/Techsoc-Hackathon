import { Button } from "antd";
import HeaderHostel from "../common/HeaderHostel";
import image from "./image/gc-modified.png";

const Error = () => {
  return (
    <>
      <HeaderHostel />
      <div className="error">
        <div className="imgtexterror">
          <center>
            <h1 style={{ fontsize: "200px" }}>4</h1>
          </center>
          <img
            src={image}
            style={{ height: "200px", width: "200px", align: "center" }}
            alt="gajendra circle"
          />
        </div>
        <center>
          <h1>Oops, sorry</h1>
          <h2>This page was not found, </h2>
          {/* just like the third elephant. */}
          <Button type="primary" size="large">
            Home
          </Button>
        </center>
      </div>
    </>
  );
};

export default Error;
