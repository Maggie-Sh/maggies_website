export interface Responsibility {
  id: number;
  responsibility: string;
}

export interface Job {
  id: number;
  position: string;
  period: string;
  responsibilities: Array<Responsibility>;
}

export type Data = Array<Job>;
