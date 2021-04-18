import React,{Fragment} from 'react';

const ChartBody=()=>{
    return (
        <React.Fragment>
<div style={{border: '2px solid gray', paddingBlock: 20, marginLeft: '-8px', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopRightRadius: 15}}>
  <div className="row" style={{paddingLeft: 20, paddingRight: 20}}>
    <div className="col">
      <div className="card">
        <div className="card-body">
          1st row col-1
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          1st row col-2
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          1st row col-3
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          1st row col-4
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          1st row col-5
        </div>
      </div>
    </div>
  </div>
  <div className="row" style={{paddingLeft: 20, paddingRight: 20, marginTop: 40}}>
    <div className="col-8" style={{border: '1px solid gray', borderRadius: 5, width: '65%', marginLeft: 10, padding: 10}}>
      <div>2nd row col-1</div>
    </div>
    <div className="col-4">
      <div className="row">
        <div className="col" style={{border: '0.2px solid lightgray', borderRadius: 5, marginLeft: 15, padding: 10}}>
          <div>col 2</div>
        </div>
      </div>
      <div className="row" style={{marginTop: 15}}>
        <div className="col-4" style={{border: '0.2px solid lightgray', borderRadius: 5, padding: 10, marginLeft: 15, marginRight: 16}}>
          <div>
            col 1
          </div>
        </div>
        <div className="col-7" style={{border: '0.2px solid lightgray', borderRadius: 5, padding: 10}}>
          <div>
            col 2
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </React.Fragment>
    )
}

export default ChartBody;