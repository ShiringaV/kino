import exspress from 'express'
import bodyParser from 'body-parser'
// Public API
import filmsRouters from './routes/films.js' 
import cinemaRouters from './routes/cinema.js'
import sellRouters from './routes/sell.js'
import otherRouters from './routes/other.js'
// Admin API
import statisticsRouters from './routes/admin/statistics.js'
import bannerTopRouters from './routes/admin/banners/top.js'
import bannerEteRouters from './routes/admin/banners/ete.js'
import bannerNewsRouters from './routes/admin/banners/news.js'
import filmsAdminRouters from './routes/admin/films.js'
import cinemaAdminRouters from './routes/admin/cinema.js'
import newsAdminRouters from './routes/admin/news.js'
import sellAdminRouters from './routes/admin/sell.js'
import pageRouters from './routes/admin/page.js'
import contactsRouters from './routes/admin/contacts.js'
import usersAdminRouters from './routes/admin/users.js'

const app = exspress()

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

// Public routers
app.use('/api/films', filmsRouters)
app.use('/api/cinema', cinemaRouters)
app.use('/api/sell', sellRouters)
app.use('/api/other', otherRouters)

// Admin routers
app.use('/api/admin/statistics', statisticsRouters)
app.use('/api/admin/banner/top', bannerTopRouters)
app.use('/api/admin/banner/ete', bannerEteRouters)
app.use('/api/admin/banner/news', bannerNewsRouters)
app.use('/api/admin/films', filmsAdminRouters)
app.use('/api/admin/cinema', cinemaAdminRouters)
app.use('/api/admin/news', newsAdminRouters)
app.use('/api/admin/sell', sellAdminRouters)
app.use('/api/admin/page', pageRouters)
app.use('/api/admin/contacts', contactsRouters)
app.use('/api/admin/users', usersAdminRouters)

app.get('/', (req, res) => {
    res.send('Hello from homepage')
})

app.listen(PORT, () => {
    console.log(`Server running on port: localhost:${PORT}...`)
})