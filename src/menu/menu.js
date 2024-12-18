// Lista de herramientas disponibles (puedes agregar más)
const tools = [
    "Taladro",
    "Martillo",
    "Destornillador",
    "Alicates",
    "Sierra",
    "Lijadora",
    "Pistola de calor"
];

// Función para actualizar la lista de herramientas en el desplegable
function updateToolList() {
    const toolInput = document.getElementById("herramienta");
    const toolList = document.getElementById("herramienta-list");
    
    const searchText = toolInput.value.toLowerCase();

    // Filtrar las herramientas que coinciden con el texto de búsqueda
    const filteredTools = tools.filter(tool => tool.toLowerCase().includes(searchText));

    // Limpiar el desplegable
    toolList.innerHTML = '';

    // Agregar las herramientas filtradas al desplegable
    filteredTools.forEach(tool => {
        const option = document.createElement("option");
        option.value = tool;
        option.textContent = tool;
        toolList.appendChild(option);
    });
}

// Función para agregar la herramienta seleccionada a la lista de herramientas seleccionadas
function addTool() {
    const toolList = document.getElementById("herramienta-list");
    const selectedTools = document.getElementById("selected-tools");

    // Obtener la herramienta seleccionada
    const selectedTool = toolList.value;

    // Crear un nuevo elemento de lista para la herramienta seleccionada
    if (selectedTool && !isToolInList(selectedTool)) {
        const li = document.createElement("li");
        li.textContent = selectedTool;
        
        // Crear un botón para eliminar la herramienta de la lista
        const removeButton = document.createElement("span");
        removeButton.textContent = "X";
        removeButton.classList.add("remove-tool");
        removeButton.onclick = function() {
            li.remove();
        };

        li.appendChild(removeButton);
        selectedTools.appendChild(li);
    }
}

// Función para verificar si la herramienta ya está en la lista de seleccionadas
function isToolInList(tool) {
    const selectedTools = document.getElementById("selected-tools");
    const items = selectedTools.getElementsByTagName("li");
    
    for (let item of items) {
        if (item.textContent.includes(tool)) {
            return true;
        }
    }
    return false;
}

// Agregar evento de búsqueda
document.getElementById("herramienta").addEventListener("input", updateToolList);

// Inicializar la lista de herramientas
updateToolList();
