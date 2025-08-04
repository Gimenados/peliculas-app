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
import imgModal20 from "../assets/png/imgModal20.webp"
import imgModal21 from "../assets/png/imgModal21.jpeg"

const moviesData = [
    {
        imgSrc: "https://image.tmdb.org/t/p/w185/rCpABsHAJz7eKDNgPiAxl6nSFjU.jpg",
        title: "Una esposa de mentira" ,
        distribution: ["Adam Sandler", "Jennifer Aniston", "Brooklyn Decker", "Bailee Madison", "Nick Swardson"],
        genres: ["Acción", "Drama", "Familiar"],
        year: 2011,
        description: "Tras años de fingir estar casado para evitar compromisos, un cirujano plástico conoce a la mujer de sus sueños y convence a su asistente para que se haga pasar por su futura exesposa, desatando una serie de enredos cómicos.",
        buttonTrailer: "https://www.youtube.com/watch?v=Q_kkTZG3mBw", 
        imgModal: imgModal1,
    },
    {
        imgSrc: "https://www.lahiguera.net/cinemania/pelicula/10077/sonic_2_la_pelicula-cartel-10332.jpg",
        title: "Sonic la pelicula",
        distribution: ["Ben Schwartz", "James Marsden", "Jim Carrey", "Tika Sumpter", "Lee Majdoub"],
        genres: ["Acción", "Drama", "Comedia", "Infantil", "Familiar"],
        year: 2022,
        description: "Sonic, un erizo azul con velocidad supersónica proveniente de otro mundo, llega a la Tierra y se ve envuelto en una aventura épica para proteger a sus nuevos amigos del malvado Dr. Robotnik.",        buttonTrailer: "https://www.youtube.com/watch?v=SDrFPgdZqko",
        imgModal: imgModal2,
    },
    {
        imgSrc:"https://image.tmdb.org/t/p/original/3jec3aNai5gJgU20n5yo30fnpz1.jpg",
        title: "Soldado de elite",
        distribution: ["Chad Michael Collins", "Danay Garcia", "Billy Zane", "Tom Berenger", "Joe Lando"],
        genres: ["Acción", "Aventura", "Familiar"],
        year: 2022,
        description: "Un soldado pirata imponente y poderoso lucha con guadañas gigantes que le otorgan gran alcance y daño. Su fuerza y resistencia lo hacen casi invencible frente a armas convencionales.",
        buttonTrailer: "https://www.youtube.com/watch?v=c4V5C3-QnXI",
        imgModal: imgModal4,
    },
    {
        imgSrc: "https://m.media-amazon.com/images/I/81y0foYjoFL._AC_UF1000,1000_QL80_.jpg",
        title: "Spider-Man",
        distribution: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon", "Willem Dafoe", "Alfred Molina", "Andrew Garfield", "Tobey Maguire"],
        genres: ["Acción", "Drama", "Comedia", "Infantil"],
        year: 2021,
        description: "Peter Parker retoma su vida como Spider-Man tras su aventura con los Vengadores. Mientras sigue bajo la tutela de Tony Stark, se enfrenta a un nuevo enemigo: el despiadado Buitre, que amenaza con destruir todo lo que ama.",
        buttonTrailer: "https://www.youtube.com/watch?v=t06RUxPbp_c",
        imgModal: imgModal5,
    },
    {
        imgSrc: "https://www.universalpictures.com.ar/tl_files/content/movies/bad_guys/posters/01.jpg",
        title: "Los tipos malos",
        distribution: ["Sam Rockwell", "Marc Maron", "Awkwafina", "Craig Robinson", "Anthony Ramos", "Richard Ayoade", "Zazie Beetz"],
        genres: ["Comedia", "Infantil"],
        year: 2022,
        description: "Un grupo de astutos animales criminales se embarca en su misión más difícil hasta ahora: dejar atrás la vida delictiva y demostrar que pueden ser buenos ciudadanos.",
        buttonTrailer: "https://www.youtube.com/watch?v=51I5tvvHxtI",
        imgModal: imgModal16,
    },
    {
        imgSrc: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/07/shrek-5-confirmada.jpg?tf=1080x",
        title: "Shrek",
        distribution: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow"],
        genres: ["Comedia", "Infantil"],
        year: 2008,
        description: "Shrek, un ogro solitario que vive feliz en su pantano, ve su tranquilidad interrumpida cuando una invasión de personajes de cuentos de hadas lo obliga a emprender una inesperada aventura para recuperar su hogar.",
        buttonTrailer: "https://www.youtube.com/watch?v=CwXOrWvPBPk",
        imgModal: imgModal7,
    },
    {
        imgSrc: "https://imageio.forbes.com/specials-images/imageserve/639cb80549fa2d228bf3181c/Official-Dolby-Cinema-poster-for--Avatar--The-Way-of-Water-/960x0.jpg?height=1053&width=711&fit=bounds",
        title: "Avatar",
        distribution: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang", "Michelle Rodriguez"],
        genres: ["Comedia", "Infantil"],
        year: 2022,
        description: "En el año 2154, Jake Sully, un exmarine parapléjico, se une al programa Avatar, que le permite controlar un cuerpo alienígena. En su misión en Pandora, se verá dividido entre obedecer órdenes y defender al pueblo nativo Na'vi.",
        buttonTrailer: "https://www.youtube.com/watch?v=CpXJHWSXJW0",
        imgModal: imgModal8,
    },
    {
        imgSrc: "https://www.cinevistablog.com/wp-content/uploads/2016/11/resena-de-moana-un-mar-de-aventuras-comedia-animada-de-disney_opt2_.jpg",
        title: "Moana",
        distribution: ["Auliʻi Cravalho", "Dwayne Johnson", "Rachel House", "Temuera Morrison", "Jemaine Clement"],
        genres: ["Comedia", "Infantil"],
        year: 2022,
        description: "Moana, una joven valiente, parte en un viaje épico por el océano para completar una antigua misión de sus ancestros. Junto al semidiós Maui, enfrentará criaturas míticas y descubrirá su verdadero destino.",
        buttonTrailer: "https://www.youtube.com/watch?v=LKFuXETZUsI",
        imgModal: imgModal9,
    },
    {
        imgSrc: "https://play-lh.googleusercontent.com/ejxt_xZtEn3RXO3vzLPTsnnHwaotH_h36_eEP3fyRydKBaD0Bh2CLGC_ZyM4UZx8lmg=w240-h480-rw",
        title: "Mis simpatia",
        distribution: ["Sandra Bullock", "Michael Caine", "Benjamin Bratt", "Candice Bergen", "William Shatner"],
        genres: ["Comedia", "Infantil", "Drama"],
        year: 2000,
        description: "La agente del FBI Gracie Hart regresa con una nueva compañera, la agente Fuller, para resolver el secuestro de la actual Miss América y su presentador en Las Vegas, en una misión llena de humor y acción.",
        buttonTrailer: "https://www.youtube.com/watch?v=LwrEnPYHsyQ",
        imgModal: imgModal11,
    },
    {
        imgSrc: "https://i.pinimg.com/736x/1e/bb/1b/1ebb1b9aaabcc0308066a65557919df2.jpg",
        title: "Hombres de negro",
        distribution: ["Will Smith", "Tommy Lee Jones", "Rip Torn", "Rosario Dawson", "Johnny Knoxville"],
        genres: ["Lenguaje inapropiado", "Accion"],
        year: 2002,
        description: "Los Hombres de Negro son agentes secretos dedicados a mantener en secreto la presencia extraterrestre en la Tierra. Con trajes oscuros y tecnología avanzada, enfrentan amenazas alienígenas mientras protegen a la humanidad.",
        buttonTrailer: "https://www.youtube.com/watch?v=9fEyWV4d7dw",
        imgModal: imgModal12,
    },
    {
        imgSrc: "https://elcomercio.pe/resizer/v2/Q2ATMCCSUFA77LUH2SM2SQ5E2Y.jpg?auth=035dd6759328826316b4d70c3f2188fc7fa728706c97dddf1975d4c21e92dba6&width=1200&height=810&quality=75&smart=true",
        title: "My Oxford Year",
        distribution: ["Jacob Elordi", "Maggie Grace", "Toni Collette", "Matthew Goode", "Jeremy Irons"],
        genres: ["Drama", "Romance", "Familiar"],
        year: 2025,
        description: "Una joven estadounidense llega a Oxford con grandes ambiciones políticas, pero su vida da un giro inesperado cuando se enamora de un profesor con un secreto que cambiará su destino. Una historia sobre amor, decisiones y cómo un solo año puede transformarlo todo.",
        buttonTrailer: "https://www.youtube.com/watch?v=YzWx_N8Hgzg",
        imgModal: imgModal20,
    },
    {
        imgSrc: "https://variety.com/wp-content/uploads/2016/06/cars.jpg?w=1000&h=667&crop=1&resize=910%2C607",
        title: "Cars",
        genres: ["Drama", "Infantil", "Familiar"],
        distribution: ["Owen Wilson", "Paul Newman", "Bonnie Hunt", "Larry the Cable Guy", "Cheech Marin"],
        year: 2006,
        description: "Un ambicioso auto de carreras llamado Rayo McQueen descubre el verdadero significado de la amistad y el trabajo en equipo cuando queda atrapado en un pequeño pueblo olvidado llamado Radiator Springs.",
        buttonTrailer: "https://www.youtube.com/watch?v=YzWx_N8Hgzg",
        imgModal: imgModal21,
    },
];

export default moviesData;
