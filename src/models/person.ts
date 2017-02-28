export class Person {
    constructor(
        public $key: string,
        public firstName: string,
        public lastName: string,
        public nickName: string,
        public dateOfBirth: Date,
        public dateAdded: Date,
    ) {}
}