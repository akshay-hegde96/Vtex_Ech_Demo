import React from 'react'
import { render, flushPromises } from '@vtex/test-tools/react'
import GlobalCatalog from '../components/GlobalCategory'
import getCatalog from '../queries/globalCategory.graphql';
import { useQuery } from 'react-apollo'

jest.mock('react-apollo', () => {
  
  // const data = { menu }; // put your mock data here
  return {
    __esModule: true,
    useQuery: jest.fn(() => ({ data:{
      globalCategory: {
          children:[
              {
                  name:"deepi",
                  id:"10"
              }
          ]
      }
       
      
    }})),
  };
});

test('should render globalCaegory mock graphql responses', async () => {
  jest.useFakeTimers()
  jest.mock('react-apollo', () => {
  
    // const data = { menu }; // put your mock data here
    return {
      __esModule: true,
      useQuery: jest.fn(() => ({ data:{
        globalCategory: {
            children:[
                {
                    name:"deepi",
                    id:"10"
                }
            ]
        }
         
        
      }})),
    };
  });
  

  const { getByText } = render(<GlobalCatalog />)

//   expect(getByText(/Loading/)).toBeDefined()

  await flushPromises()
  jest.runAllTimers()

  expect(getByText(/deepi/)).toBeDefined()
})