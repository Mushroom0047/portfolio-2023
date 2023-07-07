const urlImg = '/assets/ProjectsImages/'

const {woo, elementor, shopify, figma, gms} = {
    'woo': 'https://img.icons8.com/color/48/null/woocommerce.png', 
    'elementor': 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-elementor-the-wordpress-page-builder-a-simple-intuitive-drag-and-drop-interface-logo-color-tal-revivo.png',
    'shopify': 'https://img.icons8.com/color/48/null/shopify.png',
    'figma': 'https://img.icons8.com/color/48/null/figma--v1.png',
    'gms': 'https://img.icons8.com/color/48/null/game-maker.png'
}
export const reactProjects = [
    {
        title: "Gif expert app",
        desc: "Primera aplicación de React, muestra gifs consumiendo la API de Giphy.",
        urlImg: urlImg + "fotos portafolio hector valdes m Gif-Expert-App-React.webp",
        link: "https://gif-expert-react-mushroom.netlify.app",
        icon: []
    },
]

export const wordpressProjects = [
    {
        title: "Dfwp-app.cl",
        desc: "Sistema de almacenamiento de documentos distribuidos por clientes. Desarrollado en Wordpress, JetEngine, Elementor y PHP.",
        urlImg: urlImg + 'fotos portafolio hector valdes m dfwp-app-min.webp',
        link: "https://dfwp-app.cl/",
        icon: [elementor]
    },
    {
        title: "Cantauriaestudio.cl",
        desc: "Sitio web para estudio de tatuajes diseñado en Figma y maquetado en WordPress con Elementor.",
        urlImg: urlImg + "fotos portafolio hector valdes m cantauria-min.webp",
        link: "https://cantauriaestudio.cl/",
        icon: [elementor, figma]
    },
    {
        title: "Frozensour.cl",
        desc: "Tienda de bebidas hecha en Shopify.",
        urlImg: urlImg + 'fotos portafolio hector valdes m Frozen Sour.webp',
        link: "https://frozensour.cl/",
        icon: [shopify]
    },
    {
        title: "Cellzion.cl",
        desc: "Sitio web corporativo.",
        urlImg: urlImg + "fotos portafolio hector valdes m cellzion-min.webp",
        link: "https://cellzion.cl/",
        icon: [elementor]
    },
    {
        title: "Alfacontadores.cl",
        desc: "Landing page de servicios contables con calculadoras de IVA y honorarios desarrolladas en JS.",
        urlImg: urlImg + "fotos portafolio hector valdes m Alfacontadores-min.webp",
        link: "https://alfacontadores.cl/",
        icon: [elementor, figma]
    },
    {
        title: "Armag.cl",
        desc: "Sitio web para cotizar arriendo de maquinaría.",
        urlImg: urlImg + "fotos portafolio hector valdes m armag-min.webp",
        link: "https://armag.cl/",
        icon: [elementor, woo]
    },
    {
        title: "Brickpicture.cl",
        desc: "Tienda de cuadros decorativos, diseño personalizado desarrollado en Elementor.",
        urlImg: urlImg + "fotos portafolio hector valdes m brickpicture-min.webp",
        link: "https://brickpicture.cl/",
        icon: [elementor, woo, figma]
    },
    {
        title: "Linna-dem.cl",
        desc: "Portafolio de ilustración.",
        urlImg: urlImg + "fotos portafolio hector valdes m linna-min.webp",
        link: "#",
        icon: [elementor]
    },
    {
        title: "Bespine.com",
        desc: "Landing page de producto área de medicina.",
        urlImg: urlImg + "fotos portafolio hector valdes m bespine-min.webp",
        link: "https://bespine.com/",
        icon: [elementor]
    }
]

export const gamesProjects = [
    {
        title: "The Dream Of The River",
    desc: 'Esste juego trata sobre un pez que nada por un rio, inspirado en los humedales de Quilpué, fue desarrollado para una JAM en 12 días. Actualmente está en desarrollo.',
        urlImg: urlImg + "fotos portafolio hector valdes m TheDreamOfTheRiver.webp",
        link: "https://gx.games/es/games/gaer2v/the-dream-of-the-river/",
        icon: [gms]
    },
    {
        title: "Cachipún",
        desc: 'Este es mi primer juego sobre piedra,  papel y tijeras llamado CACHIPÚN',
        urlImg: urlImg + "fotos portafolio hector valdes m cachipun-min.webp",
        link: "https://mushroomdev47.itch.io/cachipun",
        icon: [gms]
    },
    {
        title: "ZomBeast Under Attack",
        desc: 'Un simple juego de disparos hecho para aprender, tal vez no sea el juego del año, pero me ayudó a mejorar mis habilidades de programación',
        urlImg: urlImg + "fotos portafolio hector valdes m Zombeast-min.webp",
        link: "https://mushroomdev47.itch.io/zombeast-underattack",
        icon: [gms]
    },
    {
        title: "Humanity Part I",
        desc: 'Un juego de aventuras donde acompañaremos a Frank, un humano creado genéticamente, a través de la misteriosa ciudad de Uxo, gobernada por un rey que tiene muchos secretos que contar ...',
        urlImg: urlImg + "fotos portafolio hector valdes m humanity-min.webp",
        link: "https://mushroomdev47.itch.io/humanity-part-i",
        icon: [gms]
    },
]