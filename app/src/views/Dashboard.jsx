import ComplainsList from "./ComplaintsList";
import useFetch from "./useFetch";
import { Card, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import HeaderHostel from "../common/HeaderHostel";

const Dashboard = () => {
  const {
    data: complaints,
    isPending,
    error,
  } = useFetch("http://localhost:8000/complaints");

  return (
    <>
      <HeaderHostel />
      <center>
        <Card
          title={
            <center>
              <Typography.Title level={3} style={{ margin: "unset" }}>
                Complaints Dashboard
              </Typography.Title>
            </center>
          }
          style={{
            width: "900px",
            marginTop: "80px",
            boxShadow: "2px 2px #D3D3D3",
          }}
        >
          <center>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {complaints && <ComplainsList complaints={complaints} />}
          </center>
        </Card>
        <br />
        <br />
        <br />
        <Button type="primary" size="large">
          <Link to="/addcomplaint">Add new complaint</Link>
        </Button>
      </center>
    </>
  );
};

export default Dashboard;
