let medicalDeptEl = document.getElementById("medical-dept");
const medicalDeptVacancies = [
  {
    id: 1,
    vacancyName: "Doctors/Physicians",
    location: "Karachi",
    jobType: "Full time",
    submissionDeadline: "30 Nov, 2024",
    jobDesc:
      "The Doctor/Physician role entails diagnosing and treating patients, managing patient care plans, and ensuring the highest standards of medical practice. Responsibilities include examining patients, interpreting diagnostic tests, and collaborating with healthcare teams to provide comprehensive care.",
    keyResponsibilities: [
      "Diagnose and treat illnesses, injuries, and other health conditions.",
      "Conduct comprehensive patient examinations and interpret diagnostic tests.",
      "Prescribe medications and provide treatment recommendations.",
      "Educate patients on wellness, prevention, and treatment options.",
    ],
    qualification: [
      "Medical Degree (MBBS or equivalent) and a valid medical license.",
      "Residency training in a relevant specialty.",
      "Proven experience as a physician with strong diagnostic skills.",
      "Ability to work effectively in a team-oriented environment.",
    ],
    benefits: [
      "Competitive salary with performance-based incentives.",
      "Comprehensive health insurance coverage.",
      "Opportunities for professional growth and advancement.",
    ],
  },
  {
    id: 2,
    vacancyName: "Nurses",
    location: "Karachi",
    jobType: "Full time",
    submissionDeadline: "30 Nov, 2024",
    jobDesc:
      "Nurses are responsible for providing patient care, monitoring vital signs, and collaborating with healthcare teams to ensure the wellbeing of patients. They offer emotional support and educate patients and their families about health management.",
    keyResponsibilities: [
      "Provide direct patient care and monitor vital signs.",
      "Assist doctors with medical procedures and patient care plans.",
      "Administer medications and document patient progress.",
      "Educate patients and families on health maintenance and post-care.",
    ],
    qualification: [
      "Bachelor's Degree in Nursing and a valid nursing license.",
      "Experience in patient care or a hospital setting.",
      "Strong interpersonal and communication skills.",
      "Ability to work in high-pressure environments.",
    ],
    benefits: [
      "Competitive salary with health and retirement benefits.",
      "Flexible scheduling and paid time off.",
      "Opportunities for specialization and professional development.",
    ],
  },
  {
    id: 3,
    vacancyName: "Medical Assistants",
    location: "Karachi",
    jobType: "Full time",
    submissionDeadline: "30 Nov, 2024",
    jobDesc:
      "Medical Assistants support healthcare professionals by handling administrative tasks, preparing patients for exams, and performing basic clinical duties. They play a crucial role in ensuring smooth operations within the medical facility.",
    keyResponsibilities: [
      "Prepare patients for examinations and assist with clinical tasks.",
      "Manage patient records and appointment scheduling.",
      "Collect lab samples and conduct preliminary diagnostic tests.",
      "Maintain medical equipment and ensure a clean, safe environment.",
    ],
    qualification: [
      "Certification in Medical Assistance or relevant field.",
      "Experience in a clinical or hospital setting.",
      "Attention to detail and strong organizational skills.",
      "Good interpersonal skills and patient care orientation.",
    ],
    benefits: [
      "Health insurance and paid time off.",
      "Training opportunities for career advancement.",
      "Supportive work environment with team collaboration.",
    ],
  },
  {
    id: 4,
    vacancyName: "Pharmacists",
    location: "Karachi",
    jobType: "Full time",
    submissionDeadline: "30 Nov, 2024",
    jobDesc:
      "Pharmacists are responsible for dispensing medications, advising patients on their use, and ensuring patient safety by checking for drug interactions. They play an essential role in patient education and medication management.",
    keyResponsibilities: [
      "Dispense prescriptions accurately and safely.",
      "Counsel patients on medication use, side effects, and interactions.",
      "Collaborate with healthcare providers to ensure safe medication practices.",
      "Manage and organize inventory of pharmaceutical products.",
    ],
    qualification: [
      "Bachelor's or Doctorate in Pharmacy and a valid pharmacy license.",
      "Experience in a pharmacy or healthcare setting.",
      "Strong attention to detail and analytical skills.",
      "Excellent communication skills with a patient-centered approach.",
    ],
    benefits: [
      "Competitive salary with performance bonuses.",
      "Healthcare benefits and retirement plan options.",
      "Access to continued education and specialization programs.",
    ],
  },
  {
    id: 5,
    vacancyName: "Therapists",
    location: "Karachi",
    jobType: "Full time",
    submissionDeadline: "30 Nov, 2024",
    jobDesc:
      "Therapists provide mental and physical health care services to patients, helping them improve well-being, manage stress, and develop coping skills. They play a critical role in patient recovery and emotional support.",
    keyResponsibilities: [
      "Provide therapy sessions to patients based on individual needs.",
      "Develop treatment plans and monitor patient progress.",
      "Work closely with healthcare teams to optimize patient care.",
      "Offer guidance on coping strategies and wellness practices.",
    ],
    qualification: [
      "Degree in Psychology, Counseling, or Physical Therapy.",
      "Licensure and certification in relevant field.",
      "Experience in mental or physical therapy settings.",
      "Empathy, active listening skills, and a non-judgmental approach.",
    ],
    benefits: [
      "Health and wellness programs.",
      "Flexible work schedules and paid time off.",
      "Opportunities for professional growth and certification.",
    ],
  },
];

medicalDeptVacancies.map(
  (item) =>
    (medicalDeptEl.innerHTML += `
   <div class="col-md-8 d-flex justify-content-between align-items-center mx-4 p-2">
      <h5 class="font-family-plus-jakarta-sans fw-600 fs-20 text-dark-gray" style="line-height: 25.2px;">
      ${item.vacancyName}
      </h5>
       <a 
          class="font-family-plus-jakarta-sans fw-600 text-sky-blue text-decoration-none" 
          href="#" data-bs-target="#exampleModalToggle${
            item.id
          }" data-bs-toggle="modal"
      >Details</a>
  </div>
  <div class="col-md-8 mx-4 p-2 pt-0">
  <hr>
  </div>
  
  
  
  <div class="modal fade" id="exampleModalToggle${
    item.id
  }" aria-hidden="true" aria-labelledby="exampleModalToggleLabel${
      item.id
    }" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel${item.id}">${item.vacancyName}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-md-3">
                      <div class="card">
                          <div class="card-body">
                              <small>Location</small>
                              <p>${item.location}</p>
                              <hr class="mt-0 pt-0">
  
                              <small>Type</small>
                              <p>${item.jobType}</p>
                              <hr class="mt-0 pt-0">
  
                              <small>Submission Deadline</small>
                              <p>${item.submissionDeadline}</p>

                          </div>
                      </div>
                  </div>
  
                  <div class="col-md-9">
                      <div class="input-group">
                          <button class="btn btn-dark w-50" data-bs-target="#exampleModalToggle${
                            item.id
                          }" data-bs-toggle="modal">Overview</button>
                          <button class="btn btn-secondary w-50" data-bs-target="#exampleModalToggle${
                            item.id
                          }_second" data-bs-toggle="modal">Application</button>
                      </div>
  
                      <p class="mt-5 mb-0"><b>Job Title: </b>${item.vacancyName}</p>
                      <p class="mb-0"><b>Location: </b>${item.location}</p>
                      <p><b>Job Type: </b>${item.jobType}</p>
                      
                      <h5>Overview</h5>
                      <p>${item.jobDesc}</p>

                      <h5>Key Responsibilities</h5>
                      <ul>${item.keyResponsibilities
                        .map((val) => `<li>${val}</li>`)
                        .join("")}</ul>

                      <h5>Qualifications</h5>
                      <ul>${item.qualification
                        .map((val) => `<li>${val}</li>`)
                        .join("")}</ul>
                      
                       <h5>Benefits</h5>
                       <ul>${item.benefits
                         .map((val) => `<li>${val}</li>`)
                         .join("")}</ul>
                  </div>
              </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  
  <div class="modal fade" id="exampleModalToggle${
    item.id
  }_second" aria-hidden="true" aria-labelledby="exampleModalToggleLabel${
      item.id
    }_second" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel${
            item.id
          }_second">${item.vacancyName}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-md-3">
                      <div class="card">
                        <div class="card-body">
                              <small>Location</small>
                              <p>${item.location}</p>
                              <hr class="mt-0 pt-0">
  
                              <small>Type</small>
                              <p>${item.jobType}</p>
                              <hr class="mt-0 pt-0">
  
                              <small>Submission Deadline</small>
                              <p>${item.submissionDeadline}</p>
                          </div>
                      </div>
                  </div>
  
                  <div class="col-md-9">
                      <div class="input-group">
                            <button class="btn btn-secondary w-50 btn-xlg" data-bs-target="#exampleModalToggle${
                              item.id
                            }" data-bs-toggle="modal">Overview</button>
                          <button class="btn btn-dark w-50" data-bs-target="#exampleModalToggle${
                            item.id
                          }_second" data-bs-toggle="modal">Application</button>
                      </div>
                      
                      <form class="mt-5">
                        <label class="form-label mb-0">Name: <small class="text-danger">*</small></label>
                        <input class="form-control" type="text">

                        <label class="form-label mb-0 mt-2">Email: <small class="text-danger">*</small></label>
                        <input class="form-control" type="email">

                        <label class="form-label mb-0 mt-2">Phone Number: <small class="text-danger">*</small></label>
                        <input class="form-control" type="number">

                        <label class="form-label mb-0 mt-2">Upload Resume: <small class="text-danger">*</small></label>
                        <input type="file" class="form-control">
                        
                        <label class="form-label mb-0 mt-2">Cover Letter: <small class="text-danger">*</small></label>
                        <textarea type="file" class="form-control" style="resize:none;" rows=6></textarea>

                        <button class="brand-btn bg-sky-blue text-light mt-3">Submit Application</button>
                      </form>
                  </div>
              </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  `)
);
