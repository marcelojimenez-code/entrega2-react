export const createProductAdaptedFromFirebase = ( doc ) => {
    const data = doc.data()

    return {
        id: doc.id,
        title: data.title,
        category: data.category,
        img: data.img,
        price: data.price,
        stock: data.stock,
        description: data.description
    }
}