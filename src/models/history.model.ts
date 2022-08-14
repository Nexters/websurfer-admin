import { BaseId } from "./common.model";
import { User } from "./user.model";

export class History extends BaseId {
  user: User;
  userId: number;

  websiteId: number;

  href: string;

  title: string;
  description: string;
  duration: number;
}
