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
            const { link, targetValues } = req.body
            console.log("target", targetValues)
            let targets = [{ name: "general", value: 0 }]
            targets.forEach(t => console.log(t))
            targetValues?.forEach(element => {
                targets.push(element)
            })
            console.log("link", link)
            const newLink = await LinkModel.create(
                {
                    link: link,
                    counts: 0,
                    targetParamName: "t",
                    targetValues: targets
                }
            )

            res.json(newLink)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    updateTargetsToLink: async (req, res) => {
        const { targetValues } = req.body
        try {
            let link = await LinkModel.findById(req.params.id)
            targetValues.forEach(t => link.targetValues.push({ name: t.name, value: t.value }))
            await link.save()

            res.json(link)

        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

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