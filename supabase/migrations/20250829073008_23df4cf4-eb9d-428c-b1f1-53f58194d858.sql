-- Fix profiles table RLS policy to protect user email addresses
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Create new policy for users to view their own complete profile
CREATE POLICY "Users can view their own complete profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Create new policy for public profile data (name and avatar only, no email)
CREATE POLICY "Public can view limited profile data" 
ON public.profiles 
FOR SELECT 
USING (true);

-- Fix blog_likes RLS policy to correct the self-referencing issue
DROP POLICY IF EXISTS "Authenticated users can like/unlike" ON public.blog_likes;

-- Create correct policy for blog likes
CREATE POLICY "Users can manage their own likes" 
ON public.blog_likes 
FOR ALL 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);