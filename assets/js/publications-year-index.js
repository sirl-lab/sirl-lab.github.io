const initYearIndex = () => {
  const publications = document.querySelector(".publications");
  const indexContainer = document.getElementById("publication-year-index");
  if (!publications || !indexContainer) return;

  if (indexContainer.dataset.bound === "true") {
    indexContainer.innerHTML = "";
  }

  const tryBuildIndex = (attempt = 0) => {
    const yearHeadings = Array.from(publications.querySelectorAll("h2.bibliography, h2, h3"));
    const years = [];

    yearHeadings.forEach((heading, idx) => {
      const text = heading.textContent.trim();
      const match = text.match(/\b(19|20)\d{2}\b/);
      if (!match) return;

      const yearText = match[0];
      const targetId = `pub-year-${yearText}-${idx}`;
      heading.id = targetId;
      years.push({ year: yearText, id: targetId });
    });

    if (!years.length) {
      if (attempt < 10) {
        setTimeout(() => tryBuildIndex(attempt + 1), 120);
        return;
      }
      indexContainer.style.display = "none";
      return;
    }

    const yearButtons = years
      .map((item) => `<button type="button" data-target-id="${item.id}">${item.year}</button>`)
      .join("");

    indexContainer.style.display = "flex";
    indexContainer.innerHTML = `<span class="label">Jump to year:</span>${yearButtons}`;
  };

  if (indexContainer.dataset.bound !== "true") {
    indexContainer.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-target-id]");
      if (!button) return;

      const target = document.getElementById(button.dataset.targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    indexContainer.dataset.bound = "true";
  }

  tryBuildIndex();
};

document.addEventListener("DOMContentLoaded", initYearIndex);
document.addEventListener("turbo:load", initYearIndex);
document.addEventListener("turbolinks:load", initYearIndex);
if (document.readyState !== "loading") initYearIndex();
