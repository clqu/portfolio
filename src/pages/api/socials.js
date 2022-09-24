const Softwareer = require('libraries/softwareer.node');

export default (req, res) => {
    Softwareer.getSocials().then((profile) => {
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