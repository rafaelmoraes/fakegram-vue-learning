var imageStorage = require('../image_storage'),
    path = require('path');

module.exports = function (app) {
    const imageStorageRoot = '/v1/images'

    app.route(imageStorageRoot)
        .post(imageStorage.add)
        .get(imageStorage.all);

    app.route(`${imageStorageRoot}/:imageId`)
        .delete(imageStorage.delete)
        .get(imageStorage.find)
        .put(imageStorage.update);

};
