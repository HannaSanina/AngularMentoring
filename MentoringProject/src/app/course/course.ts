import { ICourse } from '../icourse';

export class Course implements ICourse {
    name: string;
    duration: number;
    description: string;
    date: Date;
}
