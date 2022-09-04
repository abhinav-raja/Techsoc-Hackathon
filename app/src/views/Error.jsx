import { Button } from "antd";
import HeaderHostel from "../common/HeaderHostel";
import img404 from "./image/error404.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <HeaderHostel />
      <div className="error">
        <center>
          <img src={img404} alt="gajendra circle" style={{ height: "200px" }} />
          <br />
          <br />
          <br />
          <br />
          <h1>Oops, sorry</h1>
          <h2>Can't seem to find the third elephant :/</h2>
          <br />
          <Button type="primary" size="large">
            <Link to="/dashboard">Back to the Dashboard</Link>
          </Button>
        </center>
      </div>
    </>
  );
};

export default Error;
