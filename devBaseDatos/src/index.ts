import app from './app'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main () {
  app.listen(app.get('port'))
  console.log(`Server on port http://localhost:${app.get('port') as string}`)
}
void main()
