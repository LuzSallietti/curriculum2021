const linkedin_btn = document.querySelector("#linkedinBtn");
const gitHub_btn = document.querySelector("#gitHubBtn");

linkedin_btn.addEventListener("click", ()=> {
    window.open("https://www.linkedin.com/in/luzsallietti/");
})
gitHub_btn.addEventListener("click", () => {
    window.open("https://github.com/LuzSallietti");
})

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

//fade in/out animation
const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);
  
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("opacity-1", "transition-opacity","duration-1000");
      } else {
        entry.target.classList.remove("opacity-1");
        entry.target.classList.add("opacity-0");
      }
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });

  // toggle the menu
  document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

  