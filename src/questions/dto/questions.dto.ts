export class QuestionsDto {
    id?: string;
    idUser: string;
    inRevision: boolean;
    title: string;
    status: string;
    approved: boolean;
    active: boolean;
    idCourse: string[];
    imgs: string[];
    correct: number;
    describe: string;
    schoolSubject: string;
    alternatives: [];
}
