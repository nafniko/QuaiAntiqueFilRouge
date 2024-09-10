import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/connexion", "connexion", "/pages/auth/connexion.html"),
    new Route("/signup", "inscription", "/pages/auth/signup.html"),
    new Route("/account", "mon compte", "/pages/auth/account.html"),
    new Route("/editpassword", "mon compte", "/pages/auth/editpassword.html"),
    new Route("/allresa", "vos reservations", "/pages/reservations/allresa.html"),
   
   ];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";