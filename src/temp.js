import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../../assets/Rectangle 42.png";
import { Button } from "@mui/material";
const TooltipsContent = (avata, userTitle) => (
  <div className="text-center">
    <img src={avata} alt="avata.png" style={{ width: "200px" }} />
    <p className="mt-3 text-black"> {userTitle}</p>
  </div>
);

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
      <img src={UserAvata} alt="avata.png" />
      new tR- smart link (US) only
    </Button>
  </Tooltip>
</td>
