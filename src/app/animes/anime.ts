
export class Anime {
    id: number;
    name: string;
    descripcion: string;
    rating: number;
    episodios: number;
    categoria: string;
    estudio: string;
    imagen: string;

    constructor(
        id: number,
    name: string,
    descripcion: string,
    rating: number,
    episodios: number,
    categoria: string,
    estudio: string,
    imagen: string,

    ){
        this.id=id;
        this.name=name;
        this.descripcion= descripcion;
        this.rating = rating;
        this.episodios = episodios;
        this.categoria = categoria;
        this.estudio = estudio;
        this.imagen = imagen;

    }
          

}
