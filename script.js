const url = 'https://fa-frontend-code-test.herokuapp.com/getdata'
const heroBannerSection = document.getElementById("heroBannerId")
const profilesSection = document.getElementById("profilesId")

// divide code into functions ok! 
// style with flexbox 
// responsive
// publish on github 

const fetchData = (url) => {
	fetch(url)
	.then((res) => {
		return res.json()
	})
	.then((data) => {
		let heroBanner = data.data.heroBanner 
		createHeroBanner(heroBanner)
	
		let profiles = data.data.profiles; 
		createProfiles(profiles)
	})
	.catch(function(error) {
		console.log(error);
	});
}

fetchData(url)


const createHeroBanner = (heroBanner) => {
	heroBannerSection.innerHTML = 
	`
		<div class="grid heroBanner">
			<article class="article">
			<h2>${heroBanner.title}</h2>
			<p>${heroBanner.paragraph}</p>
		</article>
		<video controls autoplay loop>
			<source src="${heroBanner.videoUrl}" type="video/mp4">
		</video>
		</div>

	`
}

const createProfiles = (profiles) => {
	profiles.forEach((item) => {
		profilesSection.innerHTML += 
		`
			<div class="card">
			<img src=${item.imgUrl} />
			<div class="profileInfo">
				<h3>${item.firstName + " " + item.lastName}</h3>
				<p>${item.expertise}</p>
			</div>
		</div>
		`
	})
}