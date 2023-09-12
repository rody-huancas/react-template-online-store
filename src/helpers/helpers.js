export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('en-PE', {
        style: 'currency',
        currency: 'PEN'
    });
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)

    const opciones = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }

    return fechaNueva.toLocaleDateString("es-ES", opciones);
}


export const generarNumeroPaginas = (totalPages) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
}