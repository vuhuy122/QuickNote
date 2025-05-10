import { homeIcon, summary } from "../assets/Images";
import { Category } from "../types/note";

// 1. Danh sách tên category
export const CATEGORIES = {
  WORK_STUDY: "Work and Study",
  LIFE: "Life",
  HEALTH_WELLBEING: "Health and wellness",
} as const;

export const CATEGORY_LIST = Object.values(CATEGORIES) as Category[];

// 2. Map from category string → icon + icon
export const CATEGORY_META = [
  {
    name: CATEGORIES.WORK_STUDY,
    icon: homeIcon.icon_pencel,
    icon_summary: summary.icon_work_nd_study,
  },
  {
    name: CATEGORIES.LIFE,
    icon: homeIcon.icon_bell,
    icon_summary: summary.icon_home_life,
  },
  {
    name: CATEGORIES.HEALTH_WELLBEING,
    icon: homeIcon.icon_health,
    icon_summary: summary.icon_health_and_wellness,
  },
] as const;
