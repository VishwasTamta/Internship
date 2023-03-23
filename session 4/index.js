fetch('http://localhost:8080/sponser/getSponsers',
    {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((data) => data.json())
    .then((data) => {
        const mainDiv = document.getElementById('main-div');
        const table = document.createElement('table');
        // table.append(tr)
        const data1 = data.sponsers.map((sponser) => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.innerHTML = sponser._id
            tr.append(td);
            table.append(tr);
            // td.innerHTML = sponser.name;
            // tr.append(td);
            // table.append(tr)
        })
        mainDiv.append(table)
        console.log(data)
    })
    .catch((err) => console.log(err))