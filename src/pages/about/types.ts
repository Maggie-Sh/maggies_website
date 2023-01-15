interface Education {
  id: number;
  org_name: string;
  period: string;
  subject: string;
}

export interface Data {
  text: string;
  education: Array<Education>;
}
