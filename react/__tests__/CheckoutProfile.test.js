import React from 'react'
import { render, flushPromises } from '@vtex/test-tools/react'
import CheckoutDetails from '../components/CheckoutGraphql'
import getCheckoutDetails from '../queries/checkoutProfile.graphql';
import { useQuery } from 'react-apollo'

jest.mock('react-apollo', () => {
  
  // const data = { menu }; // put your mock data here
  return {
    __esModule: true,
    useQuery: jest.fn(() => ({ data:{
        checkoutProfile: {
            availableAccounts:[
              {
                accountId:"10",
                paymentSystemName:"deepi"
              }
          ]
      }
       
      
    }})),
  };
});

test('should render checkoutProfile mock graphql responses', async () => {
  jest.useFakeTimers()
  

  const { getByText } = render(<CheckoutDetails />)

//   expect(getByText(/Loading/)).toBeDefined()

  await flushPromises()
  jest.runAllTimers()

  expect(getByText(/deepi/)).toBeDefined()
})