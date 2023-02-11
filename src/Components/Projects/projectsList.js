const urlImg = '/src/assets/ProjectsImages/'

const {woo, elementor, shopify, figma} = {
    'woo': 'https://img.icons8.com/color/48/null/woocommerce.png', 
    'elementor': 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-elementor-the-wordpress-page-builder-a-simple-intuitive-drag-and-drop-interface-logo-color-tal-revivo.png',
    'shopify': 'https://img.icons8.com/color/48/null/shopify.png',
    'figma': 'https://img.icons8.com/color/48/null/figma--v1.png'
}
export const reactProjects = [
    {
        title: "Gif expert app",
        desc: "Primera aplicación de React, muestra gifs consumiendo la API de Giphy.",
        urlImg: urlImg + "Gif-Expert-App-React.webp",
        link: "",
        icon: []
    },
]

export const wordpressProjects = [
    {
        title: "Naturalconcreto.cl",
        desc: "Tienda hecha con Woocommerce y wpBakery",
        urlImg: urlImg + 'Natural-concreto.webp',
        link: "https://www.naturalconcreto.cl/",
        icon: [woo, elementor]
    },
    {
        title: "Frozensour.cl",
        desc: "Tienda de bebidas hecha en Shopify",
        urlImg: urlImg + 'Frozen.webp',
        link: "https://frozensour.cl/",
        icon: [shopify]
    },
    {
        title: "cantauriaestudio.cl",
        desc: "Sitio web para estudio de tatuajes maquetado en WordPress y Elementor, diseñado en Figma",
        urlImg: urlImg + "cantauria-min.webp",
        link: "https://cantauriaestudio.cl/",
        icon: [elementor, figma]
    },
    {
        title: "armag.cl",
        desc: "Sitio web para cotizar arriendo de maquinaría",
        urlImg: urlImg + "cellzion-min.webp",
        link: "https://armag.cl/",
        icon: [elementor, woo]
    },
    {
        title: "cellzion.cl",
        desc: "Sitio web corporativo",
        urlImg: urlImg + "cantauria-min.webp",
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
    {
        title: "Brickpicture.cl",
        desc: "Tienda de cuadros decorativos, diseño personalizado desarrollado en Elementor",
        urlImg: urlImg + "brickpicture-min.webp",
        link: "https://brickpicture.cl/",
        icon: [elementor, woo, figma]
    },
]

export const gamesProjects = [
    {
        title: "",
        desc: "",
        urlImg: "",
        link: "",
        icon: []
    },
]