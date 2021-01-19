import exspress from 'express'
import bodyParser from 'body-parser'
import usersRouters from './routes/users.js'
import filmsRouters from './routes/films.js' 
import cinemaRouters from './routes/cinema.js'

const app = exspress()

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.use('/users', usersRouters)
app.use('/api/films', filmsRouters)
app.use('/api/cinema', cinemaRouters)

app.get('/', (req, res) => {
    res.send('Hello from homepage')
})

app.listen(PORT, () => {
    console.log(`Server running on port: localhost:${PORT}...`)
})