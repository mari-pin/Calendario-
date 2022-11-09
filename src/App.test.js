import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from './App';


test('loads and displays header', async () => {
  // Arrange
  render(<App/>)
  // Act
  const header = screen.getByText(/calendar/i);
  // Assert
  expect(header).toBeInTheDocument();
})
test('shows create event buton', async () => {
  // Arrange
  render(<App/>)
  // Act
  const buttonCreate = screen.getByText(/create event/i);
  // Assert
  expect( buttonCreate ).toBeInTheDocument();
})
test('opens modal when click in button', async () => {
  // Arrange
  render(<App/>)
  // Act
  expect(screen.queryByText(/create your event/) ).not.toBeInTheDocument();

  const buttonCreate = screen.getByText(/create event/i);
  userEvent.click(buttonCreate)
  // Assert
  expect(screen.getByText(/create your event/) ).toBeVisible();
  
})
