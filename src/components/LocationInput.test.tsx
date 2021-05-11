import LocationInput from './LocationInput';
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders the component successfully', () => {
  const { getByText } = render(<LocationInput />)
  expect(getByText('Enter a Zip Code:')).toBeInTheDocument()
  expect(getByText('Submit')).toBeInTheDocument()

});

test('types in ui input and handles submit', () => {
  const locationAddHandler = jest.fn()
  render(<LocationInput onAddLocation={locationAddHandler}/>)
  userEvent.type(screen.getByPlaceholderText('Zip Code...'), '60607')
  userEvent.click(screen.getByText('Submit'))
  expect(screen.getByPlaceholderText('Zip Code...')).toHaveValue('60607')
  expect(locationAddHandler).toHaveBeenCalled();
});

//TODO: Test for "Use ZipCodeValidator on location input (WM-11)"