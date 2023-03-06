
const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require('multer');

const upload = require("../helpers/uploader");
const util = require("util");

router.post('/',  (req, res, next) => {
    return res.render('index', { message: req.flash() });
});

router.post('/upload-single', upload.single('file'), (req, res) => {
    if (req.file) {
        return res.send({ status: 'true', message: 'File Uploaded.', data: req.file });
    }
});



router.post('/upload-multiple', upload.array('files', 5),  (req, res, next) => {
//exports.uploadMultiple = (req, res) => {
    if (req.files.length) {
        //console.log(req.files)
        return res.send({ status:'success',data: req.files,message: 'File Uploaded.'});    
        req.flash('success', 'Files Uploaded.');
    }
    return res.redirect('/');
});
/*
router.post('/upload-single-v2', auth, (req, res, next) => {
//exports.uploadSingleV2 = async (req, res) => {
    const uploadFile = util.promisify(upload.single('file'));
    try {
         uploadFile(req, res);
        //console.log(req.file)
        return res.send({ status:'success',data: req.file,message: 'File Uploaded.'});    
        req.flash('success', 'File Uploaded.');
    } catch (error) {
        console.log(error)
    }
    return res.redirect('/');
});
*/

module.exports = router;

