import { render } from '@testing-library/react';
import React ,{Fragment}from 'react';

const Title=()=>{
    return (
        <React.Fragment>
<div className="row title" style={{border: '1px solid lightgray', padding: 10,marginLeft: 10,marginRight:10, fontSize: 16,borderRadius:15}}>
  <div className="col-md-2">Priya Mehta 32Y 4M</div>
  <div className="col-md-2">ID : P0987</div>
  <div className="col-md-2">With G3 P0 L1 A1</div>
  <div className="col-md-2"> 8 Weeks Pregnant</div>
  <div className="col-md-2">LMP: 20/01/2020</div>
  <div className="col-md-2">EDD: 29/10/2020</div>
</div>

        </React.Fragment>
    )
}

export default Title;