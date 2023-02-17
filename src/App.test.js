import { render, screen, renderHook, fireEvent, getByTestId, getByLabelText, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';
import BookingForm from './components/BookingForm';


const testTimes = [
  "16:00", "17:00", "17:30"
];



  test('renders Heading Of Number Of Guests', () => {
    render(<BookingForm availableTimes={testTimes}/>);
    const headingElement = screen.getByText("Number of Guests");
    expect(headingElement).toBeInTheDocument;
  });



test('user can submit booking form', () => {
  const submitForm = jest.fn();
  render(<BookingForm availableTimes={testTimes} submitForm={submitForm}/>);
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(submitForm).toHaveBeenCalled
})



test('renders initial times', () => {
  const initializeTimes = jest.fn();
  render(<BookingForm availableTimes={testTimes}/>);

  expect(initializeTimes).toHaveBeenCalled
})


test('updates times for selected date', () => {
  const updateTimes = jest.fn();
  render(<BookingForm availableTimes={testTimes} changeDate={(e) => dispatch({ type: "select_new_date", date : '2023-02-17'})}/>);

  const selectDate = screen.getByTestId('select-option')
  fireEvent.click(selectDate)

  expect(updateTimes).toHaveBeenCalled
})



describe('Form Validation', () => {
  test('guest number of 12 doesnt allow for form submission', () => {

  render(<BookingForm availableTimes={testTimes}/>)

    const input = screen.getByLabelText("Number of Guests");
    const button = screen.getByRole("button");

    

    userEvent.type(input, "12");
    console.log(button)
    expect(button).toBeDisabled();
  })
})
