const routes = {
  404: "/views/404.html",
  "/": "/views/home.html",
  "/about": "/views/about.html",
};
// create an object to hold the routes

const handleLocation = async () => {
  const path = window.location.pathname;
  //   get current path name
  const route = routes[path] || routes[404];
  //   get the route from the routes object or the 404 route
  const html = await fetch(route).then((data) => data.text());
  // fetch current path view html
  document.getElementById("view_container").innerHTML = html;
  //   change view_container html to the fetched view html
};

handleLocation();
// call handleLocation function

const route = (event) => {
  event = event || window.event;
  //  get the event object
  event.preventDefault();
  //  prevent default behaviour
  window.history.pushState({}, "", event.target.href);
  //   change the url to the target href
  handleLocation();
  //   call handleLocation function
};
window.onpopstate = handleLocation;
//   listen for popstate event
window.route = route;
