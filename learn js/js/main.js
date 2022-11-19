let inputData = document.getElementById("input-data");
let action = document.querySelectorAll(".action span");
let results = document.querySelector(".result > span");
action.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
      checkItems();
    }
    if (e.target.classList.contains("add")) {
      addItems();
    }
    if (e.target.classList.contains("delete")) {
      deleteItems();
    }
    if (e.target.classList.contains("show")) {
      showItems();
    }
    if (e.target.classList.contains("clear")) {
      clearItems();
    }
  });
});

function checkInput() {
  if (inputData.value == "") {
    results.innerHTML = "input is empty";
    inputData.focus();
  }
}

function checkItems() {
  if (inputData.value !== "") {
    if (localStorage.getItem(inputData.value)) {
      results.innerHTML = `result is <span>found</span>`;
    } else {
      results.innerHTML = `result is <span>not found</span>`;
    }
  } else {
    checkInput();
  }
}

function addItems() {
  if (inputData.value != "") {
    if (localStorage.getItem(inputData.value)) {
      results.innerHTML = `<span>${inputData.value}</span> is added before`;
      inputData.value = ""
      inputData.focus()
    } else {
      localStorage.setItem(inputData.value, "test");
      results.innerHTML = ` <span>${inputData.value}</span> is added`;
      inputData.value = ""
      inputData.focus()
    }
  } else {
    checkInput();
  }
}

function deleteItems() {
  if (inputData.value !== "") {
    if (localStorage.getItem(inputData.value)) {
      localStorage.removeItem(inputData.value);
      results.innerHTML = ` <span>${inputData.value}</span> is deleted`;
      inputData.value = ""
      inputData.focus()
    } else {
      results.innerHTML = `<span>${inputData.value}</span> is not found`;
      inputData.value = ""
      inputData.focus()
    }
  } else {
    checkInput();
  }
}
function showItems() {
 if(localStorage.length){
  results.innerHTML =""
  for(let[key,value] of Object.entries(localStorage)){
results.innerHTML +=`<span style="display:block;text-align: center;">${key}</span>`
  }
 }else{
results.innerHTML=`not found item in localStorage`
 }
}
function clearItems(){
  localStorage.clear()
  results.innerHTML=`all items in localStorage is cleared`
}
