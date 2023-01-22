import UserItem from "./UserItem";
import { useState, useRef, useEffect } from "react";
import moment from "moment";
import axios from "../../api/axios";
import './style.css'
const Sidebar = () => {
  const [name, setName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [users, setUsers] = useState([]);
  const filteringTimeout = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("home")
        if (res) {
          setUsers(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[224px] min-h-screen bg-white shadow-inner sidebar">
      <div>
        {users && users.length > 0 ? (
          users.map((user) => (
            user.role.role_name ==="STAFF" ?
            <a href={`/otherprofile/${user.id}`}>
                <UserItem
                  userName={user.username}
                  userRole={user.role.role_name}
                />
            </a> :""
          ))
        ) : (
          <div className="text-center">
            <span>No data</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;