import { render, screen, renderHook, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';


const testTimes = [
  {
      id: "16:00",
      value: "16:00",
  },
  {
      id: "16:30",
      value: "16:30",
  },
];

test('Renders Heading Of Number Of Guests', () => {
  render(<BookingForm availableTimes={testTimes}/>);
  const headingElement = screen.getByText("Number of Guests");
  expect(headingElement).toBeInTheDocument;
});


test('User can submit booking form', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={testTimes} onSubmit={handleSubmit}/>);
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled
})

