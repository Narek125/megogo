function playerRender() {
  let parrentDiv = document.createElement("div");
  parrentDiv.className = "movie-player-info";

  // left //

  let leftDiv = document.createElement("div");
  leftDiv.className = "movie-player-info-left";

  let moviePlayerImage = document.createElement("img");
  moviePlayerImage.setAttribute("src", "./images/player/asd.webp");
  let movieName = document.createElement("div");
  movieName.className = "movie-name-blok";

  let movieNameTop = document.createElement("div");
  movieNameTop.className = "movie-name-blok-top";
  let movieNameBottom = document.createElement("div");
  movieNameBottom.className = "movie-name-blok-bottom";

  let movieNameTopName = document.createElement("p");
  movieNameTopName.innerHTML = mainContent[5].content[0].name;
  let movieNameTopRaiting = document.createElement("p");
  movieNameTopRaiting.innerHTML = `IMDB ${mainContent[5].content[0].imdbRaiting}, MGG ${mainContent[5].content[0].mggRaiting}`;
  let movieNameTopAge = document.createElement("p");
  movieNameTopAge.innerHTML = mainContent[5].content[0].age;

  let bigName = document.createElement("h3");
  bigName.className = "big-name";
  bigName.innerHTML = mainContent[5].content[0].name;

  movieNameTop.appendChild(movieNameTopName);
  movieNameTop.appendChild(movieNameTopRaiting);
  movieNameTop.appendChild(movieNameTopAge);
  movieNameBottom.appendChild(bigName);

  movieName.appendChild(movieNameTop);
  movieName.appendChild(movieNameBottom);

  leftDiv.appendChild(moviePlayerImage);
  leftDiv.appendChild(movieName);

  // right //

  let rightDiv = document.createElement("div");
  rightDiv.className = "movie-player-info-right";

  let addFav = document.createElement("div");
  addFav.className = "add-to-favorites";
  addFav.innerHTML = addSvg;

  let movieLike = document.createElement("div");
  movieLike.className = "like";
  movieLike.innerHTML = likeSvg;
  let movieDisLike = document.createElement("div");
  movieDisLike.className = "dislike";
  movieDisLike.innerHTML = dislikeSvg;

  rightDiv.appendChild(addFav);
  rightDiv.appendChild(movieLike);
  rightDiv.appendChild(movieDisLike);

  // end //

  parrentDiv.appendChild(leftDiv);
  parrentDiv.appendChild(rightDiv);

  document.querySelector(".video-player").appendChild(parrentDiv);
}

playerRender();

function playerBottomRender() {
  let section = document.createElement("section");
  section.className = "movie-bottom-info";

  let parrentDiv = document.createElement("div");
  parrentDiv.className = "container";

  let div = document.createElement("div");
  div.className = "movie-bottom-info-content";

  let categorie = document.createElement("div");
  let span = document.createElement("span");
  span.innerHTML = mainContent[5].content[0].year;
  categorie.appendChild(span);
  categorie.className = "movie-bottom-info-content-categorie";

  for (let i = 0; i < mainContent[5].content[0].categorie.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = mainContent[5].content[0].categorie[i];
    categorie.appendChild(span);
  }

  let quality = document.createElement("div");

  quality.className = "movie-bottom-info-content-quality";

  let qualitySpan = document.createElement("span");
  qualitySpan.innerHTML = "Full HD";
  let minuteSpan = document.createElement("span");
  minuteSpan.innerHTML = `${87} minutes`;

  quality.appendChild(qualitySpan);
  quality.appendChild(minuteSpan);

  let aboutMovie = document.createElement("div");
  aboutMovie.innerHTML = mainContent[5].content[0].about;

  aboutMovie.className = "movie-bottom-info-content-about";

  let share = document.createElement("div");
  share.className = "movie-bottom-info-content-share";

  let button1 = document.createElement("button");
  button1.className = "movie-info-facebook";
  button1.innerHTML = facebookSvg;

  let button2 = document.createElement("button");
  button2.className = "movie-info-twitter";
  button2.innerHTML = twitterSvg;

  share.appendChild(button1);
  share.appendChild(button2);

  let hr = document.createElement("hr");

  div.appendChild(categorie);
  div.appendChild(quality);
  div.appendChild(aboutMovie);
  div.appendChild(share);
  div.appendChild(hr);

  parrentDiv.appendChild(div);

  section.appendChild(parrentDiv);
  document.querySelector(".player-body").appendChild(section);
}

playerBottomRender();

function playerSupportInfo() {
  let section = document.createElement("div");
  section.className = "player-support-info container";

  let playerSupportInfoContent = document.createElement("div");
  playerSupportInfoContent.className = "player-support-info-content";

  let devicesHead = document.createElement("h4");
  devicesHead.innerHTML = "AVAILABLE ON DEVICES";

  let devices = document.createElement("div");
  devices.className = "avilable-devices";
  devices.appendChild(devicesHead);

  let devicesContent = document.createElement("div");
  devicesContent.className = "devices-content";

  for (let i = 0; i < mainContent[5].content[0].avilable.length; i++) {
    let device = document.createElement("div");
    let span = document.createElement("span");
    switch (mainContent[5].content[0].avilable[i]) {
      case "Android":
        device.innerHTML = androidSvg;
        span.innerHTML = mainContent[5].content[0].avilable[i];
        device.appendChild(span);
        break;
      case "iOS":
        device.innerHTML = appleSvg;
        span.innerHTML = mainContent[5].content[0].avilable[i];
        device.appendChild(span);
        break;
      case "Smart TV":
        device.innerHTML = tvSvg;
        span.innerHTML = mainContent[5].content[0].avilable[i];
        device.appendChild(span);
        break;
      case "Consoles":
        device.innerHTML = gameConsoleSvg;
        span.innerHTML = mainContent[5].content[0].avilable[i];
        device.appendChild(span);
        break;
      case "Media Players":
        device.innerHTML = mediaPlayerSvg;
        span.innerHTML = mainContent[5].content[0].avilable[i];
        device.appendChild(span);
        break;
      default:
        break;
    }

    devicesContent.appendChild(device);
  }
  devices.appendChild(devicesContent);

  let languages = document.createElement("div");
  languages.className = "translation";
  let languagesHead = document.createElement("h4");
  languagesHead.innerHTML = "TRANSLATION";
  languages.appendChild(languagesHead);
  let language = document.createElement("p");

  for (let j = 0; j < mainContent[5].content[0].translations.length; j++) {
    language.innerHTML += mainContent[5].content[0].translations[j] + ", ";
  }
  languages.appendChild(language);

  let subtitles = document.createElement("div");
  subtitles.className = "subtitles";
  let subtitlesHead = document.createElement("h4");
  subtitlesHead.innerHTML = "SUBTITLES";
  subtitles.appendChild(subtitlesHead);
  let p = document.createElement("p");

  for (let k = 0; k < mainContent[5].content[0].subtitles.length; k++) {
    p.innerHTML += mainContent[5].content[0].subtitles[k] + ", ";
  }
  subtitles.appendChild(p);

  playerSupportInfoContent.appendChild(devices);
  playerSupportInfoContent.appendChild(languages);
  playerSupportInfoContent.appendChild(subtitles);
  section.appendChild(playerSupportInfoContent);
  document.querySelector(".movie-bottom-info").appendChild(section);
}

playerSupportInfo();

let pos = 0;

function elseToWatch() {
  let section = document.createElement("section");
  let head = document.createElement("h2");
  let headA = document.createElement("a");
  headA.appendChild(head);
  head.setAttribute("class", "else-head container");
  head.innerHTML = "WHAT ELSE TO WATCH";
  section.appendChild(headA);
  let listItems = document.createElement("div");
  listItems.setAttribute("class", "else-items");
  let listScroll = document.createElement("div");
  listScroll.setAttribute("class", "else-scroll");
  listScroll.setAttribute("index", 1);

  mainContent[1].index = 0;
  if (mainContent[1].content.length > 4) {
    let btns = document.createElement("div");
    btns.setAttribute("class", "controls");

    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");

    btn1.setAttribute("class", "backward");
    btn2.setAttribute("class", "forward");
    btn1.setAttribute("index", 1);
    btn2.setAttribute("index", 1);
    btn1.setAttribute("onclick", "elseMove(this, 1)");
    btn2.setAttribute("onclick", "elseMove(this, -1)");
    btn1.setAttribute("id", "disable");
    btn2.innerHTML = arrowRightSvg;
    btn1.innerHTML = arrowLeftSvg;

    btns.appendChild(btn1);
    btns.appendChild(btn2);
    section.appendChild(btns);
  }

  let content = mainContent[1].content;
  for (let j = 0; j < mainContent[1].content.length; j++) {
    let item = document.createElement("div");
    item.setAttribute("class", "else-item");
    item.style.left = `${pos * 220}px`;
    pos++;

    let hoverLink = document.createElement("a");
    hoverLink.setAttribute("href", "player.html");

    let hover = document.createElement("div");
    hover.setAttribute("class", "hover-div");

    let hoverAdd = document.createElement("div");
    hoverAdd.setAttribute("class", "add");
    hoverAdd.innerHTML = addSvg;

    let hoverPlay = document.createElement("div");
    hoverPlay.setAttribute("class", "play");
    let hoverPlaySvg = document.createElement("div");
    let hoverPlaySpan = document.createElement("span");

    hoverPlaySvg.innerHTML = playSvg;
    hoverPlaySpan.innerHTML = "Watch";

    hoverPlay.appendChild(hoverPlaySvg);
    hoverPlay.appendChild(hoverPlaySpan);
    hover.appendChild(hoverAdd);
    hover.appendChild(hoverPlay);
    hoverLink.appendChild(hover);

    let moviePlayerImage = document.createElement("img");
    moviePlayerImage.setAttribute("src", content[j].image);
    moviePlayerImage.style.width = "220px";

    item.appendChild(hoverLink);
    item.appendChild(moviePlayerImage);

    let itemName = document.createElement("h3");
    itemName.innerHTML = content[j].name;

    item.appendChild(itemName);

    let info = document.createElement("div");
    info.setAttribute("class", "info");

    let infoYear = document.createElement("span");
    infoYear.innerHTML = `${content[j].year}, `;

    let infoCategorie = document.createElement("span");
    infoCategorie.innerHTML = content[j].categorie;

    info.appendChild(infoYear);
    info.appendChild(infoCategorie);
    item.appendChild(info);

    let itemType = document.createElement("div");

    switch (content[j].type) {
      case "promo":
        itemType.setAttribute("class", "promo");

        let promoSpan = document.createElement("span");
        promoSpan.innerHTML = "PROMO";

        let promoP = document.createElement("p");
        promoP.innerHTML = "TV & MOVIES";

        itemType.appendChild(promoSpan);
        itemType.appendChild(promoP);

        break;
      case "free":
        itemType.setAttribute("class", "free");
        itemType.innerHTML = "FREE";

        break;
      case "purchase":
        itemType.setAttribute("class", "purchase");
        itemType.innerHTML = "PURCHASE";

        break;
      default:
        break;
    }
    item.appendChild(itemType);
    listScroll.appendChild(item);
  }
  pos = 0;
  listItems.appendChild(listScroll);
  section.appendChild(listItems);
  document.querySelector(".player-body").appendChild(section);
}

elseToWatch();

let position = 1000;

function elseMove(a, n) {
  let btnIndex = a.getAttribute("index");
  let listScroll = document.querySelectorAll(".else-scroll");

  listScroll.forEach((e) => {
    if (btnIndex == e.getAttribute("index")) {
      listScroll = e;
    }
  });

  mainContent[btnIndex].index += n;
  position = mainContent[btnIndex].index * 1000;

  let pos =
    mainContent[btnIndex].content.length + mainContent[btnIndex].index * 5;

  if (pos > 4) {
    listScroll.style.transform = `translateX(${position}px)`;
  } else {
    listScroll.style.transform = `translateX(${position + 1000 - pos * 220}px)`;
    pos += mainContent[btnIndex].index * 5 * -1;
    a.setAttribute("id", "disable");
  }

  if (pos - 4 === 0 || pos === mainContent[btnIndex].content.length) {
    a.setAttribute("id", "disable");
  } else {
    for (let k = 0; k < document.querySelectorAll("#disable").length; k++) {
      if (
        document.querySelectorAll("#disable")[k].getAttribute("index") ==
        a.getAttribute("index")
      ) {
        document.querySelectorAll("#disable")[k].removeAttribute("id");
      }
    }
  }
}
