import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import { Button, Card, Typography } from "antd";
import HeaderHostel from "../common/HeaderHostel";

const ComplaintDetails = () => {
  const { id } = useParams();
  const {
    data: complaint,
    error,
    isPending,
  } = useFetch("http://localhost:8000/complaints/" + id);

  return (
    <>
      <HeaderHostel />
      <center>
        <Card
          title={
            <center>
              <Typography.Title level={3} style={{ margin: "unset" }}>
                Complaint Description
              </Typography.Title>
            </center>
          }
          style={{
            width: "800px",
            marginTop: "80px",
            boxShadow: "2px 2px #D3D3D3",
          }}
        >
          {isPending && (
            <div style={{ margin: "100px", size: "10px" }}>Loading...</div>
          )}
          {error && <div>{error}</div>}
          {complaint && (
            <article>
              <h3>{complaint.title}</h3>
              <p>{complaint.body}</p>
            </article>
          )}
        </Card>
        <br />
        <br />
        <br />
        <Button type="primary" size="large">
          <Link to="/dashboard">Back to Dashboard</Link>
        </Button>
      </center>
    </>
  );
};

export default ComplaintDetails;
