import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailsNav from '../components/DetailsNav';

describe('DetailsNav', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <DetailsNav />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <DetailsNav />
      </BrowserRouter>,
    );
    expect(getByText('Country Details')).toBeInTheDocument();
  });
});
