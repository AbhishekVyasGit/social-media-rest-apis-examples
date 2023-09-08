const post = (model) => async (req, res) => {
    
    try {
        const item = await model.create(req.body);

        return res.status(201).send(item);
    }
    catch (err) {
        return res.send(500,"something went wrong...", err)
    }
};


const deleteOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id);
        return res.status(200).send(item);
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err.message)
    }
};

module.exports = (model) => {
    return {
        post: post(model),
        deleteOne : deleteOne (model)
    }
};