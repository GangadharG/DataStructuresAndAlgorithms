function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    // Clear any previously set timer
    clearTimeout(timeoutId);

    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(context, args);  // Call the original function
      // func(args); // -> This works only if you dont rely on this and have only one argument
    }, delay);
  };
}

function searchQuery(text) {
  console.log("Searching for:", text);
}

const debouncedSearch = debounce(searchQuery, 500);

document.getElementById("search").addEventListener("input", function (event) {
  debouncedSearch(event.target.value);
});
