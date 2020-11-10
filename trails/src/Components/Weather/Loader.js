import React from "react";

const Loader = props => {
  return (
    <div className="Loader">
      <h6 className="text-center-mt-3">{props.msg}</h6>
    </div>
  );
};

export default Loader;