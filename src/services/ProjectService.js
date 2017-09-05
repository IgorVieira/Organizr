class ProjectService {

  constructor (resource) {
    this._resource = resource(`api/projects{/id}`);
  }

  updateProject (dataProject) {
    return this._resource.update({ id: dataProject._id }, dataProject)
  }

  listProjects () {
    return this._resource
        .query()
        .then(res => res.json())
  }

  getProjectById (id) {
    return this._resource
      .get({ id })
      .then(res => res.json())
  }

  deleteProject (id) {
    return this._resource
        .delete({id})
  }

}

export default ProjectService
