 const entry = document.getElementById("entry");
 entry.addEventListener("click", displayDetails);

    let row = 1;

    function displayDetails() {
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const amount = document.getElementById("amount").value;
        
        
        if(!name || !date || !amount) {
            alert("Fill all boxes");
            return;
        }
        const display = document.getElementById("display");

        const newRow = display.insertRow(row);
        
        const cell1 = newRow.insertCell(0); 
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = name;
        cell2.innerHTML = date;
        cell3.innerHTML = amount;

        row++;
    }

