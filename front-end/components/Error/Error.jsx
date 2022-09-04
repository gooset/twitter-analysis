import React from 'react'

import styles from './Error.module.scss';

const Error = ({message, marginTop}) => {
  return (
    <span className={marginTop ? `${styles.error} ${styles.marginTop}` : `${styles.error}`}>
      {message}
    </span>
  )
}

export default Error;