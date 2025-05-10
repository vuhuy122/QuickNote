export const CATEGORIES = {
  WORK_STUDY: "Work and Study",
  LIFE: "Life",
  HEALTH_WELLBEING: "Health and Well-being",
} as const;

export const CATEGORY_LIST = Object.values(CATEGORIES) as string[];
