import { server } from '.'
const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Listening at:${port}`))