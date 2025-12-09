export interface ServicePlan {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
}

export interface TeamMember {
    name: string;
    role: string;
    description: string;
    location: string;
    tags: ('fashion' | 'marketing')[]; // To filter team by department
    imageSeed?: string;
}

export interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: any;
}

export enum PageView {
    HOME = 'home',
    FASHION = 'fashion',
    MARKETING = 'marketing'
}

export enum SectionID {
    TOP = 'top',
    PROCESS = 'process',
    PRICING = 'pricing',
    COMPARISON = 'comparison',
    TEAM = 'team',
    CONTACT = 'contact'
}