import React from 'react'
import Layout from '../../../Layout/Layout'
import {Table} from 'react-bootstrap';
import './PostBackReport.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserAvata from '../../../../assets/avata.png';


import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../../assets/Rectangle 42.png";
import { Button } from "@mui/material";

const PostBackReport = () => {

  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );
  return (
    <Layout
      title="PostBack Report"
      className="report"
      subActive="report.post"
      activeNum="5"
    >
      <div id="PostBackReport">
        <div className="accordion__from ">
          <div className="header">
            <h2>Postback log Reports</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr style={{ whiteSpace: "nowrap" }}>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                offer name
                <ArrowDropDownIcon />
              </th>
              <th>
                Affiliate name <ArrowDropDownIcon />
              </th>
              <th>
                countries <ArrowDropDownIcon />
              </th>
              <th>
                iP <ArrowDropDownIcon />
              </th>
              <th>
                fire URL <ArrowDropDownIcon />
              </th>
              <th>
                user agent
                <ArrowDropDownIcon />
              </th>
              <th>
                Source
                <ArrowDropDownIcon />
              </th>
              <th>
                created date
                <ArrowDropDownIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
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
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
                  )}
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
              <td>bangladesh</td>
              <td>209.15.253.219</td>
              <td>
                http://google.com/postback?click_id=1iWKCbHqOGnafAl234qaweR5a6Uk
              </td>
              <td>https://google.com-http-client/postback</td>
              <td> http://hsnn.thecreditrange.com/</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>bangladesh</td>
              <td>209.15.253.219</td>
              <td>
                http://google.com/postback?click_id=1iWKCbHqOGnafAl234qaweR5a6Uk
              </td>
              <td>https://google.com-http-client/postback</td>
              <td> http://hsnn.thecreditrange.com/</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>bangladesh</td>
              <td>209.15.253.219</td>
              <td>
                http://google.com/postback?click_id=1iWKCbHqOGnafAl234qaweR5a6Uk
              </td>
              <td>https://google.com-http-client/postback</td>
              <td> http://hsnn.thecreditrange.com/</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>bangladesh</td>
              <td>209.15.253.219</td>
              <td>
                http://google.com/postback?click_id=1iWKCbHqOGnafAl234qaweR5a6Uk
              </td>
              <td>https://google.com-http-client/postback</td>
              <td> http://hsnn.thecreditrange.com/</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>bangladesh</td>
              <td>209.15.253.219</td>
              <td>
                http://google.com/postback?click_id=1iWKCbHqOGnafAl234qaweR5a6Uk
              </td>
              <td>https://google.com-http-client/postback</td>
              <td> http://hsnn.thecreditrange.com/</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>
                <img src={UserAvata} alt="avata.png" />
                new tR- smart link (US) only
              </td>
              <td>bangladesh</td>
              <td>209.15.253.219</td>
              <td>
                http://google.com/postback?click_id=1iWKCbHqOGnafAl234qaweR5a6Uk
              </td>
              <td>https://google.com-http-client/postback</td>
              <td> http://hsnn.thecreditrange.com/</td>
              <td>15 jan, 2024</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Layout>
  );
}

export default PostBackReport;