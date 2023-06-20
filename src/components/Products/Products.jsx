const arrayProductos = [

{   id: 1,
    category: "Bebidas",
    producto: "Café",
    nombre: "Expresso",
    descripcion: "Café tipo arábigo preparado con agua hirviendo en contacto con el grano recién molido y espuma por encima. Se presenta en taza de 150 ml",
    precio: 499.90,
    stock: 10,
    descuento: 10,
    imagen: "/src/assets/cafeexpresso.jpg",
},

{   id: 2,
    category: "Bebidas",
    producto: "Café",
    nombre: "Americano",
    descripcion: "Café similar al expresso pero con mayor cantidad de agua, lo que le confiere un sabor menos intenso y de un tenor menos amargo",
    precio: 499.90,
    stock: 12,
    descuento: 15,
    imagen: "/public/cafeamericano.jpg",
},

{   id: 3,
    category: "Bebidas",
    producto: "Café",
    nombre: "Lungo",
    descripcion: "Café similar al expresso pero con mayor volumen. Se diferencia del americano en que no se agrega agua externa al expresso sino infusión",
    precio: 549.90,
    stock: 12,
    imagen: "/src/assets/cafelungo.jpg",
},

{   id: 4,
    category: "Bebidas",
    producto: "Café",
    nombre: "Cortado",
    descripcion: "Café similar al expresso con el agregado de una pequeña cantidad de leche caliente que mancha al café",
    precio: 519.90,
    stock: 15,
    imagen: "/src/assets/cortadito.png",
},

{   id: 5,
    category: "Bebidas",
    producto: "Café",
    nombre: "Con Leche",
    descripcion: "Café similar al cortado pero con un mayor agregado de leche, enproporción semejante a la de café. El sabor es más dulce y menos intenso que el del cortado pero sigue siendo importante la presencia de cafeína",
    precio: 579.90,
    stock: 18,
    imagen: "/src/assets/cafeconleche.jpeg",
},

{   id: 6,
    category: "Bebidas",
    producto: "Café",
    nombre: "Bombón",
    descripcion: "Similar al café con leche pero el lácteo utilizado es leche condensada, lo que le confiere un sabor más dulce. La leche condensada se vierte primero para completar a continuación con el café de grano molido tipo arábigo. Se completa con una capa superior de espuma de leche y virutas de chocolate",
    precio: 579.90,
    stock: 2,
    imagen: "/src/assets/cafebombon.jpg",
},

{   id: 7,
    category: "Bebidas",
    producto: "Café",
    nombre: "Cappuccino",
    descripcion: "Café expresso con agregado de leche, siendo de un tercio la proporción del primero en forma aproximada. Se completa con crema de leche en la parte superior, cacao en polvo y canela",
    precio: 649.90,
    stock: 11,
    imagen: "/src/assets/cafecappuccino.jpg",
},

{   id: 8,
    category: "Bebidas",
    producto: "Café",
    nombre: "Vienés",
    descripcion: "Café expresso con agregado de crema de leche en menor proporción que el café",
    precio: 649.90,
    stock: 2,
    imagen: "/src/assets/cafevienes.jpg",
},

{   id: 9,
    category: "Bebidas",
    producto: "Café",
    nombre: "Tentación",
    descripcion: "Café cappuccino con agregado de dulce de leche y salsa de chocolate disueltos",
    precio: 679.90,
    stock: 8,
    imagen: "/src/assets/cafetentacion.jpg",
},

{   id: 10,
    category: "Bebidas",
    producto: "Café",
    nombre: "Irlandés",
    descripcion: "Café lungo con agregado de whisky irlandés y una capa superior de crema de leche",
    precio: 749.90,
    stock: 3,
    imagen: "/src/assets/cafeirlandes.jpeg",
},

{   id: 11,
    category: "Bebidas",
    producto: "Café",
    nombre: "Frappé",
    descripcion: "Café frío elaborado en base a café instantáneo, hielo y una capa superior de crema de leche, con agregado de dulce de leche o salsa de chocolate, a elección",
    precio: 649.90,
    stock: 12,
    imagen: "/src/assets/cafefrappe.jpg",
},

{   id: 12,
    category: "Bebidas",
    producto: "Café",
    nombre: "Azteca",
    descripcion: "Café frío elaborado en base a café instantáneo, hielo, crema de leche y dos bolas de helado de chocolate",
    precio: 619.90,
    stock: 2,
    imagen: "/src/assets/cafeazteca.jpg",
},

{   id: 13,
    category: "Bebidas",
    producto: "Chocolate",
    nombre: "Espeso",
    descripcion: "Bebida elaborada con leche entera y chocolate semiamargo, aromatizado con granos de vainilla y canela",
    precio: 589.90,
    stock: 2,
    imagen: "/src/assets/chocolatecaliente.jpg",
},

{   id: 14,
    category: "Bebidas",
    producto: "Gaseosa",
    nombre: "Coke",
    descripcion: "Gaseosas de la línea Coke: Coca-Cola, Fanta o Sprite (original o zero en todos los casos) y gaseosas de la línea Aquarius, todas ellas en envase plástico de 500 ml",
    precio: 289.90,
    stock: 15,
    imagen: "/src/assets/gaseosas.jpg",
},

{   id: 15,
    category: "Bebidas",
    producto: "Jugo",
    nombre: "Naranja",
    descripcion: "Jugo de naranja natural exprimido",
    precio: 289.90,
    stock: 7,
    imagen: "/src/assets/jugodenaranja.jpg",
},

{   id: 16,
    category: "Bebidas",
    producto: "Agua",
    nombre: "Mineral",
    descripcion: "Agua mineral marca Kin baja en sodio, en envase plástico de 600 cc",
    precio: 189.90,
    stock: 12,
    imagen: "/src/assets/aguamineral.jpg",
},

{   id: 17,
    category: "Dulces",
    producto: "Medialuna",
    nombre: "Manteca",
    descripcion: "Triángulo panificado esponjoso elaborado en base a harina y manteca, cubierto con una capa de almíbar",
    precio: 119.90,
    stock: 25,
    imagen: "/src/assets/medmanteca.jpg",
},

{   id: 18,
    category: "Dulces",
    producto: "Medialuna",
    nombre: "Grasa",
    descripcion: "Triángulo panificado crocante elaborado en base a harina y superficie ligeramente hojaldrada",
    precio: 119.90,
    stock: 28,
    imagen: "/src/assets/medgrasa.jpg",
},

{   id: 19,
    category: "Dulces",
    producto: "Medialuna",
    nombre: "Rellena",
    descripcion: "Medialuna de manteca caliente, rellena con jamón cocido y queso",
    precio: 279.90,
    stock: 15,
    imagen: "/src/assets/medrellenas.jpg",
},

{   id: 20,
    category: "Dulces",
    producto: "Alfajor",
    nombre: "Maicena",
    descripcion: "Producto elaborado con dos capas de almidón de maíz y relleno con dulce de leche, rebozado con coco",
    precio: 49.90,
    stock: 29,
    descuento: 5,
    imagen: "/src/assets/alfajmaicena.png",
},

{   id: 21,
    category: "Dulces",
    producto: "Alfajor",
    nombre: "Chocolate",
    descripcion: "Producto elaborado con harina, almidón de maíz, cacao y esencia de vainilla, con relleno de dulde de leche y una cubierta de chocolate negro",
    precio: 69.90,
    stock: 3,
    imagen: "/src/assets/alfajchoc.jpg",
},

{   id: 22,
    category: "Dulces",
    producto: "Alfajor",
    nombre: "Blanco",
    descripcion: "Producto elaborado con harina, almidón de maíz, margarina y esencia de vainilla, con relleno de dulde de leche y una cubierta de chocolate blanco glaseado",
    precio: 69.90,
    stock: 5,
    imagen: "/src/assets/alfajblanco.jpg",
},

{   id: 23,
    category: "Dulces",
    producto: "Flan",
    nombre: "Casero",
    descripcion: "Flan casero individual elaborado en base a leche, huevos y esencia de vainilla. Se presenta con una porción de dulce de leche o crema chantilly",
    precio: 219.90,
    stock: 15,
    imagen: "/src/assets/flancasero.jpg",
},

{   id: 24,
    category: "Dulces",
    producto: "Tarta",
    nombre: "Tiramisú",
    descripcion: "Postre en capas elaborado en base a café, mascarpone, yemas de huevo y vainilla, aromatizado con vino oporto. Se presenta en porciones de 100 gramos",
    precio: 289.90,
    stock: 9,
    imagen: "/src/assets/tiramisu.jpeg",
},

{   id: 25,
    category: "Dulces",
    producto: "Postre",
    nombre: "Balcarce",
    descripcion: "Postre original elaborado en base a capas alternadas de bizcochuelo, crema chantilly, marrón glasé, nueces, dulce de leche y merengue. Se presenta en porciones de 100 gramos",
    precio: 359.90,
    stock: 8,
    imagen: "/src/assets/postrebalcarce.jpg",
},

{   id: 26,
    category: "Dulces",
    producto: "Postre",
    nombre: "Vainilla",
    descripcion: "Postre elaborado en base a capas de vainillas con manteca, chocolate de taza, agua tibia, aromatizado con vino oporto y espolvoreado con cacao. Se presenta en porciones de 100 gramos",
    precio: 329.90,
    stock: 8,
    imagen: "/src/assets/postredevainilla.jpg",
},

{   id: 27,
    category: "Dulces",
    producto: "Postre",
    nombre: "Selva Negra",
    descripcion: "Postre elaborado en base a bizcochuelo, crema chantilly, chocolate y cerezas, espolvoreado con cacao. Se presenta en porciones de 100 gramos",
    precio: 449.90,
    stock: 8,
    imagen: "/src/assets/postreselvanegra.jpg",
},

{   id: 28,
    category: "Dulces",
    producto: "Ensalada",
    nombre: "Frutas",
    descripcion: "Postre frio elaborado con frutas crudas y jarabe de almíbar; se compone de uvas, frutillas, cerezas, arándanos y trozos de naranja, kiwi y duraznos. Se presenta en porción individual de 90 gramos",
    precio: 289.90,
    stock: 11,
    imagen: "/src/assets/ensaladafrutas.jpg",
},

{   id: 29,
    category: "Sandwiches",
    producto: "Sandwich",
    nombre: "Baguette",
    descripcion: "Un pan baguette con jamón cocido y queso en su interior, con una capa de mayonesa y aderezos a gusto",
    precio: 249.90,
    stock: 4,
    imagen: "/src/assets/sandbaguettejyq.jpg",
},

{   id: 30,
    category: "Sandwiches",
    producto: "Sandwich",
    nombre: "Especial",
    descripcion: "Un pan tipo pebete con jamón cocido y queso en su interior y aderezos a gusto",
    precio: 249.90,
    stock: 3,
    imagen: "/src/assets/sandpebetejyq.jpg",
},

{   id: 31,
    category: "Sandwiches",
    producto: "Sandwich",
    nombre: "Miga JyQ",
    descripcion: "Triple capa de pan de miga con jamón cocido y queso en su interior, aderezado con una lámina de mayonesa en cada capa",
    precio: 279.90,
    stock: 15,
    imagen: "/src/assets/sandmigajyq.png",
},

{   id: 32,
    category: "Sandwiches",
    producto: "Sandwich",
    nombre: "Miga Triple",
    descripcion: "Triple capa de pan de miga con jamón cocido y un segundo producto a gusto en su interior, aderezado con una lámina de mayonesa en cada capa",
    precio: 349.90,
    stock: 12,
    imagen: "/src/assets/sandmigaespeciales.jpg",
},

{   id: 33,
    category: "Sandwiches",
    producto: "Sandwich",
    nombre: "Tostado",
    descripcion: "Dos capas de pan de miga tostadas con jamón cocido y queso en su interior",
    precio: 319.90,
    stock: 16,
    imagen: "/src/assets/tostados.jpg",
},

{   id: 34,
    category: "Sandwiches",
    producto: "Sandwich",
    nombre: "Granjero",
    descripcion: "Sandwich elaborado con finas rodajas de jamón cocido italiano, queso feteado, huevo duro en rodajas, rúcula y salsa ketchup, todo ello entre dos rebanadas abiertas de pan francés tostado",
    precio: 429.90,
    stock: 3,
    imagen: "/src/assets/granjero.jpg",
},

{   id: 35,
    category: "Sandwiches",
    producto: "Sandwich",
    nombre: "Milanesa",
    descripcion: "Sandwich elaborado con milanesa de ternera, huevo frito, lechuga y rodajas de tomate redondo, todo ello entre dos rebanadas abiertas de pan francés y acompañado por una porción de papas fritas",
    precio: 459.90,
    stock: 8,
    imagen: "/src/assets/sandwichmilanesa.jpg",
},

{   id: 36,
    category: "Sandwiches",
    producto: "Sandwich",
    nombre: "Pollo",
    descripcion: "Sandwich elaborado con una pechuga de pollo feteada, lechuga y rodajas de tomate redondo, todo ello entre dos rebanadas abiertas de pan francés y acompañado por una porción de papas fritas y salsa criolla",
    precio: 449.90,
    stock: 5,
    imagen: "/src/assets/sandwichpollo.jpg",
},
]

export default arrayProductos;


