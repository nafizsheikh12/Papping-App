import React from 'react'
import {Typography,Link} from '@mui/material';

const CopyRight = (props) => {
  return (
    <Typography variant="body2" id='CopyRight' color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  )
}

export default CopyRight