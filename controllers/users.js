import { v4 as uuidv4 } from 'uuid'

let users = [
    {
        "name": "Vlad",
        "lastName": "Shy",
        "age": 21
    },
    {
        "name": "Sofia",
        "lastName": "Shy",
        "age": 21
    }
]

export const createUser = (req, res) => {
    const user =  { ...req.body, id: uuidv4() }
    users.push(user)
    res.send(`User ${user.name} added to database, ID:${user.id}`)
}

export const getUser = (req, res) => {
    res.send(users.find(user => user.id === req.params.id))
}

export const deleteUser = (req, res) => {
    users = users.filter(user => user.id !== req.params.id)
    res.send(users)
}

export const getUsers = (req, res) => {
    res.send(users)
}