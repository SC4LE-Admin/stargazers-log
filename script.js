fetch("events.json")
  .then(async (response) => {
    if (!response.ok) throw new Error(`Failed to load events: ${response.status}`);
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    if (!list) throw new Error("Starred list container not found");

    list.innerHTML = "";
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    console.error(error);
    const list = document.querySelector("#starred");
    if (list) {
      list.innerHTML = "<li>Unable to load starred repositories.</li>";
    }
  });
