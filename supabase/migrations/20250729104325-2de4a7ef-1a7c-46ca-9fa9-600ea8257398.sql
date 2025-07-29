-- Fix security definer functions with proper search path
DROP FUNCTION IF EXISTS public.generate_slug(TEXT);
DROP FUNCTION IF EXISTS public.increment_blog_views(UUID);

-- Recreate functions with proper search path
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(
        regexp_replace(title, '[^a-zA-Z0-9\s]', '', 'g'),
        '\s+', '-', 'g'
      ),
      '^-|-$', '', 'g'
    )
  );
END;
$$;

-- Function to increment blog views with proper search path
CREATE OR REPLACE FUNCTION public.increment_blog_views(blog_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE blogs 
  SET views = views + 1 
  WHERE id = blog_id;
END;
$$;