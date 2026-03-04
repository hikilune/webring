(function () {
  const sites = [
    "https://malune.net/",
    "https://aaeri.neocities.org/",
    "https://sargx.net/",
  ];

  function getCurrentSite() {
    let ref = document.referrer;
    if (!ref) return sites[0];

    let index = sites.findIndex((site) => ref.includes(site));
    return index === -1 ? sites[0] : sites[index];
  }

  function initWebring() {
    const currentSite = getCurrentSite();
    const index = sites.findIndex((site) => site === currentSite);

    const prevIndex = (index - 1 + sites.length) % sites.length;
    const nextIndex = (index + 1) % sites.length;
    const randomIndex = Math.floor(Math.random() * sites.length);

    const root = document.querySelector(".brwebring");

    if (!root) return;

    const prev = root.querySelector(".prev");
    const next = root.querySelector(".next");
    const random = root.querySelector(".rand");

    if (prev) prev.href = sites[prevIndex];
    if (next) next.href = sites[nextIndex];
    if (random) random.href = sites[randomIndex];
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWebring);
  } else {
    initWebring();
  }
})();
