export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || 'No Description'
  }
  getTemplate() {
    return `
        <div class="card col-3">
        <div class="card-body">
            <h4 class="card-title">${this.company} | ${this.jobTitle}</h4>
            <h6 class="card-subtitle mb-2 text-muted">$${this.rate}/hr | ${this.hours} hrs/wk</h6>
            <p class="card-text">${this.description}</p>
                <button onclick="app.controllers.jobController.deleteJob('${this._id}')">Remove</button>
        </div>
    </div>
    `
  }

}