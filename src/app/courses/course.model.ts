export enum COURSE_STATUS {
    'IN_PROGRESS' = 'IN_PROGRESS',
    'NOT_STARTED' = 'NOT_STARTED'
}

export enum COURSE_TYPE {
    'LIVE_CLASS' = 'LIVE_CLASS',
    'LESSON' = 'LESSON',
    'PRACTICE'= 'PRACTICE'
}

export interface ICourse {
    title: string;
    description: string;
    type: COURSE_TYPE;
    typeDescription: string;
    img: string;
}

export interface ILiveClass extends ICourse {
    document?: string;
}

export interface ICourseItem extends ICourse {
    status: COURSE_STATUS;
}
