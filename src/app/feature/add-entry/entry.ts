export interface Entry {
    action: any;
    pronoun: any;
    noun: any;
    date: any;
    lifeMilestone: boolean;
}

export class BaseEntry implements Entry {
    action: any;
    pronoun: any;
    noun: any;
    date: string;
    lifeMilestone: boolean;

    constructor(){

    }
}
