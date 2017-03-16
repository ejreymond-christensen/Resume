/* JS is divided and bundled following the sections of the resume.
Each section will have Objects and Arrays, then followed by functions to append
information onto the HTML.


-=Bio Section=-
- object.
@description - function to append on HTML. */
var bio = {
	name: "Elliot Reymond-Christensen",
	role: "Front-End Web Developer",
	contacts: {
		mobile: "915.352.7130",
		email: "elliotchristensen@gmail.com",
		github: "ejreymond-christensen",
		location: "Austin, Texas",
	},
	welcomeMessage: "Hello, my name is Elliot. I am a highly motivated professional looking to change career field into web development, currently taking classes with Udacity to perfect web development skills. Able to bring years of experience in an international setting to the table.",
	skills: ["HTML", "CSS", "JavaScript", "GIT"],
	biopic: "images/logo.jpg",
};

  var formattedbiopic= HTMLbioPic.replace("%data%", bio.biopic);
/* @description - function to append on HTML. */
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedName, formattedRole, formattedbiopic);
	$("#header").append(formattedwelcome);
	$("#topContacts").prepend(formattedemail, formattedmobile, formattedgithub, formattedLocation);
	$("#footerContacts").prepend(formattedemail, formattedmobile, formattedgithub, formattedLocation);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});
	}
};
bio.display();

/* -=Work Section=-
- Array.
@description - function to append on HTML. */
var work = {
	jobs: [{
			employer: "National Oilwell Varco",
			title: "Senior Purchaser, CPIM",
			location: "Stavanger, Norway",
			dates: "2013 - Oct. 2016",
			description: "Single point of contact for international vendors and all internal National Oilwell Varco facilities worldwide for the Planning and Procurement Department. Responsible for various product lines and ownership through the supply chain. Oversaw intercompany planning activities: transfer orders, supply chain and varied workload across the procurement and planning spectrum, with annual bookings of +25 million USD. Maintained inventory planning activities: stocking lines, forecasting and maintenance of item database. Group leader of the procurement planning department through mentoring and supporting with day to day technical and supply chain issues, training of new employees and the development of new departmental processes.",
		},
		{
			employer: "National Oilwell Varco",
			title: "Buyer/Planner, CPIM",
			location: "Houston, Texas",
			dates: "2008 - 2013",
			description: "Single point of contact between National Oilwell Varco facilities worldwide and maintained multicultural relations at a premium. Maintained heavy workload, averaged bookings of +27 million annually, and a high level of on time delivery. Coordinated with manufacturers and suppliers to provide on time delivery for customers as well as the forecasting group to adequately stock parts to fulfill future demand. Designed departmental processes for engineered to ordered items and item additions across multiple ERP platforms. Reviewed purchase price variances and determined if parts needed to be sourced internally or externally for quicker delivery and cost savings.",
		},
		{
			employer: "Conseil Régional D'Auvergne",
			title: "English Teacher",
			location: "Clermont-Ferrand, France",
			dates: "2007 - 2008",
			description: "Employed by the French Government to educate students in the English language. Awarded high remarks on government teacher evaluation for adaptation to the French teaching environment.",
		}
	]
};

/* @description - function to append on HTML. */
work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
	});
};
work.display();

/* -=Projects Section=-
- Array.
@description - function to append on HTML. */
var projects = {
	web: [{
			title: "Portfolio",
			dates: "Dec 2016",
			description: "Udacity Front-End Web Development project. Designed a responsive portfolio website with HTML, CSS and BootStrap.",
			images: ["images/portfolio0.png", "images/portfolio01.png"]
		},
		{
			title: "Animal Cards",
			dates: "Oct 2016",
			description: "Udacity Front-End Web Development project. Designed a simple HTML and CSS document to represent an animal trading card.",
			images: ["images/animal1.png", "images/animal2.png"]
		}
	]
};

/* @description - function to append on HTML. */
projects.display = function() {
	projects.web.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

		project.images.forEach(function(image) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
			$(".project-entry:last").append(formattedProjectImage);
		});
	});
};
projects.display();

/* -=Education Section=-
- Array.
* @description - function to append on HTML. */
var education = {
	schools: [{
			name: "University of Texas at El Paso",
			location: "El Paso, Texas",
			degree: "BA Multidisciplinary Studies",
			majors: ["Sociology", "Political Science", "Humanities"],
			dates: "2010 - 2014",
			url: "www.utep.edu"
		},
		{
			name: "Université Blaise Pascal",
			location: "Clermont-Ferrand, France",
			degree: "Diplôme Universitaire",
			majors: ["International Commerce", "French"],
			dates: "2007 - 2008",
			url: "www.univ-bpclermont.fr"
		},
		{
			name: "De Haagse Hoseschool",
			location: "The Hague, The Netherlands",
			degree: "Study Abroad",
			majors: ["European Studies"],
			dates: "2005 - 2006",
			url: "www.dehaagsehogeschool.nl"
		}
	],
	onlineCourses: [{
		title: "Nano-Degree: Front-End Web Development",
		school: "Udacity",
		dates: "2016 - 2017",
		url: "udacity.com"
	}]
};

/* @description - function to append on HTML. */
education.display = function() {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedSchoolURL = HTMLschoolURL.replace("%data%", school.url);
		$(".education-entry:last").append(formattedSchoolNameDegree, formattedSchoolDates, formattedSchoolLocation);

		school.majors.forEach(function(schoolMajors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolMajors);
			$(".education-entry:last").append(formattedSchoolMajor);

		});
		$(".education-entry:last").append(formattedSchoolURL);
	});

	education.onlineCourses.forEach(function(online) {
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
		var formattedonlineSchoolTitle = formattedonlineTitle + formattedonlineSchool;
		var formattedonlineDates = HTMLonlineDates.replace("%data%", online.dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
		$(".education-entry:last").append(formattedonlineSchoolTitle, formattedonlineDates, formattedOnlineURL);
	});
};
education.display();

/* -=Map Section=-
 * @description - adds button to change name.
 */
$("#mapDiv").append(googleMap);

/* -=Internationalization button Section=-
 * @description - adds button to change name.
 */
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
