const navMenu = [
  {
    auth: true,
    label: "Home",
    route: "/",
  },
  {
    auth: true,
    label: "About",
    route: "/about",
  },
  {
    auth: true,
    label: "Products",
    route: "/products",
  },
  {
    auth: true,
    label: "Contact",
    route: "/contact",
  },
  {
    auth: false,
    label: "Login",
    route: "/login",
  },
  {
    auth: false,
    label: "Register",
    route: "/register",
  },
];

export default navMenu;
