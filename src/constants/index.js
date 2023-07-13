export const BASE_URL = 'https://6499986179fbe9bcf83f91b6.mockapi.io/';

export const API_URLS = {
    PRODUCTS: {
        url: `${BASE_URL}/products`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
}

const fixedProducts = [
    {
    "createdAt": "2023-06-26T05:19:18.881Z",
    "name": "Vestido Freeman",
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "price": "332.00",
    "category": "Dresses",
    "taps": "Soap",
    "image": "../dresses1.png",
    "stock": "9",
    "id": "1"
    },
    {
    "createdAt": "2023-06-25T16:12:28.675Z",
    "name": "Vestido Quaid",
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "price": "251.00",
    "category": "Dresses",
    "taps": "Chips",
    "image": "../dresses2.png",
    "stock": "5",
    "id": "2"
    },
    {
    "createdAt": "2023-06-26T07:51:09.410Z",
    "name": "Vestido Avik",
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "price": "703.00",
    "category": "Dresses",
    "taps": "Soap",
    "image": "../dresses3.png",
    "stock": "6",
    "id": "3"
    },
    {
    "createdAt": "2023-06-25T22:33:29.071Z",
    "name": "Vestido Murly",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "price": "84.00",
    "category": "Dresses",
    "taps": "Table",
    "image": "../dresses4.png",
    "stock": "4",
    "id": "4"
    },
    {
    "createdAt": "2023-06-25T22:38:37.736Z",
    "name": "Pantalón Rolston",
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "price": "565.00",
    "category": "Jeans",
    "taps": "Bike",
    "image": "../jeans1.png",
    "stock": "4",
    "id": "5"
    },
    {
    "createdAt": "2023-06-26T08:20:00.133Z",
    "name": "Pantalón Tiscia",
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "price": "413.00",
    "category": "Jeans",
    "taps": "Bacon",
    "image": "../jeans2.png",
    "stock": "1",
    "id": "6"
    },
    {
    "createdAt": "2023-06-25T17:45:24.895Z",
    "name": "Pantalón Gilden",
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "price": "462.00",
    "category": "Jeans",
    "taps": "Mouse",
    "image": "../jeans3.png",
    "stock": "9",
    "id": "7"
    },
    {
    "createdAt": "2023-06-25T21:10:27.842Z",
    "name": "Pantalón Margaret",
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "price": "83.00",
    "category": "Jeans",
    "taps": "Jeans",
    "image": "../jeans4.png",
    "stock": "4",
    "id": "8"
    },
    {
    "createdAt": "2023-06-26T08:49:00.229Z",
    "name": "Camisa VF",
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "price": "361.00",
    "category": "Shirts",
    "taps": "Bacon",
    "image": "../shirts1.png",
    "stock": "2",
    "id": "9"
    },
    {
    "createdAt": "2023-06-26T03:45:31.273Z",
    "name": "Camisa Albright",
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "price": "287.00",
    "category": "Shirts",
    "taps": "Shoes",
    "image": "../shirts2.png",
    "stock": "9",
    "id": "10"
    },
    {
    "createdAt": "2023-06-26T03:40:31.369Z",
    "name": "Camisa Diane",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "price": "328.00",
    "category": "Shirts",
    "taps": "Gloves",
    "image": "../shirts3.png",
    "stock": "1",
    "id": "11"
    },
    {
    "createdAt": "2023-06-26T12:30:12.073Z",
    "name": "Camisa Lou",
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "price": "854.00",
    "category": "Shirts",
    "taps": "Cheese",
    "image": "../shirts4.png",
    "stock": "1",
    "id": "12"
    },
    {
        "createdAt": "2023-06-26T12:30:12.073Z",
        "name": "Falda Short Evans",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "price": "854.00",
        "category": "Skirts",
        "taps": "Cheese",
        "image": "../skirts1.png",
        "stock": "1",
        "id": "13"
    },
    {
            "createdAt": "2023-06-26T12:30:12.073Z",
            "name": "Falda Short Ivory",
            "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            "price": "854.00",
            "category": "Skirts",
            "taps": "Cheese",
            "image": "../skirts2.png",
            "stock": "1",
            "id": "14"
    },
    {
                "createdAt": "2023-06-26T12:30:12.073Z",
                "name": "Falda Coffee",
                "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "price": "854.00",
                "category": "Skirts",
                "taps": "Cheese",
                "image": "../skirts3.png",
                "stock": "1",
                "id": "15"
    },
    {
                    "createdAt": "2023-06-26T12:30:12.073Z",
                    "name": "Falda Short Lias",
                    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                    "price": "854.00",
                    "category": "Skirts",
                    "taps": "Cheese",
                    "image": "../skirts4.png",
                    "stock": "1",
                    "id": "16"
    }
];

API_URLS.PRODUCTS.url = fixedProducts;
API_URLS.PRODUCTS.config = {};

export default fixedProducts;
