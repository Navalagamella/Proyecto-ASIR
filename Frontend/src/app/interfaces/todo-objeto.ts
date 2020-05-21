//mismas propiedades que en la base de datos mongodb
export interface TodoObjetoI {
    _id: {type: string},
    grupo_id: {type: string},
    autor: {type: string},
    contenido: {type: string},
    completado: {type: boolean},
    publico: {type: boolean}
};
