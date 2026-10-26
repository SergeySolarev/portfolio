(function () {
  var root = document.documentElement;
  var btn = document.getElementById("lang");
  var saved = localStorage.getItem("lang");
  var initial = saved || ((navigator.language || "ru").toLowerCase().indexOf("ru") === 0 ? "ru" : "en");

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    btn.textContent = lang === "ru" ? "EN" : "RU";
    document.title = lang === "ru"
      ? "Сергей Соларев — Team Lead / Test Manager / Senior Automation Engineer"
      : "Sergey Solarev — Team Lead / Test Manager / Senior Automation Engineer";
    localStorage.setItem("lang", lang);
  }

  btn.addEventListener("click", function () {
    apply(root.getAttribute("data-lang") === "ru" ? "en" : "ru");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  apply(initial);
})();
