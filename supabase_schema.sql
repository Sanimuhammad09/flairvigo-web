-- Run this entire script in the Supabase SQL Editor to initialize your database schema.

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table (extends Supabase auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  first_name text,
  last_name text,
  avatar text,
  role text default 'USER', -- 'USER' or 'ADMIN'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Categories Table
create table if not exists public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  description text,
  image text,
  parent_id uuid references public.categories(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Products Table
create table if not exists public.products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  description text,
  fabric_details text,
  care_instructions text,
  base_price numeric not null default 0,
  is_featured boolean default false,
  is_best_seller boolean default false,
  is_active boolean default true,
  category_id uuid references public.categories(id),
  collection_id uuid,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Product Variants Table
create table if not exists public.product_variants (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products(id) on delete cascade not null,
  sku text not null unique,
  color text,
  color_hex text,
  size text,
  price_offset numeric default 0,
  inventory integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Orders Table
create table if not exists public.orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id),
  order_number text unique not null,
  status text default 'pending',
  subtotal numeric default 0,
  tax numeric default 0,
  shipping_cost numeric default 0,
  discount_amount numeric default 0,
  total_amount numeric not null,
  shipping_address jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Order Items Table
create table if not exists public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  product_id uuid references public.products(id),
  variant_id uuid references public.product_variants(id),
  quantity integer not null,
  price numeric not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. Store Settings Table
create table if not exists public.store_settings (
  id text primary key default 'default',
  banner_settings jsonb,
  free_shipping_threshold numeric,
  flat_shipping_rate numeric,
  tax_rate numeric,
  currency text default 'NGN',
  contact_email text,
  contact_phone text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert default store settings
insert into public.store_settings (id, banner_settings, currency)
values (
  'default', 
  '[{"url": "/images/hero_burgundy.png", "link": "/women"}, {"url": "/images/hero_navy.png", "link": "/women"}]'::jsonb, 
  'NGN'
) on conflict (id) do nothing;

-- Set up Row Level Security (RLS)

-- Profiles
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on public.profiles for select using ( true );
create policy "Users can insert their own profile." on public.profiles for insert with check ( auth.uid() = id );
create policy "Users can update own profile." on public.profiles for update using ( auth.uid() = id );

-- Products & Categories (Public read, admin write)
alter table public.products enable row level security;
alter table public.categories enable row level security;
alter table public.product_variants enable row level security;

create policy "Products are viewable by everyone." on public.products for select using ( true );
create policy "Categories are viewable by everyone." on public.categories for select using ( true );
create policy "Variants are viewable by everyone." on public.product_variants for select using ( true );

-- Orders (Users can read their own, admin can read all)
alter table public.orders enable row level security;
create policy "Users can view their own orders." on public.orders for select using ( auth.uid() = user_id );
create policy "Users can insert their own orders." on public.orders for insert with check ( auth.uid() = user_id );

alter table public.order_items enable row level security;
create policy "Users can view their own order items." on public.order_items for select using ( 
  exists (select 1 from public.orders where orders.id = order_items.order_id and orders.user_id = auth.uid())
);
create policy "Users can insert their own order items." on public.order_items for insert with check (
  exists (select 1 from public.orders where orders.id = order_items.order_id and orders.user_id = auth.uid())
);

-- Store Settings (Public read)
alter table public.store_settings enable row level security;
create policy "Settings are viewable by everyone." on public.store_settings for select using ( true );
