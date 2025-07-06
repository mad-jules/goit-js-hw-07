const categories = document.querySelector("#categories");
const categoriesList = categories.children;
console.log("Number of categories:", categoriesList.length);

const normalizedNodeList = [...categoriesList];
normalizedNodeList.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  console.log("Category:", title);

  const items = element.querySelectorAll("ul > li");
  console.log("Elements:", items.length);
});
