import { render, screen } from "@testing-library/react-native"

import { WeatherItem } from '@components/WeatherItem'

import dropIcon from "@assets/drop.svg";

describe('Component: WeatherItem', () => {
  it('should be show title and value', () => {
    render(
      <WeatherItem
        icon={dropIcon}
        title='Umidade do ar'
        value='81%'
        isLast={false}
      />
    )

    const title = screen.getByText(/umidade do ar/i)
    const value = screen.getByText(/81%/i)

    expect(title).toBeTruthy()
    expect(value).toBeTruthy()
  })
})