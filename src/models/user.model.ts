import { BaseId } from "./common.model";

export class User extends BaseId {
  email: string;
  googleTokenId: string;
}
