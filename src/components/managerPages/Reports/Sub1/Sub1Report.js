import React from 'react'
import Layout from '../../../Layout/Layout'
import {Table} from 'react-bootstrap';
import './Sub1Report.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormSliderTop from '../../../../shared/SharedComponents/FormSlider/FormSliderTop';
import ReportAccordionForm from '../../../../shared/SharedComponents/ReportAccordionForm/ReportAccordionForm';


const Sub1Report = () => {
  return (
    <Layout
      title="Affiliate Report"
      className="managerReport"
      subActive="managerReport.sub1"
      activeNum="23"
    >
      <div id="Sub1Report">
        <div className="accordion__from ">
          <FormSliderTop title="Sub1 Report Form">
            <ReportAccordionForm />
          </FormSliderTop>

          <div className="header">
            <h2>sub 1 reports</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                sub1 <ArrowDropDownIcon />
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
          </tbody>
        </Table>
      </div>
    </Layout>
  );
}

export default Sub1Report;