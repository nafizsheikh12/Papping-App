import React from "react";
import avata from "../../../assets/avata.png";
import profile from "../../../assets/profile.png";
import userAgent from "../../../assets/user-agent.png";
import CachedIcon from "@mui/icons-material/Cached";
import { Button } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import './ReportTable.scss'
import DeleteIcon from "@mui/icons-material/Delete";
import UserLogo from "../../../assets/Rectangle 42.png";
import Tooltip from "@mui/material/Tooltip";


const ReportTableData = ({ id }) => {
  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );
  return (
    <tr id="ReportTableData">
      <td>#{id} </td>
      <td>
        <Tooltip
          title={TooltipsContent(UserLogo, "new tR- smart link (US) only")}
          className="text-center"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "white",
                width: "400px",
                padding: "10px 30px 10px 30px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
              },
            },
          }}
        >
          <Button className="toolTipsStyle">
            <img src={avata} alt="avata.png" />
            new tR- smart link (US) only
          </Button>
        </Tooltip>
      </td>
      <td>
        <p>15 jan 23:58:01 </p>
      </td>
      <td>Maxbounty Private</td>
      <td>
        <img
          src={profile}
          style={{ height: "34px", width: "34px", marginRight: "10px" }}
          alt="avatar"
        />
        Rakib Hossain
      </td>
      <td>http;//hsnn.thecreditrange.com/</td>
      <td>
        <p>USA- Santa clara</p>

      </td>
      <td>EQUP0j4HWQzy2cnmyprgnCr0miMovbLo</td>
      <td>YgIAvlJqXqqG5bRlFJETaltughtVxgf5</td>
      <td>Rmm125425</td>
      <td>Rmm</td>
      <td>Rmm514515</td>
      <td>
        <p>Mobile IOS 14.8.1 </p>
   
      </td>
      <td>
        <img
          src={userAgent}
          alt="avatar"
          style={{ height: "23px", width: "23px" }}
        />
      </td>
      <td>$51.00</td>
      <td>$51.00</td>
      <td>$51.00</td>
      <td>
        <Button variant="contained" size="small" className="reverse__Btn mr-2">
          <CachedIcon className="reverse__icon" />
          <p>Reverse</p>
        </Button>
        <Button variant="contained" size="small" className="delete__Btn">
          <DeleteIcon className="delete-icon" />
          <p>Delete</p>
        </Button>
      </td>
    </tr>
  );
};

export default ReportTableData;
