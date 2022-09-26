import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { EditIcons, DeleteIcons } from "../../../../../assets/Icons";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button as BootstrapButton } from "react-bootstrap";
import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../../../assets/Rectangle 42.png";
import { Button } from "@mui/material";
import UserAvata from "../../../../../assets/avata.png";
const ItemAdvertiser = (props) => {
  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );
  return (
    <>
      <tr>
        <td>1</td>
        <td>
          <Tooltip
            title={TooltipsContent(UserLogo, "Affiliate One")}
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
              <img src={UserAvata} alt="avata.png" />
              Affiliate One
            </Button>
          </Tooltip>
        </td>

        <td>offer</td>
        <td>active</td>
        <td>
          <input
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "10px",
              border: "2px solid #A5A5A5",
              outline: "#A5A5A5",
              padding: "20px 10px 20px 15px",
            }}
            type="text"
          />
        </td>
        <td>
          <BootstrapButton
            variant="primary m_btn"
            style={{
              height: "46px",
              width: "120px",
              lineHeight: "1px",
              borderRadius: "8px",
              padding: "8px 20px 8px 20px",
              // backgroundColor: "#7040FF",
              // color: "#ffffff",
              // border: "1px solid #7040FF",
            }}
          >
            Save
          </BootstrapButton>
        </td>
        <td>
          <DropdownButton
            variant="outline-secondary"
            title="..."
            id="input-group-dropdown-1"
          >
            <Dropdown.Item>
              <RemoveRedEyeIcon />
              Manage
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => props.editAdvertiserHandler(props.data.id)}
            >
              {EditIcons}edit
            </Dropdown.Item>
            <Dropdown.Item onClick={props.removeItem}>
              {DeleteIcons} delete
            </Dropdown.Item>
          </DropdownButton>
        </td>
      </tr>
    </>
  );
};

export default ItemAdvertiser;
