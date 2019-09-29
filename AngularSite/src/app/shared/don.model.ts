import { DonArticle } from './don-article.model';

export class Don {
    id: number;
    datePromesse: Date;
    dateReception: Date;
    dateAccepter: Date;
    etat: number;
    idDonateur: number;
    idResponsable: number;
    DonArticles: DonArticle[];
    total: number;
}
