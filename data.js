// Shared demo data for RecruZen (saved in the visitor's browser, no server needed)
window.RZ_CANDIDATES = [
  {id:"c1", name:"GANESH RAM MAKINA", designation:"IT Support Specialist & Senior Talent Acquisition", jobType:"30 Days", skills:"Java, J2EE, Spring Boot, WebSphere, Kibana, Grafana, Recruitment, ATS", location:"Visakhapatnam", exp:9, isNew:true},
  {id:"c2", name:"Priya Sharma", designation:"Senior Recruiter", jobType:"30 Days", skills:"Recruitment, ATS, LinkedIn, Sourcing", location:"Bangalore", exp:5, isNew:false},
  {id:"c3", name:"Rahul Verma", designation:"Java Developer", jobType:"30 Days", skills:"Java, Spring Boot, Microservices, MySQL", location:"Hyderabad", exp:4, isNew:true},
  {id:"c4", name:"Sneha Reddy", designation:"Python Developer", jobType:"Immediately", skills:"Python, Django, REST, PostgreSQL", location:"Hyderabad", exp:3, isNew:false},
  {id:"c5", name:"Arjun Nair", designation:"React Developer", jobType:"15 Days", skills:"React, JavaScript, TypeScript, Redux", location:"Kochi", exp:4, isNew:true},
  {id:"c6", name:"Kavya Iyer", designation:"QA Automation Engineer", jobType:"30 Days", skills:"Selenium, Java, TestNG, API Testing", location:"Chennai", exp:6, isNew:false},
  {id:"c7", name:"Mohammed Faizal", designation:"DevOps Engineer", jobType:"60 Days", skills:"AWS, Docker, Kubernetes, Jenkins, Terraform", location:"Pune", exp:7, isNew:false},
  {id:"c8", name:"Ananya Gupta", designation:"Data Analyst", jobType:"Immediately", skills:"SQL, Power BI, Excel, Python", location:"Noida", exp:2, isNew:true},
  {id:"c9", name:"Vikram Singh", designation:"Senior Java Developer", jobType:"60 Days", skills:"Java, Spring, Kafka, Microservices, AWS", location:"Gurugram", exp:8, isNew:false},
  {id:"c10", name:"Divya Menon", designation:"IT Support Engineer", jobType:"15 Days", skills:"Windows, Active Directory, ServiceNow, Networking", location:"Bangalore", exp:3, isNew:false},
  {id:"c11", name:"Suresh Babu", designation:"Full Stack Developer", jobType:"30 Days", skills:"Node.js, React, MongoDB, Express", location:"Visakhapatnam", exp:5, isNew:true},
  {id:"c12", name:"Lakshmi Prasad", designation:"HR Recruiter", jobType:"Immediately", skills:"Recruitment, Naukri, Screening, ATS", location:"Vijayawada", exp:2, isNew:false}
];

window.rzEsc = function(s){
  return String(s == null ? "" : s).replace(/[&<>"']/g, function(ch){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch];
  });
};

// Adds a profile saved by the TalentIQ demo in the same browser, if any
window.rzAllCandidates = function(){
  var list = window.RZ_CANDIDATES.slice();
  try {
    var p = JSON.parse(localStorage.getItem("talentiqProfile") || "null");
    if (p && p.name) {
      list.unshift({
        id:"tiq", name:p.name,
        designation:p.designation || p.role || "Job Seeker",
        jobType:p.jobType || p.notice || "30 Days",
        skills:Array.isArray(p.skills) ? p.skills.join(", ") : (p.skills || ""),
        location:p.location || "India", exp:Number(p.exp || p.experience || 0), isNew:true
      });
    }
  } catch(e) {}
  return list;
};
