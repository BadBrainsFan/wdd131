// JavaScript statements to dynamically output the current year and last modified date.

// Get the current year and set it for the copyright notice.
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and set it in the last paragraph.
document.querySelector(
  "#lastModified"
).textContent = `Last modified: ${document.lastModified}`;
