// flex column that

import React from "react";
const FlexColumn = ({ children }) => {
  return (
      <div className="d-flex flex-column inner-container mt-5">{children}</div>
  );
};

export default FlexColumn;
