import { BaseId } from "./common.model";
import { User } from "./user.model";

export class DailyReport extends BaseId {
  user: User;
  userId: number;

  totalDuration: number;

  duration0: number;
  duration1: number;
  duration2: number;
  duration3: number;
  duration4: number;
  duration5: number;
  duration6: number;
  duration7: number;
  duration8: number;
  duration9: number;
  duration10: number;
  duration11: number;

  date: string;
}
