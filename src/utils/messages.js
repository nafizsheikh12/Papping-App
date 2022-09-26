import { textAlign } from '@mui/system';
import Spinner from 'react-bootstrap/Spinner';
import './message.scss';

export const showError = (error, msg) =>{
    if (error) return <div className="alert alert-danger mt-3 mb-3 ">{msg}</div>
}


export const showSuccess = (success, msg) =>{
    if (success) return <div className="alert alert-success">{ msg }</div>
}

export const showLoading = loading =>{
    if (loading) return <div className="alert"><Spinner animation="grow" size='xl' /> Loading....</div>
}
export const Loading = loading =>{
    if (loading) return <div className="loading">
        <Spinner animation="grow" size='xl' />
         </div>
}
