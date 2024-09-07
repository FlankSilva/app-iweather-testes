import { CityProps } from "@services/getCityByNameService"
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"

const newCity: CityProps = {
  id: '1',
  name: 'São Paulo',
  longitude: 123,
  latitude: 456
}

describe("Storage: CityStorage", () => {
  it("should be return null when don't have a city storage", async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it('should be return city storaged.', async () => {
    await saveStorageCity(newCity)
    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })

  it('should be remove city storaged.', async () => {
    await saveStorageCity(newCity)
    await removeStorageCity()

    const response = await getStorageCity()
    expect(response).toBeNull()
  })
})