import main from './main'

async function index() {
    const response = await main()
    return response
}

export default index
