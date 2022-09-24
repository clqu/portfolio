const Softwareer = require('libraries/softwareer.node');

export default (req, res) => {
    let page = req.query?.page || 1;
    let limit = req.query?.limit || 10;

    page = parseInt(page);
    limit = parseInt(limit);

    Softwareer.getProjects(page, limit).then((profile) => {
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