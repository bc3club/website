const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;"
  );
});
