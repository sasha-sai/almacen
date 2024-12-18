let editingRow = null;  // Variable para almacenar la fila que está siendo editada

// Función para registrar o editar herramienta
document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const item = document.getElementById("item").value;
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const stock = document.getElementById("stock").value;
    const disponible = document.getElementById("disponible").value;

    if (editingRow) {
        // Si estamos editando, actualizamos la fila
        updateToolInHistory(editingRow, item, codigo, nombre, stock, disponible);
        editingRow = null; // Limpiar la fila editada
        document.getElementById("submit-btn").style.display = "inline";
        document.getElementById("save-btn").style.display = "none";
    } else {
        // Si no estamos editando, agregamos una nueva herramienta
        addToHistory(item, codigo, nombre, stock, disponible);
    }

    // Limpiar formulario
    this.reset();
});

// Agregar herramienta a la tabla
function addToHistory(item, codigo, nombre, stock, disponible) {
    const tableBody = document.getElementById("history-table").getElementsByTagName('tbody')[0];
    const row = tableBody.insertRow();

    row.innerHTML = `
        <td>${item}</td>
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${stock}</td>
        <td>${disponible}</td>
        <td>
            <button class="edit-btn" onclick="editTool(this)">Editar</button>
            <button class="delete-btn" onclick="deleteTool(this)">Eliminar</button>
        </td>
    `;
}

// Función para editar una herramienta
function editTool(button) {
    const row = button.parentElement.parentElement;
    const item = row.cells[0].textContent;
    const codigo = row.cells[1].textContent;
    const nombre = row.cells[2].textContent;
    const stock = row.cells[3].textContent;
    const disponible = row.cells[4].textContent;

    // Mostrar los valores en el formulario para editarlos
    document.getElementById("item").value = item;
    document.getElementById("codigo").value = codigo;
    document.getElementById("nombre").value = nombre;
    document.getElementById("stock").value = stock;
    document.getElementById("disponible").value = disponible;

    // Mostrar el botón de guardar y ocultar el de registrar
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("save-btn").style.display = "inline";

    // Establecer la fila como editada
    editingRow = row;
}

// Función para guardar los cambios de edición
function saveTool() {
    const item = document.getElementById("item").value;
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const stock = document.getElementById("stock").value;
    const disponible = document.getElementById("disponible").value;

    updateToolInHistory(editingRow, item, codigo, nombre, stock, disponible);
    editingRow = null; // Limpiar la fila editada

    // Limpiar formulario y cambiar botones
    document.getElementById("register-form").reset();
    document.getElementById("submit-btn").style.display = "inline";
    document.getElementById("save-btn").style.display = "none";
}

// Función para actualizar una herramienta en el historial
function updateToolInHistory(row, item, codigo, nombre, stock, disponible) {
    row.cells[0].textContent = item;
    row.cells[1].textContent = codigo;
    row.cells[2].textContent = nombre;
    row.cells[3].textContent = stock;
    row.cells[4].textContent = disponible;
}

// Función para eliminar una herramienta
function deleteTool(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
