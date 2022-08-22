import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { ReactDOM } from 'react';


function DropdownPay() {

  
  return (
    <Dropdown>
      {/* <Dropdown.Toggle variant="success" id="dropdown-basic">
        PAY TYPE
      </Dropdown.Toggle> */}

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Flat</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hourly</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}



export default DropdownPay;