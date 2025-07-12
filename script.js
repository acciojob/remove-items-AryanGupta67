function removeColor() {
  const select = document.getElementById("colorSelect");

  // Get the selected index
  const selectedIndex = select.selectedIndex;

  // Remove the selected option if any
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}
