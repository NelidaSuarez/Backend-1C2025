## Autor : Nélida Suárez


# Gestor CLI de Productos FakeStore

Este proyecto es una herramienta simple de línea de comandos (CLI) para interactuar con la [API FakeStore](https://fakestoreapi.com/).  
Permite listar, obtener, agregar y eliminar productos mediante comandos en la terminal.

---

## Funcionalidades

- **Listar todos los productos**  
  Obtiene y muestra la lista completa de productos desde la API FakeStore.

- **Obtener un producto específico por ID**  
  Recupera la información detallada de un producto mediante su ID.

- **Agregar un nuevo producto**  
  Crea un producto nuevo especificando el título, precio y categoría.

- **Eliminar un producto por ID**  
  Elimina un producto de la tienda usando su ID.

---

## Estructura del proyecto

  index.js — Parser y controlador de comandos CLI
  functions.js — Funciones que realizan llamadas a la API FakeStore (GET todos, GET por ID, POST, DELETE)

