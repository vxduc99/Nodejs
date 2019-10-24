const product = {
    label: 'Machine learning',
    price: 500,
    author: 'Vu Huu Tiep',
    salePrice: undefined,
    rating: 4.8
}

// const {label} = product
// console.log(label)

const transaction = (type, {label, rating})=>{
    console.log(type, label, rating)

}

transaction('orther', product)