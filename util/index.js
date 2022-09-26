

const controllerHolder = async (controllerAction, req, res, successMessage) => {
    try {
        await controllerAction(req.body);
        return res.json({
            success: true,
            message: successMessage,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.errors.title.message
        })
    }
}

module.exports = controllerHolder;