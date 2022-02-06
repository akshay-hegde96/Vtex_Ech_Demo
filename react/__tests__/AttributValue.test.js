import React from 'react'
import { render, flushPromises } from '@vtex/test-tools/react'
import AttributeValue from '../components/AttributesValueGraphql'
import getAttributesValue from '../queries/attributesValue.graphql';
import { useQuery } from 'react-apollo'

jest.mock('react-apollo', () => {
  
    // const data = { menu }; // put your mock data here
    return {
      __esModule: true,
      useQuery: jest.fn(() => ({ data:{
        getAttributeValues: {
            data:{
                body:[
                    "deepi"
                ]
            }
        }
         
        
      }})),
    };
  });


test('should render attributeValue mock graphql responses', async () => {
  jest.useFakeTimers()
  jest.mock('react-apollo', () => {
  
    // const data = { menu }; // put your mock data here
    return {
      __esModule: true,
      useQuery: jest.fn(() => ({ data:{
        getAttributeValues: {
            data:{
                body:[
                    "deepi"
                ]
            }
        }
         
        
      }})),
    };
  });
  

  const { getByText } = render(<AttributeValue />)

//   expect(getByText(/Loading/)).toBeDefined()

  await flushPromises()
  jest.runAllTimers()

  expect(getByText(/deepi/)).toBeDefined()
})