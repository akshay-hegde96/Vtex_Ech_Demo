import React from 'react'
import { Button } from 'vtex.styleguide'
import styles from './index.css';



const ProductSummaryButtonNissan=({ AddListenBtn }) => {
      const initialState = { isLoading1: true, isLoading2: true, isLoading3: true  };
    return (
      <div className={styles.productSummaryButton}>
        <div className="mb4">
          <Button id={styles.productButton} variation="primary" href="http://vtex.com" target="_blank">
          40300-9HP9A
          </Button>
        </div>
      </div>
    );
}

export default ProductSummaryButtonNissan;
