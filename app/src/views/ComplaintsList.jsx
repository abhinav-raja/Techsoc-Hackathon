import { Link } from "react-router-dom";
import HeaderHostel from "../common/HeaderHostel";

const ComplaintsList = ({ complaints, title }) => {
  return (
    <>
      {complaints.map((complaint) => (
        <div className="dashboard" key={complaint.id}>
          <Link to={`/complaints/${complaint.id}`}>
            <h2>{complaint.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ComplaintsList;
