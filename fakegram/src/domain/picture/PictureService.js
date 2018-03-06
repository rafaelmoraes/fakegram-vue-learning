export default class PictureService {
  constructor(resource) {
    this._resource = resource('v1/images{/id}');
  }

  all() {
    return this._resource.query().then(
      res => res.json(),
      err => {
        console.error(err);
        throw new Error(
          'Something went wrong, I was not able to find the pictures. =/'
        ).message;
      });
  }

  save(picture) {
    let response;
    if (picture._id) {
      response = this._resource.update({
        id: picture._id
      }, picture);
    } else {
      response = this._resource.save(picture);
    }
    return response.then(
      () => "Saved successfully!",
      err => {
        console.error(err);
        throw new Error('Could not save. =/').message;
      }
    )
  }

  delete(picture) {
    return this._resource.delete({id: picture._id}).then(
      res => "Deleted successfully!",
      err => {
        console.error(err);
        throw new Error('Could not delete. =/').message;
      }
    );
  }

  findByID(id) {
    return this._resource.get({ id }).then(
      res => res.json(),
      err => {
        console.error(err);
        throw new Error('Could not find. =/').message;
      }
    );
  }
}
