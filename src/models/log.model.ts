import { BaseId } from "./common.model";

export class Log extends BaseId {
  category: string;
  text: string;
}
