import { BaseId } from "./common.model";

export class User extends BaseId {
  hash: string;
  googleTokenId: string;
}
