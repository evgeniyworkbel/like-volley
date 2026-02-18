export type CoachModel = {
  id?: number;
  lastName: string;
  firstName: string;
  patronymicName: string;
  description: string;
  city?: string;
  cityLabel?: string;
  photo: {
    url: string;
    alt: string;
  };
};
