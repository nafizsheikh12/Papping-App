import React from 'react'
import Layout from '../../../Layout/Layout'
import {Table} from 'react-bootstrap';
import './Sub2Report.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormSliderTop from '../../../../shared/SharedComponents/FormSlider/FormSliderTop';
import ReportAccordionForm from '../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm';


const Sub2Report = () => {
  return (
    <Layout
      title="Affiliate Report"
      className="report"
      subActive="report.sub2"
      activeNum="5"
    >
      <div id="Sub2Report">
        <div className="accordion__from ">
          {/* form */}
          <FormSliderTop title="Sub2 Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header">
            <h2>sub 2 reports</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                Sub 2 <ArrowDropDownIcon />
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
              <td>rtm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>rtm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>rtm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>rtm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>rtm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>rtm</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>$500</td>
              <td>$500</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>rtm</td>
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

export default Sub2Report;