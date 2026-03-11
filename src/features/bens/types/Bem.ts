import { Midia } from "./Midia"

export type Bem = {
    id: number;
    title: string;
    subtitulo?: string;
    date: string;
    image: string;
    description: string;
    localizacao: string;
    estados: string[];
    registro: string;
    imagemLocalizacao?: string;
    livroId?: string;
    midias?: Midia[];
}