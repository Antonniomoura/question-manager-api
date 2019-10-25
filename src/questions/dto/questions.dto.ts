export class QuestionsDto {
    id?: string;
    idUser: string;
    inRevision: boolean;
    title: string;
    status: string;
    approved: boolean;
    active: boolean;
    idCourse: string;
    describe: string;
    schoolSubject: string;
    alternatives: [];
}
