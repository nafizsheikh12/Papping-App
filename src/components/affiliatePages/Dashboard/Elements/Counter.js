import React from 'react'
import {Grid,Paper } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import{ConversationIcon,clickIcon,UniqueIcon,RevenueIcon,PayoutIcon,Profit} from './Icons';

const Counter = () => {
  return (
    <Grid container className='Dashboard__Counter' spacing={4}>
        <Grid item lg='2' xs='12' sm='6' md='4'>
            <Paper className='Counter__Click counter__item' style={{  background: 'linear-gradient(86.8deg, #843CF6 -16.69%, #386FFF 108.37%)'
}}>
                    <h3>125 <span>{clickIcon}</span></h3>
                    <hr/>
                    <p>Click</p>
            </Paper>
        </Grid>
        <Grid item lg='2' xs='12' sm='6' md='4'>
            <Paper className='Counter__Click counter__item' style={{  background: 'linear-gradient(88.91deg, #FBAAA2 -1.8%, #FC5286 107.78%)'
 }}>
                 <h3>125 <span> {UniqueIcon}</span></h3>
                    <hr/>
                    <p>Unique</p>
             </Paper>
        </Grid>
        <Grid item lg='2' xs='12' sm='6' md='4'>
         <Paper className='Counter__Click counter__item' style={{ background: 'linear-gradient(89.06deg, #1A0794 -18.12%, #7B66FF 99.19%)'
  }}>
            <h3>125<span>{ConversationIcon}</span></h3>
           <hr/>
           <p>Conversion</p>
        </Paper>
        </Grid>
        <Grid item lg='2' xs='12' sm='6' md='4'>
        <Paper className='Counter__Click counter__item' style={{ background: 'linear-gradient(87.8deg, #FF763B -20.1%, #FFC480 101.13%)'
  }}>
                 <h3>$ 125.00 <span>{RevenueIcon}</span></h3>
                <hr/>
                <p>Revenue</p>
        </Paper>
        </Grid>
        <Grid item lg='2' xs='12' sm='6' md='4'>
        <Paper className='Counter__Click counter__item' style={{ background: 'linear-gradient(90deg, #1BC8BD -15.58%, #149991 110.69%)'
  }}>
             <h3>$ 125.00 <span>{PayoutIcon}</span></h3>
            <hr/>
            <p>Payout</p>
        </Paper>
        </Grid>
        <Grid item lg='2' xs='12' sm='6' md='4'>
        <Paper className='Counter__Click counter__item' style={{ background: 'linear-gradient(270.37deg, #0E4CFD -10.07%, #6A8EFF 103.93%)'

  }}>
             <h3>$ 125.00 <span>{Profit}</span></h3>
            <hr/>
            <p>Profit</p>
        </Paper>
        </Grid>
    </Grid>
  )
}

export default Counter