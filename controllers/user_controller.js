import UserModel from '../models/user_model.js'

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await UserModel.find()
            res.json(users)
        } catch (e) {
            res.status(400).json({ meassage: e.meassage })
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(400).json({ message: e.meassage })
        }
    },

    addNewUser: async (req, res) => {
        try {
            const { name, password, email } = req.body
            const newUser = await UserModel.create({
                name: name,
                email: email,
                password: password
            })

            res.json(newUser)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    updateUser: async (req, res) => {
        try {
            let user = await UserModel.findById(req.params.id)
            const { name, email, password } = req.body
            user.name = name ? name : user.name
            user.email = email ? email : user.email
            user.password = password ? password : user.password

            await user.save()
            res.json(user)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    updateLinkToUser: async (req, res) => {
        try {
            let user = await UserModel.findById(req.params.id)
            const { linkId } = req.body
            user.links.push(linkId)
            await user.save()
            res.json(user)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    removeLinkFromUser: async (req, res) => {
        try {
            let user = await UserModel.findById(req.params.id)
            const { linkId } = req.body
            let links = user.links
            const a = []
            let index = links.findIndex(a => a == linkId)
            if (a == -1)
                throw "not found"
            links.splice(index, 1)
            user.links = links
            user.save()
            res.json(user)
        } catch (e) {
            user.status(400).json({ message: e.message })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await UserModel.deleteOne({ _id: req.params.id })
            res.json(user)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}

export default UserController