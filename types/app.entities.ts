export interface Application {
  id: string;
  shortCode: string;
  dateCreated: string;
  dateLastAccessed?: string;
  count?: number;
}

export interface ApplicationCreateArgs {
  shortCode?: string;
}
