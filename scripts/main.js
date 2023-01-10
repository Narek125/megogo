// Render //

// Slider

function sliderRender() {
  let slides = document.createElement("div");
  let dots = document.createElement("div");

  dots.setAttribute("class", "dots");
  dots.setAttribute("style", "text-align:center");
  slides.setAttribute("class", "slides");

  for (let i = 0; i < slider.length; i++) {
    let slideImageParrent = document.createElement("div");
    slideImageParrent.setAttribute("class", `slide slide-${i + 1}`);

    let slideImage = document.createElement("img");
    slideImage.setAttribute("src", `${slider[i].image}.webp`);

    let dot = document.createElement("span");
    dot.setAttribute("class", "dot");
    dot.setAttribute("onclick", `currentSlide(${i + 1})`);
    dots.appendChild(dot);

    slideImageParrent.appendChild(slideImage);
    slides.appendChild(slideImageParrent);

    if (slider[i].type == "promo") {
      let promo = document.createElement("div");
      promo.className = "slider-promo";
      promo.innerHTML = "PROMO";
      slideImageParrent.appendChild(promo);
    }
  }

  let nextBtn = document.createElement("a");
  nextBtn.setAttribute("class", "next");
  nextBtn.setAttribute("onclick", "plusSlides(1)");
  nextBtn.innerHTML = `❯`;

  let prevBtn = document.createElement("a");
  prevBtn.setAttribute("class", "prev");
  prevBtn.setAttribute("onclick", "plusSlides(-1)");
  prevBtn.innerHTML = `❮`;

  slides.appendChild(nextBtn);
  slides.appendChild(prevBtn);

  slides.appendChild(dots);

  document.querySelector(".slider-section").appendChild(slides);
}

sliderRender();

// Slider List

function sliderListRender() {
  let sliderListDiv = document.createElement("div");
  sliderListDiv.setAttribute("class", "slider-list__items container");

  for (let i = 0; i < sliderList.length; i++) {
    let moviePlayerImage = document.createElement("img");
    moviePlayerImage.setAttribute("src", sliderList[i].image);

    sliderListDiv.appendChild(moviePlayerImage);
  }
  document.querySelector(".slider-list-section").appendChild(sliderListDiv);
}

sliderListRender();

// TV list

function tvListRender() {
  let tvListSection = document.querySelector(".now-on-tv-section");
  let tvListItems = document.createElement("div");
  let scrollDiv = document.createElement("div");
  let content = mainContent[0].content;
  let a = 0;

  let tvListHead = document.createElement("h2");
  tvListHead.setAttribute("class", "list-head container");

  let tvListHeadA = document.createElement("a");
  tvListHeadA.setAttribute("href", "#");
  tvListHeadA.innerHTML = mainContent[0].head;

  tvListHead.appendChild(tvListHeadA);
  tvListSection.appendChild(tvListHead);

  scrollDiv.setAttribute("class", "scrollDiv");
  tvListItems.setAttribute("class", "now-on-tv-items container");

  for (let i = 0; i < content.length; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "now-on-tv-item");

    let itemImageContainer = document.createElement("div");
    itemImageContainer.setAttribute("class", "item-image");

    if (content[i].recorded) {
      let itemImageSpan = document.createElement("span");
      itemImageSpan.innerHTML = "RECORDED";
      itemImageContainer.appendChild(itemImageSpan);
    }

    let itemImage = document.createElement("img");
    itemImage.setAttribute("src", content[i].image);

    itemImageContainer.appendChild(itemImage);

    let itemName = document.createElement("h3");
    itemName.innerHTML = content[i].name;

    let date = document.createElement("p");
    date.setAttribute("class", "date");
    date.innerHTML = content[i].date;

    let itemType = document.createElement("div");

    switch (content[i].type) {
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

    item.style.left = `${a}px`;
    a += 320;

    item.appendChild(itemImageContainer);
    item.appendChild(itemName);
    item.appendChild(date);
    item.appendChild(itemType);

    scrollDiv.appendChild(item);
  }

  if (scrollDiv.childElementCount > 3) {
    let controls = document.createElement("div");
    controls.setAttribute("class", "controls");

    let forwardBtn = document.createElement("button");
    forwardBtn.setAttribute("class", "forwardBtn");
    forwardBtn.setAttribute("onclick", "move(this, -1)");
    forwardBtn.innerHTML = arrowRightSvg;

    let backwardBtn = document.createElement("button");
    backwardBtn.setAttribute("class", "backwardBtn");
    backwardBtn.setAttribute("onclick", "move(this, 1)");
    backwardBtn.innerHTML = arrowLeftSvg;

    controls.appendChild(backwardBtn);
    controls.appendChild(forwardBtn);

    tvListSection.appendChild(controls);
  }
  tvListItems.appendChild(scrollDiv);
  tvListSection.appendChild(tvListItems);
}

tvListRender();

let pos = 0;

// Main Content

function render() {
  for (let i = 1; i < mainContent.length - 1; i++) {
    let section = document.createElement("section");

    let head = document.createElement("h2");
    head.setAttribute("class", "list-head container");
    head.innerHTML = mainContent[i].head;

    let headA = document.createElement("a");
    headA.appendChild(head);

    section.appendChild(headA);

    let listItems = document.createElement("div");
    listItems.setAttribute("class", "list-items container");

    let listScroll = document.createElement("div");
    listScroll.setAttribute("class", "list-scroll");
    listScroll.setAttribute("index", i);

    mainContent[i].index = 0;
    if (mainContent[i].content.length > 5) {
      let btns = document.createElement("div");
      btns.setAttribute("class", "controls");

      let btn1 = document.createElement("button");
      btn1.setAttribute("class", "backwardBtn");
      btn1.setAttribute("index", i);
      btn1.setAttribute("onclick", "move(this, 1)");
      btn1.setAttribute("id", "disable");
      btn1.innerHTML = arrowLeftSvg;

      let btn2 = document.createElement("button");
      btn2.setAttribute("class", "forwardBtn");
      btn2.setAttribute("index", i);
      btn2.setAttribute("onclick", "move(this, -1)");
      btn2.innerHTML = arrowRightSvg;

      btns.appendChild(btn1);
      btns.appendChild(btn2);
      section.appendChild(btns);
    }

    let content = mainContent[i].content;
    for (let j = 0; j < mainContent[i].content.length; j++) {
      let item = document.createElement("div");
      item.setAttribute("class", "list-item");
      item.style.left = `${pos * 192}px`;
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
      moviePlayerImage.style.width = "172px";

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
    document.querySelector("body").appendChild(section);
  }
}

render();

// Top Five

function topFiveRender(n) {
  let section = document.querySelector(".top-five-section");

  let content = document.createElement("div");
  content.className = "container";

  let rightContent = document.createElement("div");
  rightContent.className = "top-five-content-right";

  let mainContent = document.createElement("div");
  mainContent.className = "top-five-content";

  let leftContent = document.createElement("div");
  leftContent.className = "top-five-content-poster card blastoise";

  let span = document.createElement("span");
  span.setAttribute("class", "inner-card");

  let posterContainer = document.createElement("div");
  posterContainer.setAttribute("class", "top-five-content-poster-image glare");

  span.appendChild(posterContainer);
  leftContent.appendChild(span);

  mainContent.appendChild(leftContent);

  let head = document.createElement("h1");
  head.innerHTML = "TOP 5";

  let menuUl = document.createElement("ul");

  for (let k = 0; k < topFive.length; k++) {
    let menuLi = document.createElement("li");
    menuLi.innerHTML = topFive[k].name;

    let menuA = document.createElement("a");
    menuA.setAttribute("index", k);
    menuA.setAttribute("onclick", "topFiveChange(this)");

    menuA.appendChild(menuLi);
    menuUl.appendChild(menuA);
  }

  let topFiveHead = document.createElement("div");
  topFiveHead.className = "top-five-head";

  topFiveHead.appendChild(head);
  topFiveHead.appendChild(menuUl);
  content.appendChild(topFiveHead);
  content.appendChild(mainContent);

  section.appendChild(content);
  document.querySelector("body").appendChild(section);

  for (let j = 0; j < 5; j++) {
    let contentInfo = document.createElement("div");
    contentInfo.className = "top-five-content-info";

    // /////////  Left  //////////////

    let contentInfoName = document.createElement("div");
    contentInfoName.className = "top-five-info-name";

    let name = document.createElement("h3");
    name.innerHTML = topFive[n].content[j].name;

    contentInfoName.appendChild(name);

    let contentInfoNameAbout = document.createElement("div");
    contentInfoNameAbout.className = "about";

    let contentInfoYear = document.createElement("p");
    contentInfoYear.innerHTML = topFive[n].content[j].year;

    let contentInfoCategorie = document.createElement("p");
    contentInfoCategorie.innerHTML = topFive[n].content[j].categorie;

    contentInfoNameAbout.appendChild(contentInfoYear);
    contentInfoNameAbout.appendChild(contentInfoCategorie);
    contentInfo.appendChild(contentInfoName);
    contentInfoName.appendChild(contentInfoNameAbout);

    // ////////  Right  //////////////

    let contentInfoRaiting = document.createElement("div");
    contentInfoRaiting.className = "raiting";

    let contentInfoImdb = document.createElement("div");
    contentInfoImdb.className = "imdb";

    if (topFive[n].content[j].imdbRaiting) {
      let imdbRait = document.createElement("h3");
      let imdb = document.createElement("p");
      imdb.innerHTML = "IMDb";
      imdbRait.innerHTML = topFive[n].content[j].imdbRaiting;
      contentInfoImdb.appendChild(imdbRait);
      contentInfoImdb.appendChild(imdb);
      contentInfoRaiting.appendChild(contentInfoImdb);
    }

    let contentInfoMgg = document.createElement("div");
    contentInfoMgg.className = "mgg";
    if (topFive[n].content[j].mggRaiting) {
      let mggRait = document.createElement("h3");
      let mgg = document.createElement("p");
      mgg.innerHTML = "MGG";
      mggRait.innerHTML = topFive[n].content[j].mggRaiting;
      contentInfoMgg.appendChild(mggRait);
      contentInfoMgg.appendChild(mgg);
      contentInfoRaiting.appendChild(contentInfoMgg);
    }

    contentInfo.appendChild(contentInfoRaiting);
    rightContent.appendChild(contentInfo);
  }
  mainContent.appendChild(rightContent);
}

topFiveRender(0);

// Render End //

// Slider Control //

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.querySelector(".slider-section").addEventListener("mouseenter", () => {
  let btns = document.querySelectorAll(".slider-section a");
  btns[0].style.display = "block";
  btns[1].style.display = "block";
});

document.querySelector(".slider-section").addEventListener("mouseleave", () => {
  let btns = document.querySelectorAll(".slider-section a");
  btns[0].style.display = "none";
  btns[1].style.display = "none";
});

// Slider Control End //

// Main Content Control //

let position = 960;

function move(a, n) {
  let btnIndex = a.getAttribute("index");
  let listScroll = document.querySelectorAll(".list-scroll")[btnIndex - 1];

  mainContent[btnIndex].index += n;
  position = mainContent[btnIndex].index * 960;

  let pos =
    mainContent[btnIndex].content.length + mainContent[btnIndex].index * 5;

  if (pos > 4) {
    listScroll.style.transform = `translateX(${position}px)`;
  } else {
    listScroll.style.transform = `translateX(${position + 960 - pos * 192}px)`;
    pos += mainContent[btnIndex].index * 5 * -1;
    a.setAttribute("id", "disable");
  }

  if (pos - 5 === 0 || pos === mainContent[btnIndex].content.length) {
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

// Main Content Control End //

// Navbar Search Activate //

document.querySelector(".search").onclick = () => {
  document.querySelector(".search").className = "search-active";
  document
    .querySelector(".search-active input")
    .setAttribute("class", "input-active");
  document.querySelector(".search-active h5").style.display = "block";
};

document.querySelector("nav").addEventListener("mousedown", () => {
  document.querySelector(".search-active").className = "search";
  document.querySelector(".input-active").removeAttribute("class");
  document.querySelector(".search h5").style.display = "none";
});

// Navbar Search Activate //

// Top Five Control //

function topFiveChange(a) {
  document.querySelector(".top-five-section .container").remove();
  topFiveRender(a.getAttribute("index"));
  select(a.getAttribute("index"));

  document
    .querySelector("body")
    .insertBefore(
      document.querySelector(".top-five-section"),
      document.querySelectorAll("section")[9]
    );
  document.querySelectorAll(".top-five-head ul a")[
    a.getAttribute("index")
  ].style.borderBottom = "2px solid #f30";
  document.querySelectorAll(".top-five-head ul a")[
    a.getAttribute("index")
  ].style.color = "#333";

  document
    .querySelector("body")
    .insertBefore(
      document.querySelector(".footer-top"),
      document.querySelectorAll("section")[11]
    );

  document
    .querySelector("body")
    .insertBefore(
      document.querySelector(".top-five-section"),
      document.querySelectorAll("section")[10]
    );
}

topFiveChange(document.querySelector(".top-five-head ul a"));

function select(param) {
  let o = document.querySelectorAll(".top-five-content-info");
  o.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      o.forEach((elem, index) => {
        if (e.target === elem) {
          if (document.querySelector(".top-five-active")) {
            document.querySelector(".top-five-active").className =
              "top-five-content-info";
          }
          elem.classList.add("top-five-active");
          document.querySelector(
            ".inner-card"
          ).style.background = `url(./images/top5/${topFive[param].content[index].image}.webp)`;
          document.querySelector(
            ".inner-card"
          ).style.backgroundSize = `contain`;
        }
      });
    });
  });
}

// Top Five Control End //

// //////////////////////////////////////////////////////////////////
document
  .querySelector("body")
  .insertBefore(
    document.querySelector(".footer-top"),
    document.querySelectorAll("section")[
      document.querySelectorAll("section").length - 1
    ]
  );

document
  .querySelector("body")
  .insertBefore(
    document.querySelector("hr"),
    document.querySelectorAll("section")[10]
  );
document
  .querySelector("body")
  .insertBefore(
    document.querySelector(".subscription"),
    document.querySelectorAll("section")[10]
  );

document
  .querySelector("body")
  .insertBefore(
    document.querySelector(".top-five-section"),
    document.querySelectorAll("section")[10]
  );

window.onload = () => {
  select(0);
  document
    .querySelector(".top-five-content-poster-image")
    .setAttribute("src", `./images/top5/${topFive[0].content[0].image}.webp`);
};

// //////////////////////////////////////////////////////////////////

let calculateAngle = function (e, item, parent) {
  let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
  if (parent.getAttribute("data-filter-color") !== null) {
    dropShadowColor = parent.getAttribute("data-filter-color");
  }

  let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
  let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

  let halfWidth = item.getBoundingClientRect().width / 2;
  let halfHeight = item.getBoundingClientRect().height / 2;

  let calcAngleX = (x - halfWidth) / 6;
  let calcAngleY = (y - halfHeight) / 14;

  let gX = (1 - x / (halfWidth * 2)) * 100;
  let gY = (1 - y / (halfHeight * 2)) * 100;

  item.querySelector(
    ".glare"
  ).style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;

  parent.style.perspective = `${halfWidth * 6}px`;
  item.style.perspective = `${halfWidth * 6}px`;

  item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
};

document.querySelectorAll(".card").forEach(function (item) {
  item.addEventListener("mouseenter", function (e) {
    calculateAngle(e, this.querySelector(".inner-card"), this);
  });

  item.addEventListener("mousemove", function (e) {
    calculateAngle(e, this.querySelector(".inner-card"), this);
  });

  item.addEventListener("mouseleave", function (e) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
    if (item.getAttribute("data-filter-color") !== null) {
      dropShadowColor = item.getAttribute("data-filter-color");
    }
    item.querySelector(
      ".inner-card"
    ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
    item.querySelector(
      ".inner-card"
    ).style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
  });
});
