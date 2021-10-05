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
        <div class="cf-ns nl2 nr2">
          <div className="fl-ns w-25-ns ph2" style={ {"padding-top":"8px;", "text-align":" end;"} }>Show</div>

      <div className="fl-ns w-50-ns ph2">
    <Dropdown
     //label="Show"
      size="small"
      options={options}
      value={initialState.selected1}
      onChange={(_, v) => setState({ selected1: v })}
    />
    </div>
    </div>  
       
    )
}

export default DropdownButtonWrapper

//margin-left: -56px;
  //  margin-bottom: -32px;