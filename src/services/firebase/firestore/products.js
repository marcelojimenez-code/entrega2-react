import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import {db} from '../index'
import { createProductAdaptedFromFirebase } from '../../../adapters/ProductAdapter';


export const getProducts = async (categoryId = null) => {
    console.log('categoryId recibido:', categoryId);

    const validCategoryId = categoryId && typeof categoryId === 'string' && categoryId.trim() !== '' 
        ? categoryId.trim() 
        : null;

    console.log('categoryId válido:', validCategoryId);    

    const productsCollection = validCategoryId 
    ? query(collection(db, "products"), where("category", "==", validCategoryId))
    : collection(db, "products")

    try {
        const querySnapshot = await getDocs(productsCollection);
        const productAdapted = querySnapshot.docs.map((doc) => {
            return createProductAdaptedFromFirebase(doc);
        });
        return productAdapted;
    } catch (error) {
        return error;
    }
};

export const getProductById = async (itemId)=>{
    const productDoc = doc(db, "products", itemId)

    try {
        const queryDocumentSnapshot = await getDoc(productDoc);
        const productAdapted = createProductAdaptedFromFirebase(
            queryDocumentSnapshot
        );
        return productAdapted;
    } catch (error) {
        return error;
    }
}