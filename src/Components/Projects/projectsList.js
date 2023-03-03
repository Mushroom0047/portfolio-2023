const urlImg = '/src/assets/ProjectsImages/'

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
        urlImg: urlImg + "Gif-Expert-App-React.webp",
        link: "https://gif-expert-react-mushroom.netlify.app",
        icon: []
    },
]

export const wordpressProjects = [
    {
        title: "Naturalconcreto.cl",
        desc: "Tienda hecha con Woocommerce y wpBakery",
        urlImg: urlImg + 'Natural-concreto.webp',
        link: "https://www.naturalconcreto.cl/",
        icon: [woo]
    },
    {
        title: "cantauriaestudio.cl",
        desc: "Sitio web para estudio de tatuajes maquetado en WordPress y Elementor, diseñado en Figma",
        urlImg: urlImg + "cantauria-min.webp",
        link: "https://cantauriaestudio.cl/",
        icon: [elementor, figma]
    },
    {
        title: "Frozensour.cl",
        desc: "Tienda de bebidas hecha en Shopify",
        urlImg: urlImg + 'Frozen.webp',
        link: "https://frozensour.cl/",
        icon: [shopify]
    },
    {
        title: "cellzion.cl",
        desc: "Sitio web corporativo",
        urlImg: urlImg + "cellzion-min.webp",
        link: "https://cellzion.cl/",
        icon: [elementor]
    },
    {
        title: "Globalpartners.cl",
        desc: "Set de 5 sitios web corporativos desarrollados a medida",
        urlImg: urlImg + "gp-min.webp",
        link: "https://globalpartners.cl/",
        icon: [elementor, woo, figma]
    },
    {
        title: "armag.cl",
        desc: "Sitio web para cotizar arriendo de maquinaría",
        urlImg: urlImg + "armag-min.webp",
        link: "https://armag.cl/",
        icon: [elementor, woo]
    },
    {
        title: "Brickpicture.cl",
        desc: "Tienda de cuadros decorativos, diseño personalizado desarrollado en Elementor",
        urlImg: urlImg + "brickpicture-min.webp",
        link: "https://brickpicture.cl/",
        icon: [elementor, woo, figma]
    },
    {
        title: "Linna-dem.cl",
        desc: "Portafolio de ilustración",
        urlImg: urlImg + "linna-min.webp",
        link: "#",
        icon: [elementor]

    },
    {
        title: "Refuerzamas.cl",
        desc: "Sitio web informativo",
        urlImg: urlImg + "refuerzamas-min.webp",
        link: "#",
        icon: [elementor]
    },
]

export const gamesProjects = [
    {
        title: "The Dream Of The River",
    desc: 'Esste juego trata sobre un pez que nada por un rio, inspirado en los humedales de Quilpué, fue desarrollado para una JAM en 12 días. Actualmente está en desarrollo.',
        urlImg: urlImg + "Portada TheDreamOfTheRiver 169.webp",
        link: "https://gx.games/es/games/gaer2v/the-dream-of-the-river/",
        icon: [gms]
    },
    {
        title: "Cachipún",
        desc: 'Este es mi primer juego sobre piedra,  papel y tijeras llamado CACHIPÚN',
        urlImg: urlImg + "cachipun-min.webp",
        link: "https://mushroomdev47.itch.io/cachipun",
        icon: [gms]
    },
    {
        title: "ZomBeast Under Attack",
        desc: 'Un simple juego de disparos hecho para aprender, tal vez no sea el juego del año, pero me ayudó a mejorar mis habilidades de programación',
        urlImg: urlImg + "ZomBeast-min.webp",
        link: "https://mushroomdev47.itch.io/zombeast-underattack",
        icon: [gms]
    },
    {
        title: "Humanity Part I",
        desc: 'Un juego de aventuras donde acompañaremos a Frank, un humano creado genéticamente, a través de la misteriosa ciudad de Uxo, gobernada por un rey que tiene muchos secretos que contar ...',
        urlImg: urlImg + "humanity-min.webp",
        link: "https://mushroomdev47.itch.io/humanity-part-i",
        icon: [gms]
    },
]