const TOKEN = process.env.INFOJOBS_TOKEN ?? '';

export interface APIOffers {
  currentPage: number;
  pageSize: number;
  totalResults: number;
  currentResults: number;
  totalPages: number;
  availableSortingMethods: string[];
  sortBy: string;
  sinceDate: string;
  items: Item[];
}

interface Item {
  id: string;
  title: string;
  province: Province;
  city: string;
  link: string;
  category: Category;
  contractType: ContractType;
  subcategory: Subcategory;
  salaryMin: SalaryMin;
  salaryMax: SalaryMax;
  salaryPeriod: SalaryPeriod;
  experienceMin: ExperienceMin;
  workDay: WorkDay;
  study: Study;
  teleworking: Teleworking;
  published: string;
  updated: string;
  author: Author;
  requirementMin: string;
  bold: boolean;
  applications: string;
  subSegment: number;
  executive: boolean;
  salaryDescription: string;
  multiProvince: boolean;
  urgent: boolean;
  color: boolean;
}

interface Province {
  id: number;
  value: string;
}

interface Category {
  id: number;
  value: string;
}

interface ContractType {
  id: number;
  value: string;
}

interface Subcategory {
  id: number;
  value: string;
}

interface SalaryMin {
  id: number;
  value: string;
}

interface SalaryMax {
  id: number;
  value: string;
}

interface SalaryPeriod {
  id: number;
  value: string;
}
interface ExperienceMin {
  id: number;
  value: string;
}

interface WorkDay {
  id: number;
  value: string;
}
interface Study {
  id: number;
  value: string;
}

interface Teleworking {
  id: number;
  value: string;
}

interface Author {
  id: string;
  privateId: number;
  name: string;
  uri: string;
  logoUrl: string;
  corporateResponsive: boolean;
  showCorporativeHeader: boolean;
}

export async function getListOffers(path: string) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${TOKEN}`,
  };
  const url =
    'https://api.infojobs.net/api/9/offer?category=informatica-telecomunicaciones';
  const response = await fetch(url, { headers });

  const { items }: { items: APIOffers[] } = await response.json();
  return items;
}
