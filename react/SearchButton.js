import React from "react"
import { Collapsible } from 'vtex.styleguide'
import { ButtonWithIcon } from 'vtex.styleguide'
import { IconSearch } from 'vtex.store-icons'


const SearchButton = (props) => {
    ///initialState = { isOpen: false };
    return (
        <ButtonWithIcon variation="secondary">
            <IconSearch />
        </ButtonWithIcon>
    )
}

export default SearchButton