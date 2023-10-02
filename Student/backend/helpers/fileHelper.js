
const multer = require('multer');
const path = require('path');


module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
})

