
import React from "react";
import Layout from "../../../Layout/Layout";
import './ClickReport.scss'
import ReportAccordionForm from './../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm';
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";

import { Table } from "react-bootstrap";
import ReportTableHeader from "./../../../../shared/SharedComponents/ReportTable/ReportTableHeader";
import ReportTableData from "../../../../shared/SharedComponents/ReportTable/ReportTableData";

const ClickReport = () => {
  return (
    <Layout
      title="Click Report"
      className="report"
      subActive="report.click"
      activeNum="5"
    >
      <div id="ClickReport">
        <div className="accordion__from">
          {/* form */}
          <FormSliderTop title="Click Report Form">
            <ReportAccordionForm />
          </FormSliderTop>
          <div className="header">
            <h2>Click reports</h2>
          </div>
        </div>

        <Table responsive>
          <thead>
            <ReportTableHeader />
          </thead>
          <tbody>
            <ReportTableData id="1" />
            <ReportTableData id="2" />
            <ReportTableData id="3" />
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default ClickReport;
