import React from 'react'
import Layout from '../../../Layout/Layout'
import {Table} from 'react-bootstrap';
import './Sub3Report.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormSliderTop from '../../../../shared/SharedComponents/FormSlider/FormSliderTop';
import ReportAccordionForm from '../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm';

const Sub3Report = () => {
  return (
    <Layout
      title="Sub3 Report"
      className="managerReport"
      subActive="managerReport.sub3"
      activeNum="23"
    >
      <div id="Sub3Report">
        <div className="accordion__from ">
          {/* form */}
          <FormSliderTop title="Sub3 Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header">
            <h2>Sub 3 Reports</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                Sub 3 <ArrowDropDownIcon />
              </th>
              <th>
                click <ArrowDropDownIcon />
              </th>
              <th>
                unique click
                <ArrowDropDownIcon />
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
              <td>1tm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1tm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1tm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1tm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1tm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>1tm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Layout>
  );
}

export default Sub3Report;