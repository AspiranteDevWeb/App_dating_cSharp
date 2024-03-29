import {User} from "./user";

export class UserParams {
  gender:string;
  minAge=18;
  maxAge=1399;
  pageNumber=1;
  pageSize=5;
  orderBy = 'lastActive';

  constructor(user: User) {
    this.gender= user.gender === 'female' ? 'male' : 'female'
  }
}
