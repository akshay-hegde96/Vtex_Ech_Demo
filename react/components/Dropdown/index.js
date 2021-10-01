import React from 'react'
import { Dropdown } from 'vtex.styleguide'

const DropdownButtonWrapper=() => {
    const initialState = {
        selected1: '1'
      }
      const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
       /* { value: 'diners', label: 'Diners' },
        { value: 'giftcard', label: 'Gift Card' },
        { value: 'amex', label: 'American Express' },*/
      ]
    return (
        <div className="cf-ns nl2 nr2">
       {/* <label>Show</label> */}
    <Dropdown
     label="Show"
      size="large"
      options={options}
      value={initialState.selected1}
      onChange={(_, v) => setState({ selected1: v })}
    />
    </div>  
       
    )
}

export default DropdownButtonWrapper
