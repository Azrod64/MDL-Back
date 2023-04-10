fetch("/users", {
    method: "get"
})
    .then((request) =>
        request.json())
        
    .then((data) =>
        buildTable(data)
    )
    .catch((error) => {
        console.error("Error:", error);
    });

function buildTable(text) {
    var table = document.getElementById("myTable");
    for (var i = 0; i < text.length; i++) {
        var row = `<tr>
                            <td><span class="p1-4">${text[i]["id"]}</span></td>
                            <td><span class="font-medium mb-0">${text[i]["last"]} ${text[i]["first"]}</span></td>
                            <td><span class="text-muted">${text[i]["company"]}</span></td>
                            <td><span class="text-muted">${text[i]["country"]}</span></td>
                            <td><span class="text-muted">${text[i]["email"]}</span></td>
                            <td><span class="text-muted">${text[i]["created_at"]}</span></td>
                            <td><button onclick="location.href='modif.html?id=${text[i]["id"]}'" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle m1-2"><i class="fa fa-edit"></i></button></td>
                        </tr>`;
        table.innerHTML += row;
    }
}
