const products = [
    {
        id:'1',
        name:'Iphone ',
        price: 10000,
        category: 'celular',
        img: '',
        stock: 25,
        description:'Descripcion del celular'
    },
    {
        id:'1',
        name:'Iphone ',
        price: 10000,
        category: 'celular',
        img: '',
        stock: 25,
        description:'Descripcion del celular'
    },
    {
        id:'1',
        name:'Iphone ',
        price: 10000,
        category: 'celular',
        img: '',
        stock: 25,
        description:'Descripcion del celular'
    },

]

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })

}
