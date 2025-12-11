document.getElementById("in-date").valueAsDate = new Date();


addEditorRow();


function addEditorRow() {
 const tbody = document.getElementById("editor-rows");
 const tr = document.createElement("tr");
 tr.innerHTML = `
               <td><input type="text" class="item-desc" placeholder="Description" oninput="updatePreview()"></td>
               <td><input type="number" class="item-qty" value="1" oninput="updatePreview()"></td>
               <td><input type="number" class="item-price" value="0" oninput="updatePreview()"></td>
               <td><button class="btn btn-delete" onclick="removeRow(this)">X</button></td>
           `;
 tbody.appendChild(tr);
 updatePreview();
}


function removeRow(btn) {
 const row = btn.parentNode.parentNode;
 row.parentNode.removeChild(row);
 updatePreview();
}


function updatePreview() {
 document.getElementById("out-header").innerText =document.getElementById("in-header").value;
 document.getElementById("out-num").innerText =document.getElementById("in-num").value;
 document.getElementById("out-date").innerText =document.getElementById("in-date").value;


 document.getElementById("out-from-name").innerText =
   document.getElementById("in-from-name").value || "Company";
 document.getElementById("out-from-address").innerText =
   document.getElementById("in-from-address").value;


 document.getElementById("out-to-name").innerText =
   document.getElementById("in-to-name").value || "Client Name";
 document.getElementById("out-to-address").innerText =
   document.getElementById("in-to-address").value;


 const editorRows = document.querySelectorAll("#editor-rows tr");
 const previewBody = document.getElementById("preview-rows");
 previewBody.innerHTML = "";


 let grandTotal = 0;


 editorRows.forEach((row) => {
   const desc = row.querySelector(".item-desc").value;
   const qty = parseFloat(row.querySelector(".item-qty").value) || 0;
   const price = parseFloat(row.querySelector(".item-price").value) || 0;
   const total = qty * price;
   grandTotal += total;


   const newRow = document.createElement("tr");
   newRow.innerHTML = `
                   <td style="padding: 10px; border-bottom: 1px solid #eee;">${desc}</td>
                   <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;"> ${qty}</td>
                   <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${price.toFixed(
                     2
                   )}</td>
                   <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;"><strong>₹${total.toFixed(
                     2
                   )}</strong></td>
               `;
   previewBody.appendChild(newRow);
 });


 document.getElementById("out-total").innerText = grandTotal.toFixed(2);
}
