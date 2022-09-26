import { Grid } from "@mui/material";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from 'react-bootstrap';
//responsive css
import "./responsiveChart.css"
//css custom tooltip datachart
import "./dataChart.css"
//import icon from charticon file
import  clickIcon  from "./charticon/clickIcon.png";
import  ConversationIcon  from "./charticon/conversation.png";
import  payoutIcon  from "./charticon/payout.png";
import  profitIcon  from "./charticon/profit.png";
import  revenueIcon  from "./charticon/revenue.png";

const monthData = [
  { day: 1, click: 3, conversion: 150, revenue: 30, payout: 80, profit: 125 },
  { day: 2, click: 3, conversion: 12, revenue: 90, payout: 80, profit: 80 },
  { day: 3, click: 35, conversion: 70, revenue: 30, payout: 80, profit: 125 },
  { day: 4, click: 3, conversion: 40, revenue: 30, payout: 80, profit: 125 },
  { day: 5, click: 31, conversion: 90, revenue: 74, payout: 80, profit: 49 },
  { day: 6, click: 32, conversion: 40, revenue: 49, payout: 19, profit: 125 },
  { day: 7, click: 100, conversion: 100, revenue: 130, payout: 49, profit: 25 },
  { day: 8, click: 39, conversion: 20, revenue: 110, payout: 80, profit: 15 },
  { day: 9, click: 30, conversion: 30, revenue: 90, payout: 80, profit: 95 },
  { day: 10, click: 43, conversion: 14, revenue: 30, payout: 80, profit: 125 },
  { day: 11, click: 53, conversion: 19, revenue: 43, payout: 19, profit: 10 },
  { day: 12, click: 13, conversion: 33, revenue: 49, payout: 80, profit: 125 },
  { day: 13, click: 23, conversion: 55, revenue: 88, payout: 80, profit: 90 },
  { day: 14, click: 33, conversion: 69, revenue: 30, payout: 80, profit: 125 },
  { day: 15, click: 83, conversion: 19, revenue: 111, payout: 80, profit: 125 },
  { day: 16, click: 43, conversion: 45, revenue: 10, payout: 80, profit: 19 },
  { day: 17, click: 39, conversion: 12, revenue: 30, payout: 80, profit: 125 },
  { day: 18, click: 37, conversion: 88, revenue: 88, payout: 80, profit: 80 },
  { day: 19, click: 43, conversion: 77, revenue: 30, payout: 11, profit: 125 },
  { day: 20, click: 93, conversion: 99, revenue: 77, payout: 80, profit: 11 },
  { day: 21, click: 34, conversion: 49, revenue: 64, payout: 19, profit: 125 },
  { day: 22, click: 13, conversion: 53, revenue: 22, payout: 10, profit: 125 },
  { day: 23, click: 39, conversion: 19, revenue: 30, payout: 80, profit: 125 },
  { day: 24, click: 37, conversion: 11, revenue: 88, payout: 80, profit: 80 },
  { day: 25, click: 22, conversion: 83, revenue: 30, payout: 80, profit: 125 },
  { day: 26, click: 8, conversion: 10, revenue: 142, payout: 80, profit: 49 },
  { day: 27, click: 9, conversion: 99, revenue: 30, payout: 80, profit: 125 },
  { day: 29, click: 1, conversion: 109, revenue: 30, payout: 80, profit: 90 },
];

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload)
  if (active && payload && payload.length) {
    console.log(payload[0].payload.payout)
    return (
      <div className="custom-tooltip">
        <div className="custom-tooltip-header">
            <p>{payload[0].payload.day}</p>
        </div>
        <div className="custom-tooltip-ul">
            <ul>
               <li>
                   <div className="custom-tooltip-click">
                         <img src={clickIcon}/>
                         <p>Click</p>
                   </div>
                   <div className="custom-tooltip-footer">
                         <p>{payload[1].payload.click}</p>
                   </div>
               </li>
               <li>
                   <div className="custom-tooltip-click">
                         <img src={ConversationIcon}/>
                         <p>Conversation</p>
                   </div>
                   <div className="custom-tooltip-footer">
                         <p>{payload[1].payload.conversion}</p>
                   </div>
               </li>
               <li>
                   <div className="custom-tooltip-click">
                          <img src={revenueIcon}/>
                         <p>Revenue</p>
                   </div>
                   <div className="custom-tooltip-footer">
                         <p>{payload[1].payload.revenue}</p>
                   </div>
               </li>
               <li>
                   <div className="custom-tooltip-click">
                         <img src={payoutIcon}/>
                         <p>Payout</p>
                   </div>
                   <div className="custom-tooltip-footer">
                         <p>{payload[1].payload.payout}</p>
                   </div>
               </li>
               <li>
                   <div className="custom-tooltip-click">
                         <img src={profitIcon}/>
                         <p>Profit</p>
                   </div>
                   <div className="custom-tooltip-footer">
                         <p>{payload[1].payload.profit}</p>
                   </div>
               </li>
            </ul>
        </div>
      </div>
    );
  }

  return null;
}

 


const DataCharts = () => {

  return (
    <>
      <div id="dashboardChart" className="adminDashboard">
        <div className="dashboard__Chart__header__content">
          <Grid container>
            <Grid lg={2} md={12} xs={12}>
              <h2 className="h_dashboard">Dashboard</h2>
            </Grid>
            
            <Grid lg={10} md={12} xs={12} className="but_dashboardd">
              <Button className="datetoData resBtnDate">
                2022-07-02 - 2022-07-02
              </Button>
              <Button variant="primary m_btn resBtnSend" >
                Send
              </Button>
            </Grid>
          </Grid>
        </div>
      <ResponsiveContainer width='100%' height={500}>
          <ComposedChart
            data={monthData}
            margin={{ top: 0, left: -28, right: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            {/* <XAxis dataKey="day" />
          <YAxis />
          <Line type="monotone" dataKey="click" stroke="red" />
          <Bar dataKey="conversion" barSize={10} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="blue" />
          <Line type="monotone" dataKey="payout" stroke="green" />
          <Line type="monotone" dataKey="profit" stroke="#ff7300" />
          <Tooltip />
          <Legend
            
            margin={{ top: 0, left: 300, right: 0, bottom: 0 }}
          /> */}
            <XAxis dataKey="day" />
            <YAxis />
            <Line type="monotone" dataKey="click" stroke="#4C0000" strokeWidth="5"/>
            <Bar dataKey="conversion" barSize={20} radius={[20, 20, 0, 0]} fill="#A5DEFF" />
            <Line type="monotone" dataKey="revenue" stroke="#F0C64D" strokeWidth="5" />
            <Line type="monotone" dataKey="payout" stroke="#159F96" strokeWidth="5"/>
            <Line type="monotone" dataKey="profit" stroke="#1A55FD" strokeWidth="5"/>
            <Tooltip content={<CustomTooltip/>}/>
            <Legend />
          </ComposedChart>
        </ResponsiveContainer>
        <Grid className="h6_dashboard prbtext" lg={5} md={5} xs={12}>
              <p>STATISTICS FOR THE LAST 30 DAYS</p>
        </Grid>
      </div>
    </>
  );
};

export default DataCharts;