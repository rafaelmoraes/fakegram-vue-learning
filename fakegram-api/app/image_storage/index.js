var db = require('../../config/database'),
    imageStorage = {};

imageStorage.add = (req, res) => {
    db.insert(req.body, (err, newDoc) => {
        if(err) return console.error(err);

        console.log(`Added successfully: ${newDoc._id}`);
        res.json(newDoc._id);
    });
};

imageStorage.find = (req, res) => {
   db.findOne({_id: req.params.imageId }, (err, docFound) => {
        if (err) return console.error(err);

        if(docFound) return res.json(docFound);
        res.status(404).end();
    });
};

imageStorage.update = (req, res) => {
    db.update({_id : req.params.imageId }, req.body, (err, hasUpdated) => {
        if (err) return console.error(err);

        if(hasUpdated) res.status(200).end();
        res.status(500).end();
        console.log('Updated successfully: ' + req.body._id);
        res.status(200).end();
    });
};

imageStorage.delete = (req, res) => {
    db.remove({ _id: req.params.imageId }, {}, (err, hasDeleted) => {
        if (err) return console.error(err);

        console.log('Deleted successfully');
        if(hasDeleted) res.status(200).end();
        res.status(500).end();
    });
};

imageStorage.all = (req, res) => {
    db.find({}).sort({title: 1}).exec((err, result) => {
        if (err) return console.error(err);

        res.json(result);
    });
};

module.exports = imageStorage;
