const Softwareer = require('libraries/softwareer.node');

export default (req, res) => {
    let id = req.query?.id || null;
    if (!id) {
        res.status(400).json({
            success: false,
            message: "Project ID is required",
            data: null
        });
    }
    
    Softwareer.getPost(id).then((profile) => {
        res.status(200).json({
            success: true,
            message: null,
            data: profile
        });
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: null
        });
    });
};