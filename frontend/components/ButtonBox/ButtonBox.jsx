import React, { useCallback, useEffect, useState } from "react";

// Button component that accepts props
const Button = ({ className, handleSubmit, type, children }) => {

  // Render a button element with the provided class name, click event handler, and type
  return <button className={className} onClick={handleSubmit} type={type}>{children}</button>

}

// Export the Button component as the default export
export default Button;
