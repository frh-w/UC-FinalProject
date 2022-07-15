let name = prompt("Name:");
let email = prompt("Email:");
let phone_num = prompt("Phone number:");

function myFunction(name) {
  localStorage.setItem("Name: ", name);
  console.log(name, email);
}
let names = [];
names.push(DgetItem.name);
const workshops = [
  {
    workshop: "Pasta",
    days: ["Sun", "Tue", "Thurs"],
    price: 50,
  },
  {
    workshop: "Cake",
    days: ["Sun", "Mon", "Tues"],
    price: 35,
  },
];
workshops.forEach((workshop) => {
  document.getElementById("container").innerHTML += `<div>
    <h1>${workshop.workshop}</h1>
    <h2>Days:${workshop.days}<h2>
    <h3>Price:${workshop.price}<h3>

    </div>
    `;
});
container.style.justifycontent = "Space-even";
container.style.display = "flex";
