const url = "https://fa-frontend-code-test.herokuapp.com/getdata";
const heroBannerSection = document.getElementById("heroBannerId");
const profilesSection = document.getElementById("profilesId");

const notFoundImg = "icons/notFound";

const fetchData = (url) => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let heroBanner = data.data.heroBanner;
      createHeroBanner(heroBanner);

      let profiles = data.data.profiles;
      createProfiles(profiles);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData(url);

const createHeroBanner = (heroBanner) => {
  heroBannerSection.innerHTML = `
        <div class="grid heroBanner">
            <article class="article">
            <h2>${heroBanner.title}</h2>
            <p>${heroBanner.paragraph}</p>
        </article>
        <video controls autoplay loop>
            <source src="${heroBanner.videoUrl}" type="video/mp4">
        </video>
        </div>
    `;
};

const createProfiles = (profiles) => {
  profiles.forEach((item) => {
    profilesSection.innerHTML += `
        <div class="card">
            <img src=${
              item.imgUrl
            } onError="this.onerror=null; this.src='/icons/noImage.jpeg';"/>
            <div class="profileInfo">
                <h3>${item.firstName + " " + item.lastName}</h3>
                <p>${item.expertise}</p>
            </div>
        </div>
        `;
  });
};
