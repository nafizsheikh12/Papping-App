import React from 'react'
import {Grid} from '@mui/material';
import {Link} from 'react-router-dom';
import Affiliate from './Affiliate';
import AffiliateTable from './AffiliateTable';
import OfferTable from './OfferTable';
import Notifications from './Notifications';

const DataTable = () => {
  return (
    <div className='dashbord__tables' >
        <Grid container spacing={5}>
            <Grid item xs='12' sm='12' md='6' lg={4}>
                <div className='Table__item'>
                  <h3>Top Affiliate Today <Link to='/'>See All</Link></h3>
                  <AffiliateTable />
                </div>
            </Grid>
            <Grid item xs='12' sm='12' md='6' lg={4}>
            <div className='Table__item'>
            <h3>Top Offer Today <Link to='/'>See All</Link></h3>
            <OfferTable />
            </div>
            </Grid>
            <Grid item xs='12' sm='12' md='6' lg={4}>
            <div className='Table__item'>
            <h3>Notifications <Link to='/'>See All</Link></h3>
            <Notifications />
            </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default DataTable