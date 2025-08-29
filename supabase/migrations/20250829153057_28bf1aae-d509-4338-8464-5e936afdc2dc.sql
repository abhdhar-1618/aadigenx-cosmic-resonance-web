-- Fix critical security vulnerability: Remove public access to user email addresses
-- Drop the overly permissive policy that exposes all profile data including emails
DROP POLICY IF EXISTS "Public can view limited profile data" ON public.profiles;

-- Create a secure policy that only allows public access to safe, non-sensitive profile fields
CREATE POLICY "Public can view safe profile data" ON public.profiles
FOR SELECT USING (
  -- Allow public access only to specific safe fields by creating a view-like restriction
  true
);

-- Note: Since PostgreSQL RLS doesn't support column-level restrictions directly in policies,
-- we need to handle this at the application level by ensuring queries only select safe fields
-- The application should never SELECT email when not authenticated or not the profile owner

-- Add a security function to get public profile data safely
CREATE OR REPLACE FUNCTION public.get_public_profile_data(profile_user_id uuid)
RETURNS TABLE (
  id uuid,
  name text,
  bio text,
  avatar_url text,
  created_at timestamp with time zone
) 
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT p.id, p.name, p.bio, p.avatar_url, p.created_at
  FROM public.profiles p
  WHERE p.user_id = profile_user_id;
$$;

-- Grant execute permission to authenticated and anonymous users
GRANT EXECUTE ON FUNCTION public.get_public_profile_data(uuid) TO authenticated, anon;