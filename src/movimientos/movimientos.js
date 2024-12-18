// movements.js

// Ejemplo de datos de movimientos
const movementsData = [
    {   id:'0001',
        codigo: '40322',
        producto: 'Taladro',
        fechaEnvio: '2024-12-01 10:00',
        transporte: 'Juan Pérez',
        obra: 'Obra A',
        ceco: 'CECO001',
        fechaRecepcion: '2024-12-02 15:30',
        recibidoPor: 'Ana Gómez'
    },
    {   id:'0002',
        codigo: '002',
        producto: 'Martillo',
        fechaEnvio: '2024-12-05 12:00',
        transporte: 'Carlos García',
        obra: 'Obra B',
        ceco: 'CECO002',
        fechaRecepcion: '2024-12-06 13:45',
        recibidoPor: 'Luis Díaz'
    },
    // Agregar más movimientos según sea necesario
];

// Función para cargar los movimientos en la tabla
function loadMovements() {
    const tableBody = document.querySelector("#movement-table tbody");
    movementsData.forEach(movement => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
         <td>${movement.id}</td>
            <td>${movement.codigo}</td>
            <td>${movement.producto}</td>
            <td>${movement.fechaEnvio}</td>
            <td>${movement.transporte}</td>
            <td>${movement.obra}</td>
            <td>${movement.ceco}</td>
            <td>${movement.fechaRecepcion}</td>
            <td>${movement.recibidoPor}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Función para exportar los movimientos a un archivo CSV
function exportToCSV() {
    const header = ['Código', 'Producto', 'Fecha y Hora de Envío', 'Transporte', 'Obra', 'CECO', 'Fecha y Hora de Recepción', 'Recibido por'];
    const rows = movementsData.map(movement => [
        movement.codigo,
        movement.producto,
        movement.fechaEnvio,
        movement.transporte,
        movement.obra,
        movement.ceco,
        movement.fechaRecepcion,
        movement.recibidoPor
    ]);

    // Crear un archivo CSV
    let csvContent = "data:text/csv;charset=utf-8," + header.join(",") + "\n";
    rows.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    // Crear un enlace para descargar el archivo CSV
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'movimientos_report.csv');
    link.click();
}

// Llamar a la función de carga de movimientos
loadMovements();

// Agregar el evento al botón de exportar
document.getElementById("export-btn").addEventListener("click", exportToCSV);
