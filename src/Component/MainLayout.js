import React, { Fragment } from "react";

const MainLayout = () => {
  return (
    <React.Fragment>
      <div className="row" style={{ marginTop: 25 }}>
        {/* <div
          className="col-2"
          style={{
            border: "0.1px solid lightgray",
            height: 40,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            borderBottom: "none",
            marginLeft: 3,
            textAlign: "center",
            paddingTop: 6,
          
          }}
        > */}
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{
            height: 40,
            border: "0.1px solid lightgray",
            height: 40,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            borderBottom: "none",
            marginLeft: 3,
            textAlign: "center",
            paddingTop: 6,
          }}
        >
          Analytics
        </button>

        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={{
            height: 40,
            border: "0.1px solid lightgray",
            height: 40,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            borderBottom: "none",
            marginLeft: 3,
            textAlign: "center",
            paddingTop: 6,
          }}
        >
          Compliance
        </button>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
