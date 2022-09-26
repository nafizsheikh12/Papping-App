import React from "react";
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./AdvartiserReport.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";

const AdvartiserReport = () => {
  return (
    <Layout
      title="Advartisert Report"
      className="report"
      subActive="report.advertiser"
      activeNum="5"
    >
      <div id="AdvartiserReport">
        <div className="accordion__from">
          {/* Form */}
          <FormSliderTop title="Advertiser Report Form">
            <ReportAccordionForm />
          </FormSliderTop>
          <div className=" header">
            <h2 className="">advertiser reports</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                Advertiser <ArrowDropDownIcon />
              </th>
              <th>
                click <ArrowDropDownIcon />
              </th>
              <th>
                unique click <ArrowDropDownIcon />
              </th>
              <th>
                conversion <ArrowDropDownIcon />
              </th>
              <th>
                revenue <ArrowDropDownIcon />
              </th>
              <th>
                payout <ArrowDropDownIcon />
              </th>
              <th>
                profit <ArrowDropDownIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
            <tr>
              <td>maxbounty private</td>
              <td>124</td>
              <td>124</td>
              <td>500</td>
              <td>$455.00</td>
              <td>$455.00</td>
              <td>$455.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default AdvartiserReport;
