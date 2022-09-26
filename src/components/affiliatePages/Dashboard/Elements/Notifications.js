import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Table from 'react-bootstrap/Table';
import photo1 from '../../../../assets/Placeholder.png';

const  Notifications = () => {
  return (
    <div className="table_data">
      <Table responsive="lg">
        <thead style={{ position: "sticky", top: "0" }}>
          <tr style={{ position: "sticky", top: "0" }}>
            <th>ID</th>
            <th>
              Offer Name <ArrowDropDownIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img src={photo1} alt={photo1} />
              Samantha William
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Notifications;