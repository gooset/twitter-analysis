import React from 'react'

// Importing the CSS module for styling
import styles from './Error.module.scss';

// Error component that accepts props
const Error = ({message, marginTop}) => {
  // Render a span element with the appropriate class names based on the props
  return (
    <span className={marginTop ? `${styles.error} ${styles.marginTop}` : `${styles.error}`}>
      {message}
    </span>
  )
}

// Export the Error component as the default export
export default Error;

