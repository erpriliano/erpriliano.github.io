export interface ICareer {
    year: string;
    title: string;
    description: string;
}

export interface IDescription {
    description: string;
}

export interface IImage {
    alt: string;
    src: string;
}

export interface ISkill {
    title: string;
    images: IImage[];
}

export interface IRoute {
    to: string;
    title: string;
}