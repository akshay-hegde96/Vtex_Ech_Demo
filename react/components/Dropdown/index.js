import React from 'react'
import { Dropdown } from 'vtex.styleguide'

const DropdownButtonWrapper=() => {
    const initialState = {
        selected1: 'Select Model',
        
      }
      const options = [
        { value: 'Altima', label: 'Altima' },
        { value: 'Altima Couple', label: 'Altima Couple' },
        { value: 'Armada', label: 'Armada' },
       { value: 'JUKE', label: 'JUKE' },
        { value: 'Cube', label: 'Cube' },
        { value: 'Frontier', label: 'Frontier' }
      ]

      const myoptions = [
        { value: '2013', label: '2013' },
        { value: '2014 Couple', label: '2014'},
        { value: '2015', label: '2015' },
        {value: '2016', label: '2016' },
        { value: '2017', label: '2017' },
        { value: '2018', label: '2018' }
      ]

    return (
        <div class="cf-ns nl2 nr2">
          <div className="fl-ns w-25-ns ph2" >MODEL</div>

      <div className="fl-ns w-50-ns ph2" >
    <Dropdown
     //label="Show"
      size="small"
      options={options}
      value={initialState.selected1}
      onChange={(_, v) => setState({ selected1: v })}
    />
    </div>

    <div className="fl-ns w-50-ns ph2" >
    <Dropdown
     //label="Show"
      size="small"
      options={myoptions}
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

  // style={ {"width":"230px;"} }