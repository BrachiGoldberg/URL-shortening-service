import LinkModel from '../models/link_model.js'

const LinkController = {
    getLinkById: async (req, res) => {
        try {
            const link = await LinkModel.findById(req.params.id)
            res.json(link)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    addNewLink: async (req, res) => {
        try {
            const { link } = req.body
            console.log("link", link)
            const newLink = await LinkModel.create({ link: link, counts: 0 })

            res.json(newLink)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    // updateCountsById: async (req, res) => {
    //     try {
    //         let myLink = await LinkModel.findById(req.params.id)
    //         myLink.counts++
    //         await myLink.save()
    //         res.json(myLink)
    //     } catch (e) {
    //         res.status(400).json({ message: e.message })
    //     }
    // },

    deleteById: async (req, res) => {
        try {
            const link = await LinkModel.deleteOne({ _id: req.params.id })
            res.json(link)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}

export default LinkController