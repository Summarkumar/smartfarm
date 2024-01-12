// Import the Firebase Realtime Database SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  child,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXBggIY4I3UHhaJE8piHCOFbvOjpwfA6Y",
  authDomain: "smart-farming-v1-873a0.firebaseapp.com",
  projectId: "smart-farming-v1-873a0",
  storageBucket: "smart-farming-v1-873a0.appspot.com",
  messagingSenderId: "573900733046",
  appId: "1:573900733046:web:8b6803a4048da9fb367d57",
  measurementId: "G-XN7NK520B5",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference the database node
const dataRef_params_humid = ref(database, "param/humid");
const dataRef_params_soil_mois = ref(database, "param/soil_mois");
const dataRef_params_temp = ref(database, "param/temp");
const dataRef_params_wat_level = ref(database, "param/wat_level");

let curr_electric_fence;
let curr_fertilizer;
let curr_lights;
let curr_water_pump;

const toggleButton1 = document.getElementById("toggleButton1");
const toggleButton2 = document.getElementById("toggleButton2");
const toggleButton3 = document.getElementById("toggleButton3");
const toggleButton4 = document.getElementById("toggleButton4");

// Function to get data from database
function getData() {
  onValue(dataRef_params_humid, (snapshot) => {
    const humidity = snapshot.val();
    console.log(humidity);
    const dataDisplay1 = document.getElementById("dataDisplay1");
    dataDisplay1.innerHTML = JSON.stringify(humidity, null, 2);
  });

  onValue(dataRef_params_soil_mois, (snapshot) => {
    const soil_moisture = snapshot.val();
    console.log(soil_moisture);
    const dataDisplay2 = document.getElementById("dataDisplay2");
    dataDisplay2.innerHTML = JSON.stringify(soil_moisture, null, 2);
  });

  onValue(dataRef_params_temp, (snapshot) => {
    const temperature = snapshot.val();
    console.log(temperature);
    const dataDisplay3 = document.getElementById("dataDisplay3");
    dataDisplay3.innerHTML = JSON.stringify(temperature, null, 2);
  });

  onValue(dataRef_params_wat_level, (snapshot) => {
    const water_level = snapshot.val();
    console.log(water_level);
    const dataDisplay4 = document.getElementById("dataDisplay4");
    dataDisplay4.innerHTML = JSON.stringify(water_level, null, 2);
  });

  document.getElementById("toggleButton1").checked = curr_electric_fence;
  document.getElementById("toggleButton2").checked = curr_fertilizer;
  document.getElementById("toggleButton3").checked = curr_lights;
  document.getElementById("toggleButton4").checked = curr_water_pump;
}

// Function to toggle data
const dataRef = ref(database, "controls");

function toggleData() {
  toggleButton1.addEventListener("change", function (event) {
    curr_electric_fence = !curr_electric_fence;
    console.log(
      "Electric fence switch:",
      event.target.checked,
      curr_electric_fence
    );
    update(dataRef, { elec_fence: curr_electric_fence });
  });
  toggleButton2.addEventListener("change", function (event) {
    curr_fertilizer = !curr_fertilizer;
    console.log("Fertilizer switch:", event.target.checked, curr_fertilizer);
    update(dataRef, { ferti: curr_fertilizer });
  });
  toggleButton3.addEventListener("change", function (event) {
    curr_lights = !curr_lights;
    console.log("Lights switch:", event.target.checked, curr_lights);
    update(dataRef, { lights: curr_lights });
  });
  toggleButton4.addEventListener("change", function (event) {
    curr_water_pump = !curr_water_pump;
    console.log("Water pump switch:", event.target.checked, curr_water_pump);
    update(dataRef, { water_pump: curr_water_pump });
  });
}

// Update toggle button states
document.getElementById("toggleButton1").checked = curr_electric_fence;
document.getElementById("toggleButton2").checked = curr_fertilizer;
document.getElementById("toggleButton3").checked = curr_lights;
document.getElementById("toggleButton4").checked = curr_water_pump;

// Get initial data
getData();

// Toggle data on button click
toggleData();
