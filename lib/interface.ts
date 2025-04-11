export interface Task {
  id: number;
  createdAt: string;
  updated: string;
  title: string;
  description: string;
  done: boolean;
}

export interface LinkInterface {
  label: string;
  href: string;
  subHref?: string[];
}
