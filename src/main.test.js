import main from './main'
import index from './index'

describe('main', () => {
  it('works', async () => {
      const response = await main()
      expect(response).toBe(true)
  })
})

describe('index', () => {
  it('works', async () => {
      const response = await index()
      expect(response).toBe(true)
  })
})

