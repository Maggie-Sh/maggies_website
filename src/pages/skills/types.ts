export interface Skill {
  id: number;
  skill_highlighted?: string;
  skill?: string;
}

export interface Data {
  professional_skills: Array<Skill>;
  soft_skills: Array<Skill>;
}
