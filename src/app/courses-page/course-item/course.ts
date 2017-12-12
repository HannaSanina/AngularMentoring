import { ICourse } from './icourse';

export class Course implements ICourse {
    title: string;
    duration: number;
    description: string;
    createdDate: Date;
    id: string;
    isTopRated: boolean;

    constructor(title: string, date: Date, duration: number, description: string) { 
        this.id = this.guid()
        this.title = title;
        this.createdDate = date;
        this.description = description;
        this.duration = duration;
        this.isTopRated = false;
    }

    private guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      }
}
