//mismas propiedades que en la base de datos mongodb
export interface TodoObjetoI {
    _id: string,
    grupo_id: string,
    autor: string,
    contenido: string,
    completado: boolean,
    publico: boolean
};
