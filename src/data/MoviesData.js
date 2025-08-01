import imgModal4 from "../assets/png/imgModal4.jpg";
import imgModal2 from "../assets/png/imgModal2.jpg";
import imgModal1 from "../assets/png/imgModal1.jpg";
import imgModal5 from "../assets/png/imgModal5.jpg";
import imgModal8 from "../assets/png/imgModal8.jpg";
import imgModal9 from "../assets/png/imgModal9.jpg";
import imgModal11 from "../assets/png/imgModal11.jpg";
import imgModal12 from "../assets/png/imgModal12.jpg";
import imgModal16 from "../assets/png/imgModal6.jpg";
import imgModal7 from "../assets/png/imgModal7.jpg";

const moviesData = [
    {
        imgSrc: "https://image.tmdb.org/t/p/w185/rCpABsHAJz7eKDNgPiAxl6nSFjU.jpg",
        title: "Una esposa de mentira" ,
        genres: ["Acción", "Drama", "Familiar"],
        year: 2011,
        description: "Tras años de fingir estar casado, un cirujano plástico soltero conoce a la mujer de sus sueños y le pide a su asistente que se haga pasar por su futura exesposa.",
        buttonTrailer: "https://www.youtube.com/watch?v=Q_kkTZG3mBw", 
        imgModal: imgModal1,
    },
    {
        imgSrc: "https://www.lahiguera.net/cinemania/pelicula/10077/sonic_2_la_pelicula-cartel-10332.jpg",
        title: "Sonic la pelicula",
        genres: ["Acción", "Drama", "Comedia", "Infantil", "Familiar"],
        year: 2022,
        description: "Sonic es un pequeño erizo antropomórfico azul proveniente de otro mundo, quien puede correr a velocidades supersónicas",
        buttonTrailer: "https://www.youtube.com/watch?v=SDrFPgdZqko",
        imgModal: imgModal2,
    },
    {
        imgSrc:"https://image.tmdb.org/t/p/original/3jec3aNai5gJgU20n5yo30fnpz1.jpg",
        title: "Soldado de elite",
        genres: ["Acción", "Aventura", "Familiar"],
        year: 2022,
        description: "Es un Soldado Pirata pero más robusto y poderoso. Al igual que sus contrapartes comunes, utiliza un par de guadañas pero más alargadas, lo que le permite tener mayor alcance y además son más dañinas. Al igual que su poder, su resistencia es mucho mayor y las armas comunes le ocasionan daños menores.",
        buttonTrailer: "https://www.youtube.com/watch?v=c4V5C3-QnXI",
        imgModal: imgModal4,
    },
    {
        imgSrc: "https://m.media-amazon.com/images/I/81y0foYjoFL._AC_UF1000,1000_QL80_.jpg",
        title: "Spider-Man",
        genres: ["Acción", "Drama", "Comedia", "Infantil"],
        year: 2021,
        description: "Peter Parker asume su nueva identidad como El Hombre Araña y regresa a vivir con su tía después de su aventura con Los Vengadores. Al volver, mientras sigue bajo la tutela de Tony Stark, descubre que ha surgido un nuevo y despiadado enemigo que pretende destruir todo lo que ama: el Buitre.",
        buttonTrailer: "https://www.youtube.com/watch?v=t06RUxPbp_c",
        imgModal: imgModal5,
    },
    {
        imgSrc: "https://www.universalpictures.com.ar/tl_files/content/movies/bad_guys/posters/01.jpg",
        title: "Los tipos malos",
        genres: ["Comedia", "Infantil"],
        year: 2022,
        description: "un equipo de increíbles animales bandidos se prepara para enfrentarse al golpe más complicado de su vida: convertirse en ciudadanos modélicos.",
        buttonTrailer: "https://www.youtube.com/watch?v=51I5tvvHxtI",
        imgModal: imgModal16,
    },
    {
        imgSrc: "https://pics.filmaffinity.com/Shrek-903764423-large.jpg",
        title: "Shrek",
        genres: ["Comedia", "Infantil"],
        year: 2008,
        description: "Shrek es un gran ogro verde que vive en un pantano. Allí reside felizmente, asustando a los humanos que se aventuran o se pierden, hasta que un día descubre que el lugar ha sido invadido por personajes de cuentos de hadas que han sido expulsados de la comarca por el villano Lord Farquaad.",
        buttonTrailer: "https://www.youtube.com/watch?v=CwXOrWvPBPk",
        imgModal: imgModal7,
    },
    {
        imgSrc: "https://imageio.forbes.com/specials-images/imageserve/639cb80549fa2d228bf3181c/Official-Dolby-Cinema-poster-for--Avatar--The-Way-of-Water-/960x0.jpg?height=1053&width=711&fit=bounds",
        title: "Avatar",
        genres: ["Comedia", "Infantil"],
        year: 2022,
        description: "En el año 2154, el exmarine Jake Sully es seleccionado para el programa Avatar, un experimento que le pondrá en el cuerpo de un alienígena y que podrá controlar con su propia mente. Él no es científico, pero su compatibilidad genética con su hermano gemelo hace que sea el candidato idóneo tras la muerte de este.",
        buttonTrailer: "https://www.youtube.com/watch?v=CpXJHWSXJW0",
        imgModal: imgModal8,
    },
    {
        imgSrc: "https://www.cinevistablog.com/wp-content/uploads/2016/11/resena-de-moana-un-mar-de-aventuras-comedia-animada-de-disney_opt2_.jpg",
        title: "Moana",
        genres: ["Comedia", "Infantil"],
        year: 2022,
        description: "Moana, una joven aventurera, se embarca en un peligroso viaje, para cumplir con una misión incompleta de sus ancestros. Durante su viaje conocerá a su héroe, un semidiós legendario llamado Maui, y juntos recorrerán el oceáno en un viaje lleno de misterios y aventuras.",
        buttonTrailer: "https://www.youtube.com/watch?v=LKFuXETZUsI",
        imgModal: imgModal9,
    },
    {
        imgSrc: "https://play-lh.googleusercontent.com/ejxt_xZtEn3RXO3vzLPTsnnHwaotH_h36_eEP3fyRydKBaD0Bh2CLGC_ZyM4UZx8lmg=w240-h480-rw",
        title: "Mis simpatia",
        genres: ["Comedia", "Infantil", "Drama"],
        year: 2000,
        description: "Sandra Bullock está de vuelta como la agente del FBI Gracie Hart, quien debe trabajar de encubierto con una nueva compañera, la agente Fuller (Regina King), cuando la actual Miss America y Stan Fields son secuestrados en Las Vegas.",
        buttonTrailer: "https://www.youtube.com/watch?v=LwrEnPYHsyQ",
        imgModal: imgModal11,
    },
    {
        imgSrc: "https://i.pinimg.com/736x/1e/bb/1b/1ebb1b9aaabcc0308066a65557919df2.jpg",
        title: "Hombres de negro",
        genres: ["Lenguaje inapropiado", "Accion"],
        year: 2002,
        description: "Los Hombres de negro serían, según la tradición contemporánea más popular y la especulación de algunos grupos creyentes en el fenómeno extraterrestre, agentes secretos gubernamentales o extragubernamentales encargados de ayudar a ocultar una presencia extraterrestre en la Tierra.",
        buttonTrailer: "https://www.youtube.com/watch?v=9fEyWV4d7dw",
        imgModal: imgModal12,
    },
];

export default moviesData;
