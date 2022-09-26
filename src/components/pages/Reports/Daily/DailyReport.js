import React from "react";
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./DailyReport.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";
import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";

const DailyReport = () => {
  return (
    <Layout
      title="Daily Report"
      className="report"
      subActive="report.daily"
      activeNum="5"
    >
      <div id="DailyReport">
        {/* form */}
        <div className="accordion__from">
          <FormSliderTop title="Daily Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header my__table">
            <h2>Daily reports</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                report date <ArrowDropDownIcon />
              </th>
              <th>
                click
                <ArrowDropDownIcon />
              </th>
              <th>
                unique click <ArrowDropDownIcon />
              </th>
              <th>
                conversion
                <ArrowDropDownIcon />
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
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
            <tr>
              <td>15 jan, 2024</td>
              <td>50</td>
              <td>50</td>
              <td>124</td>
              <td>$50.0</td>
              <td>$50.0</td>
              <td>$50.0</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default DailyReport;
