let events = JSON.parse(localStorage.getItem("events")) || [];

function renderEvents() {
  const container = document.getElementById("events");
  container.innerHTML = "";

  events.forEach((e, index) => {
    container.innerHTML += `
      <div class="event">
        <button class="delete" onclick="deleteEvent(${index})">X</button>
        <h3>${e.title}</h3>
        <p>📅 ${e.date}</p>
        <span class="tag">${e.category}</span>
        <p>${e.description}</p>
      </div>
    `;
  });

  localStorage.setItem("events", JSON.stringify(events));
}

function addEvent() {
  const title = document.getElementById("title").value.trim();
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value.trim();

  if (!title || !date) {
    alert("Title and Date required");
    return;
  }

  events.push({ title, date, category, description });
  renderEvents();
}

function deleteEvent(index) {
  events.splice(index, 1);
  renderEvents();
}

function clearEvents() {
  events = [];
  renderEvents();
}

function addSample() {
  events.push({
    title: "Web Development Conference",
    date: "2026-02-15",
    category: "Conference",
    description: "Annual conference on modern web technologies."
  });
  renderEvents();
}

renderEvents();
