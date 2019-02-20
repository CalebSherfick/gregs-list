//PRIVATE
import JobService from "../services/jobService.js";

let _js = new JobService

function draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(j => {
    template += j.getTemplate()
  })
  document.getElementById('available-content').innerHTML = template
  document.getElementById('form-content').innerHTML = `
    <form onsubmit="app.controllers.jobController.addJob(event)">
        <input type="text" name="company" placeholder="Company" required>
        <input type="text" name="jobTitle" placeholder="Job Title" required>
        <input type="number" name="rate" placeholder="Dollars/Hour" required>
        <input type="number" name="hours" placeholder="Hours/Week" required>        
        <input type="text" name="description" placeholder="Description">
        <button type="submit">Submit</button>
    </form>`
}

//PUBLIC
export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
  }

  //IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
  addJob(event) {
    event.preventDefault();
    let form = event.target
    let newJob = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _js.addJob(newJob)
    //Clears thte form
    form.reset()
  }

  deleteJob(id) {
    _js.deleteJob(id)
  }

  getJobs() {
    _js.getApiJobs()
  }

}