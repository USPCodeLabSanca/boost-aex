import { UUID } from "crypto";

type Condition = 'new' | 'used' | 'refurbished' | 'broken';

const Condition = {
  New: 'new' as Condition,
  Used: 'used' as Condition,
  Refurbished: 'refurbished' as Condition,
  Broken: 'broken' as Condition,
}

type UserRole = "user" | "admin";

const UserRole = {
    User: "user" as UserRole,
    Admin: "admin" as UserRole,
}

export interface UserType{
    id: string;
    display_name: string;
    slug: string;
    email: string;
    photo_url: string | null;
    university: string | null;
    whatsapp: string | null;
    telegram: string | null;
    verified: boolean;
    role: UserRole;
    created_at: Date;
    updated_at: Date;
}



export interface CategoryType{
    id: number;
    name: string;
    icon: string;
    parent_id: number | null;
    parent: CategoryType | null;
    children: CategoryType[];
}


export interface ListingType{
    id: UUID;
    user_id: string;
    user: UserType;
    category_id: number;
    category: CategoryType;
    title: string;
    slug: string;
    description: string;
    price: number;
    condition: Condition;
    is_negotiable: boolean;
    seller_can_deliver: boolean;
    location: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface ListingImageType{
    id: UUID;
    listing_id: UUID;
    listing: ListingType;
    src: string;
    order: number;
}

export interface ProfileType{
    display_name: string;
    slug: string;
    email: string;
    photo_url: string | null;
    university: string | null;
    whatsapp: string | null;
    telegram: string | null;
    verified: boolean;
    created_at: Date;
    role: UserRole;
}


export interface FavoriteType{
    user_id: string;
    user: UserType;
    listing_id: UUID;
    listing: ListingType;
    created_at: Date;
}