let tooltip = document.querySelector("#tooltip");
let chapel = document.querySelector("#chapel");
let flagpole = document.querySelector("#flagPole");
let obelisk = document.querySelector("#obelisk");
let pool = document.querySelector("#pool");
let charlie = document.querySelector("#charliebldg");
let court = document.querySelector("#court");
let tennis = document.querySelector("#tennis");
let oval = document.querySelector("#oval");
let freedomPark = document.querySelector("#freedomPark");
let lagoon = document.querySelector("#lagoon");
let amphitheater = document.querySelector("#amphitheater");
let pasigRiver = document.querySelector("#pasigRiver");
let gym = document.querySelector("#gymnasium");
let grandstand = document.querySelector("#grandstand");
let nallrc = document.querySelector("#nallrc");
let linearPark = document.querySelector("#linearPark");
let maingate = document.querySelector("#maingate");
let pylon = document.querySelector("#pylon");

const addTooltipListener = (areaHover, imgSrc, title, description) => {
  areaHover.addEventListener("mouseover", (event) => {
    tooltip.style.display = "block";
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + "px";
    tooltip.innerHTML = `
      <div class="centerImg">
        <img src="${imgSrc}" width="250px" height="150">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    `;
  });

  areaHover.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });
};

addTooltipListener(
  chapel,
  "img/chapel.jpg",
  "Chapel",
  "PUP Chapel,  serves as a spiritual center and provides a peaceful environment for students, faculty, and staff to engage in religious activities and find solace."
);

addTooltipListener(
  flagpole,
  "img/flagpole.jpg",
  "Flag Pole",
  "The PUP flag pole is a prominent feature within the campus of the Polytechnic University of the Philippines. It stands tall as a symbol of pride, unity, and national identity. "
);

addTooltipListener(
  obelisk,
  "img/obelisk.jpg",
  "Obelisk",
  "The PUP obelisk is a prominent monument at the Polytechnic University of the Philippines campus, symbolizing knowledge and academic excellence. "
);

addTooltipListener(
  pool,
  "img/pool.jpg",
  "Swimming Pool",
  "The PUP Pool is a recreational facility located within the campus of the Polytechnic University of the Philippines. It offers a refreshing escape for students and faculty, providing a space for relaxation, exercise, and social interaction. "
);

addTooltipListener(
  charlie,
  "img/charlie.jpg",
  "Charlie Building",
  "The Charlie Building serves as a hub of learning and intellectual activities, providing students with a conducive environment for lectures, discussions, and academic pursuits."
);

addTooltipListener(
  court,
  "img/court.jpg",
  "Court",
  "The PUP Court is a designated outdoor space within the Polytechnic University of the Philippines campus, often used for sports and recreational activities. It is a large open area with paved grounds and usually marked with lines for various sports like basketball, volleyball, and badminton."
);

addTooltipListener(
  tennis,
  "img/tennis.jpg",
  "Tennis",
  "The PUP Tennis Court is a dedicated sports facility within the Polytechnic University of the Philippines campus. It provides a space for students, faculty, and staff to play tennis and engage in recreational sports"
);

addTooltipListener(
  oval,
  "img/oval.jpg",
  "Oval",
  "The PUP Oval is a prominent feature of the Polytechnic University of the Philippines campus, serving as a dedicated track and field facility."
);

addTooltipListener(
  freedomPark,
  "img/freedompark.jpg",
  "Freedom Park",
  "PUP Freedom Park is a notable outdoor space located within the Polytechnic University of the Philippines campus. It serves as a recreational area where students, faculty, and staff can relax, gather, and engage in various leisure activities. "
);

addTooltipListener(
  lagoon,
  "img/lagoon.jpg",
  "Lagoon",
  "The PUP Lagoon is a picturesque water feature within the Polytechnic University of the Philippines campus. It is a tranquil oasis where students, faculty, and visitors can enjoy the serene beauty of a man-made lake surrounded by lush landscapes. "
);

addTooltipListener(
  amphitheater,
  "img/amphitheater.jpg",
  "AmphiTheater",
  "The PUP Amphitheater is a notable architectural feature within the campus of the Polytechnic University of the Philippines. It is an outdoor venue characterized by tiered seating and a central stage, designed to accommodate performances, lectures, and other cultural events."
);

addTooltipListener(
  pasigRiver,
  "img/pasigriver.jpg",
  "Pasig River",
  "Pasig River is a significant waterway in the Philippines that runs through Metro Manila, including areas near PUP's location in Sta. Mesa, Manila."
);

addTooltipListener(
  gym,
  "img/gym.jpg",
  "Gymnasium",
  "The PUP Gymnasium is a prominent sports facility located within the Polytechnic University of the Philippines campus. It is a spacious indoor arena designed to host various sporting events, competitions, and recreational activities."
);

addTooltipListener(
  grandstand,
  "img/grandstand.jpg",
  "Grand Stand",
  "The PUP Grand Stand  is a large seating area with multiple tiers, designed to accommodate a significant number of spectators during sporting events and ceremonies."
);

addTooltipListener(
  nallrc,
  "img/nallrc.jpg",
  "Ninoy Aquino Library and Learning Resources Center",
  'Named in honor of former Philippine senator Benigno "Ninoy" Aquino Jr., it serves as the main library and information hub for students, faculty, and researchers.'
);

addTooltipListener(
  linearPark,
  "img/linearpark.jpg",
  "Linear Park",
  "The PUP Linear Park a scenic and recreational area within the university campus, offering a pleasant environment for walking, jogging, and enjoying nature."
);

addTooltipListener(
  maingate,
  "img/maingate.jpg",
  "Main Gate",
  "The PUP Main Gate is the primary entrance and exit point of the Polytechnic University of the Philippines campus. It serves as the main access point for students, faculty, staff, and visitors."
);

addTooltipListener(
  pylon,
  "img/pylon.jpg",
  "PUP Pylon",
  "The Pylon originally stood for the true, the good and the beautiful. The Triad of pillars may also stand for wisdom, strength and beauty because there should be wisdom to contrive, strength to support and beauty to adorn any great or important undertaking. Since 1987, however, the Pylon came to symbolized truth, excellence and wisdom."
);

