import Layout from "../../../Layout/Layout";

import "./ConversionReport.scss";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";
import ReportAccordionForm from "../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm";
import { Table } from "react-bootstrap";
import ReportTableHeader from "./../../../../shared/SharedComponents/ReportTable/ReportTableHeader";
import ReportTableData from "../../../../shared/SharedComponents/ReportTable/ReportTableData";

const ConversionReport = () => {
  return (
    <Layout
      title="Conversion Report"
      className="report"
      subActive="report.conversion"
      activeNum="5"
    >
      <div id="ConversionReport">
        <div className="accordion__from">
          {/* form */}
          <FormSliderTop title="Conversion Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header">
            <h2>Conversion reports</h2>
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

export default ConversionReport;
