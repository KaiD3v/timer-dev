export interface ProjectProps {
  name: string | null;
  id: string;
  userId: string;
  categoryId: string | null;
  timer: number | null;
  createdAt: Date;
  updatedAt: Date;
}
