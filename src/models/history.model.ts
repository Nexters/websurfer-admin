import { BaseId } from "./common.model";
import { User } from "./user.model";
import { Website } from "./website.model";

export class History extends BaseId {
  user: User;
  userId: number;

  website: Website;
  websiteId: number;

  href: string;

  title: string;
  description: string;
  duration: number;
}
