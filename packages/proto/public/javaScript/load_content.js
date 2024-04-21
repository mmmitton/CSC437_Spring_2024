function loadContent(file_path, id) {
    // Fetch the content from a file or a URL
    fetch(file_path)
        .then(response => response.text())
        .then(data => {
            // Replace the content of a specified element with the loaded content
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}

function loadHTML(href, container) {
    container.replaceChildren();
    fetch(href)
      .then((response) => {
        if (response.status !== 200) {
          throw `Status: ${response.status}`;
        }
        return response.text();
      })
      .then((htmlString) => addFragment(htmlString, container))
      .catch((error) =>
        addFragment(
          `<p class="error">
          Failed to fetch ${href}: ${error}
          </p>`,
          container
        )
      );
  }
  
  const parser = new DOMParser();
  
  function addFragment(htmlString, container) {
    const doc = parser.parseFromString(htmlString, "text/html");
    const fragment = Array.from(doc.body.childNodes);
  
    container.append(...fragment);
  }