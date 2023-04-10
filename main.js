/*
// GET

fetch("/user",{ 
    method: "get"
}).then(res=>res.json())

// POST

fetch("/users", {
    method: "post",
    headers:{
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        first: "jean",
        last: "Bonbeur",
        country: "fr",
        company: "saucice",
        email: "jean.bombeur@gmail.com"
    })
})

// PUT

//Valide

fetch("/users", {
    method: "put",
    headers:{
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        id:1,
        to_edit: {
            last: "Bonbeur",
            email: "jean.alashi@gmail.com"
        }
    })
})

// DELETE

fetch("/users", {
    method: "delete",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({id:1})
})

*/

require("./presentation/api").start(3000);