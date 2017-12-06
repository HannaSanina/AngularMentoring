import { ICourse } from './icourse';

export class Course implements ICourse {
    title: string;
    duration: number;
    description: string;
    date: Date;
    id: string;

    constructor(title: string, date: Date, duration: number, description: string) { 
        this.id = this.guid()
        this.title = title;
        this.date = date;
        this.description = description;
        this.duration = duration;
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
