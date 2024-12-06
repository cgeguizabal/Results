"strict";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const boxes = document.querySelector(".boxes-container");
    data.forEach((element) => {
      //Here I created a div container for the rest all the elements I'm gonna create
      const itemsDiv = document.createElement("div");
      itemsDiv.classList.add("box");

      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("categoryIcon");

      const numbers = document.createElement("div");
      numbers.classList.add("numberScore");

      //I created a img tag for the icon
      const icon = document.createElement("img");
      icon.classList.add("image");
      icon.src = element.icon;
      icon.alt = `${element.category}-icon`;

      // I created a span for the title category
      const titleCategory = document.createElement("span");
      titleCategory.classList.add("tittleCategory");
      titleCategory.textContent = element.category;

      //I created another span for score
      const hundred = document.createElement("span");
      hundred.classList.add("hundred");
      hundred.textContent = " / 100";

      const score = document.createElement("span");
      score.classList.add("score");
      score.textContent = `${element.score}  `;

      //I need to append all to the div I created and then all that to the container from html

      score.appendChild(hundred);
      categoryDiv.appendChild(icon);
      categoryDiv.appendChild(titleCategory);
      numbers.appendChild(score);

      itemsDiv.appendChild(categoryDiv);
      itemsDiv.appendChild(numbers);

      //Now I need to append the itemsDiv to the container(boxes)
      boxes.appendChild(itemsDiv);
    });
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });
