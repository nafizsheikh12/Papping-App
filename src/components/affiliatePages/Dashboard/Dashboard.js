import React from 'react'
import Layout from '../../Layout/Layout'
import Counter from './Elements/Counter'
import './Dashboard.scss';
import DataTable from './Elements/DataTable';
import DataCharts from './Elements/DataCharts';

const Dashboard = () => {
  return (
    <Layout title='Dashboard' className='affiliateDashboard' activeNum="12">
      <div id="Dasboard">
      <Counter sx={{marginBottom:15}}/>
      <DataCharts/>
      <DataTable/>
      </div>
    </Layout>
  )
}

export default Dashboard
