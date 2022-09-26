import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {EditIcons,DeleteIcons,WatchIcons,CheckedIcons} from '../../../../assets/Icons';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ItemAdvertiser = (props) => {
  return (
    <>
    <tr>
                        <td>{props.data.id}</td>
                        <td>{props.data.name}</td>
                        <td>{props.data.email}</td>
                        <td>{props.data.contact_person}</td>
                        <td>{props.data.skype}</td>
                        <td>{props.data.manager}</td>
                        <td>{props.data.website}</td>
                        <td>
                        <DropdownButton
                            variant="outline-secondary"
                            title="..."
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item><RemoveRedEyeIcon/>Manage</Dropdown.Item>
                            <Dropdown.Item onClick={() => props.editAdvertiserHandler(props.data.id)}>{EditIcons}Edit</Dropdown.Item>
                            <Dropdown.Item  onClick={props.removeItem}>{DeleteIcons} Delete</Dropdown.Item>
                            </DropdownButton>
                        </td>
                    
                    </tr>
                    </>
  )
}

export default ItemAdvertiser