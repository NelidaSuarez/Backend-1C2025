const BASE_URL = "https://fakestoreapi.com/products";

export async function getAllProducts() {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getProductById(id) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function addProduct(title, price, category) {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify({
                title,
                price,
                description: "Sin descripción",
                image: "https://i.pravatar.cc",
                category
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log("Producto agregado:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function deleteProduct(id) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        console.log("Producto eliminado:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
