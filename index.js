import {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct
} from './functions.js';

const [, , method, resource, ...params] = process.argv;

const [resourceName, resourceId] = resource?.split('/') || [];

switch (method) {
    case "GET":
        if (resourceName === "products" && !resourceId && !params[0]) {
            getAllProducts();
        } else if (resourceName === "products" && resourceId) {
            getProductById(resourceId);
        } else if (resource === "products" && params[0]) {
            getProductById(params[0]);
        } else {
            console.log("Comando GET no reconocido.");
        }
        break;

    case "POST":
        if (resourceName === "products") {
            const [title, price, category] = params;
            if (!title || !price || !category) {
                console.log("Faltan parámetros para crear el producto.");
            } else {
                addProduct(title, parseFloat(price), category);
            }
        } else {
            console.log("Comando POST no reconocido.");
        }
        break;

    case "DELETE":
        if (resourceName === "products" && resourceId) {
            deleteProduct(resourceId);
        } else if (resource === "products" && params[0]) {
            deleteProduct(params[0]);
        } else {
            console.log("Comando DELETE no reconocido.");
        }
        break;

    default:
        console.log("Comando no reconocido.");
}
