import { Achievement } from "./achievement.model";
import { BaseId } from "./common.model";

export class Website extends BaseId {
  achievement: Achievement;
  achievementId: number;

  name: string;
  hostname: string;
  faviconUrl: string;
}
