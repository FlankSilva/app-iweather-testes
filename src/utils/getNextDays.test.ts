import { getNextDays } from './getNextDays'

describe('getNextDays' , () => {
  it("shold be return the next fixe days", () => {
    const days = getNextDays();
    
    expect(days.length).toBe(5)
  })
})