-- 1. Add images column to products if it doesn't exist
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS images jsonb;

-- 2. Create a default category if none exists (so we can attach products to it)
INSERT INTO public.categories (id, name, slug, description)
VALUES ('00000000-0000-0000-0000-000000000001', 'Premium Scrubs', 'premium-scrubs', 'High quality medical apparel')
ON CONFLICT (slug) DO NOTHING;

-- 3. Insert Featured and Best Selling Products
INSERT INTO public.products (name, slug, description, base_price, is_featured, is_best_seller, category_id, images)
VALUES 
(
  'Leon™ Three-Pocket Scrub Top', 
  'leon-three-pocket-scrub-top', 
  'Our signature scrub top with three pockets, tailored fit, and ultra-soft fabric.', 
  45000, 
  true, 
  true, 
  (SELECT id FROM public.categories WHERE slug = 'premium-scrubs' LIMIT 1),
  '[{"url": "/images/home1.jpg", "isMain": true}]'::jsonb
),
(
  'Catalina™ Jogger Scrub Pants', 
  'catalina-jogger-scrub-pants', 
  'Athletic-inspired jogger pants designed for extreme comfort during long shifts.', 
  55000, 
  true, 
  true, 
  (SELECT id FROM public.categories WHERE slug = 'premium-scrubs' LIMIT 1),
  '[{"url": "/images/cat_scrub_dresses.png", "isMain": true}]'::jsonb
),
(
  'Rafael™ Lab Coat', 
  'rafael-lab-coat', 
  'Professional, tailored lab coat with fluid-resistant technology.', 
  85000, 
  true, 
  false, 
  (SELECT id FROM public.categories WHERE slug = 'premium-scrubs' LIMIT 1),
  '[{"url": "/images/hero_navy.png", "isMain": true}]'::jsonb
),
(
  'Sofia™ Zip-Up Fleece', 
  'sofia-zip-up-fleece', 
  'Cozy fleece jacket perfect for cold hospital environments.', 
  65000, 
  true, 
  false, 
  (SELECT id FROM public.categories WHERE slug = 'premium-scrubs' LIMIT 1),
  '[{"url": "/images/hero_moss.png", "isMain": true}]'::jsonb
)
ON CONFLICT (slug) DO UPDATE 
SET images = EXCLUDED.images,
    is_featured = EXCLUDED.is_featured,
    is_best_seller = EXCLUDED.is_best_seller;

-- 4. Insert variants so they don't say "Waitlist Available"
INSERT INTO public.product_variants (product_id, sku, color, size, inventory)
SELECT id, slug || '-NVY-M', 'Navy', 'M', 50
FROM public.products
ON CONFLICT (sku) DO UPDATE SET inventory = 50;
