let editingRow = null;  // Variable para almacenar la fila que está siendo editada

// Función para registrar o editar usuario
document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;
    const rol = document.getElementById("rol").value;

    if (editingRow) {
        // Si estamos editando, actualizamos la fila
        updateUserInTable(editingRow, dni, nombre, rol);
        editingRow = null; // Limpiar la fila editada
        document.getElementById("submit-btn").style.display = "inline";
        document.getElementById("save-btn").style.display = "none";
    } else {
        // Si no estamos editando, agregamos un nuevo usuario
        addUserToTable(dni, nombre, rol);
    }

    // Limpiar formulario
    this.reset();
});

// Agregar usuario a la tabla
function addUserToTable(dni, nombre, rol) {
    const tableBody = document.getElementById("user-table").getElementsByTagName('tbody')[0];
    const row = tableBody.insertRow();

    row.innerHTML = `
        <td>${dni}</td>
        <td>${nombre}</td>
        <td>${rol}</td>
        <td>
            <button class="edit-btn" onclick="editUser(this)">Editar</button>
            <button class="delete-btn" onclick="deleteUser(this)">Eliminar</button>
        </td>
    `;
}

// Función para editar un usuario
function editUser(button) {
    const row = button.parentElement.parentElement;
    const dni = row.cells[0].textContent;
    const nombre = row.cells[1].textContent;
    const rol = row.cells[2].textContent;

    // Mostrar los valores en el formulario para editarlos
    document.getElementById("dni").value = dni;
    document.getElementById("nombre").value = nombre;
    document.getElementById("rol").value = rol;

    // Mostrar el botón de guardar y ocultar el de registrar
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("save-btn").style.display = "inline";

    // Establecer la fila como editada
    editingRow = row;
}

// Función para guardar los cambios de edición
function saveUser() {
    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;
    const rol = document.getElementById("rol").value;

    updateUserInTable(editingRow, dni, nombre, rol);
    editingRow = null; // Limpiar la fila editada

    // Limpiar formulario y cambiar botones
    document.getElementById("register-form").reset();
    document.getElementById("submit-btn").style.display = "inline";
    document.getElementById("save-btn").style.display = "none";
}

// Función para actualizar un usuario en la tabla
function updateUserInTable(row, dni, nombre, rol) {
    row.cells[0].textContent = dni;
    row.cells[1].textContent = nombre;
    row.cells[2].textContent = rol;
}

// Función para eliminar un usuario
function deleteUser(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
