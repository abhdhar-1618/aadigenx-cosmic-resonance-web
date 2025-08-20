import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormData = await req.json();
    
    console.log('Received form data:', { name, email, phone, message });

    // Google Form submission URL (extract from https://forms.gle/QRbjmg5w6REopF587)
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScwFb0uQJgnbK9UXO_tSVa2KxTYHgsG7m9FOXI6Dw3xNwHvDA/formResponse";
    
    // Form data with entry field IDs
    // Note: These entry IDs need to be determined by inspecting the actual form
    // You'll need to inspect the Google Form to get the correct entry field IDs
    const formData = new FormData();
    formData.append('entry.123456789', name);     // Replace with actual entry ID for Name field
    formData.append('entry.987654321', email);    // Replace with actual entry ID for Email field  
    formData.append('entry.456789123', phone);    // Replace with actual entry ID for Phone field
    formData.append('entry.789123456', message);  // Replace with actual entry ID for Message field

    // Submit to Google Form
    const response = await fetch(googleFormUrl, {
      method: 'POST',
      body: formData,
    });

    console.log('Google Form response status:', response.status);
    console.log('Google Form response headers:', Object.fromEntries(response.headers.entries()));

    // Google Forms typically returns a redirect or 200 status on successful submission
    if (response.status === 200 || response.redirected || response.status === 302) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully to Google Forms' 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Google Form submission failed:', response.status, response.statusText);
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Failed to submit to Google Form',
        status: response.status 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.error('Error in submit-google-form function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});