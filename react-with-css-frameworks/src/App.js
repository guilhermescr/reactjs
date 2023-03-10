import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { StyledBox } from './components/Box/Box.styles';
import StyledButton from './components/Button/Button';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ backgroundColor }) => backgroundColor};
  }

  main {
    color: #efefef;
  }
`;

function App() {
  const [bloodData, setBloodData] = useState({});
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState('#333333');
  const [borderColor, setBorderColor] = useState('#ccc');

  const chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ];

  function getRandomBorderColor() {
    let newBorderColor = '#';

    for (let times = 0; times < 6; times++) {
      let charsIndex = Math.floor(Math.random() * chars.length);
      newBorderColor += chars[charsIndex];
    }

    if (newBorderColor === borderColor) {
      getRandomBorderColor();
      return;
    }

    setBodyBackgroundColor(newBorderColor);
    setBorderColor(newBorderColor);
  }

  async function fetchData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  async function getBloodType() {
    const data = await fetchData(
      'https://random-data-api.com/api/v2/blood_types'
    );
    setBloodData(data);
  }

  return (
    <div>
      <main>
        <GlobalStyle backgroundColor={bodyBackgroundColor} />
        <h1>Button using styled components</h1>
        <ul>
          <li>Blood Group: {bloodData && bloodData.group}</li>
          <li>Blood Type: {bloodData && bloodData.type}</li>
        </ul>

        <StyledBox>
          <StyledButton onClick={getBloodType}>Get Blood Type</StyledButton>

          <StyledButton
            onClick={getRandomBorderColor}
            borderColor={borderColor}
          >
            Click Me To Get a Random Border
          </StyledButton>

          <StyledButton variant="yellow">Variant Border</StyledButton>
        </StyledBox>
      </main>
    </div>
  );
}

export default App;
