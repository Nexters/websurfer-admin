import { BaseId } from "./common.model";
import { Website } from "./website.model";

export class Achievement extends BaseId {
  websites: Website[];

  name: string;
  color: string;
  imageUrl: string;
  cardImageUrl: string;
  category: string;
}
