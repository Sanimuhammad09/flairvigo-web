-- WARNING: THIS WILL DROP ALL EXISTING TABLES AND RECREATE THEM
-- This ensures your database exactly matches what the frontend expects.

DROP TABLE IF EXISTS public.order_items CASCADE;
DROP TABLE IF EXISTS public.orders CASCADE;
DROP TABLE IF EXISTS public.product_variants CASCADE;
DROP TABLE IF EXISTS public.products CASCADE;
DROP TABLE IF EXISTS public.categories CASCADE;
DROP TABLE IF EXISTS public.store_settings CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  first_name text,
  last_name text,
  avatar text,
  role text default 'USER', 
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Categories Table
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  description text,
  image text,
  parent_id uuid references public.categories(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Products Table (Includes base_price and images)
create table public.products (
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
  images jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Product Variants Table
create table public.product_variants (
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
create table public.orders (
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
create table public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  product_id uuid references public.products(id),
  variant_id uuid references public.product_variants(id),
  quantity integer not null,
  price numeric not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. Store Settings Table
create table public.store_settings (
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

-- === INSERT SEED DATA ===

-- Store Settings Seed
insert into public.store_settings (id, banner_settings, currency)
values (
  'default', 
  '[{"url": "/images/hero_burgundy.png", "link": "/women"}, {"url": "/images/hero_navy.png", "link": "/women"}]'::jsonb, 
  'NGN'
);

-- Category Seed
INSERT INTO public.categories (id, name, slug, description)
VALUES ('00000000-0000-0000-0000-000000000001', 'Premium Scrubs', 'premium-scrubs', 'High quality medical apparel');

-- Featured Products Seed
INSERT INTO public.products (name, slug, description, base_price, is_featured, is_best_seller, category_id, images)
VALUES 
(
  'Leon™ Three-Pocket Scrub Top', 
  'leon-three-pocket-scrub-top', 
  'Our signature scrub top with three pockets, tailored fit, and ultra-soft fabric.', 
  45000, true, true, 
  '00000000-0000-0000-0000-000000000001',
  '[{"url": "/images/home1.jpg", "isMain": true}]'::jsonb
),
(
  'Catalina™ Jogger Scrub Pants', 
  'catalina-jogger-scrub-pants', 
  'Athletic-inspired jogger pants designed for extreme comfort during long shifts.', 
  55000, true, true, 
  '00000000-0000-0000-0000-000000000001',
  '[{"url": "/images/cat_scrub_dresses.png", "isMain": true}]'::jsonb
),
(
  'Rafael™ Lab Coat', 
  'rafael-lab-coat', 
  'Professional, tailored lab coat with fluid-resistant technology.', 
  85000, true, false, 
  '00000000-0000-0000-0000-000000000001',
  '[{"url": "/images/hero_navy.png", "isMain": true}]'::jsonb
),
(
  'Sofia™ Zip-Up Fleece', 
  'sofia-zip-up-fleece', 
  'Cozy fleece jacket perfect for cold hospital environments.', 
  65000, true, false, 
  '00000000-0000-0000-0000-000000000001',
  '[{"url": "/images/hero_moss.png", "isMain": true}]'::jsonb
);

-- Variant Seed
INSERT INTO public.product_variants (product_id, sku, color, size, inventory)
SELECT id, slug || '-NVY-M', 'Navy', 'M', 50
FROM public.products;

-- === ROW LEVEL SECURITY ===
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on public.profiles for select using ( true );

alter table public.products enable row level security;
create policy "Products are viewable by everyone." on public.products for select using ( true );

alter table public.categories enable row level security;
create policy "Categories are viewable by everyone." on public.categories for select using ( true );

alter table public.product_variants enable row level security;
create policy "Variants are viewable by everyone." on public.product_variants for select using ( true );

alter table public.orders enable row level security;
create policy "Users can view their own orders." on public.orders for select using ( auth.uid() = user_id );

alter table public.order_items enable row level security;
create policy "Users can view their own order items." on public.order_items for select using ( 
  exists (select 1 from public.orders where orders.id = order_items.order_id and orders.user_id = auth.uid())
);

alter table public.store_settings enable row level security;
create policy "Settings are viewable by everyone." on public.store_settings for select using ( true );
