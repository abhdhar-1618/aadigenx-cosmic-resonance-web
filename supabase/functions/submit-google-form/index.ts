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

    // Google Form submission URL
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScwFb0uQJgnbK9UXO_tSVa2KxTYHgsG7m9FOXI6Dw3xNwHvDA/formResponse";
    
    // To find the correct entry IDs for your form:
    // 1. Go to https://docs.google.com/forms/d/e/1FAIpQLScwFb0uQJgnbK9UXO_tSVa2KxTYHgsG7m9FOXI6Dw3xNwHvDA/viewform
    // 2. Right-click -> Inspect Element (or press F12)
    // 3. Look for input elements with name="entry.XXXXXXXXX"
    // 4. Replace the placeholder IDs below with the actual entry IDs
    
    const formData = new FormData();
    
    // IMPORTANT: Replace these placeholder entry IDs with actual ones from your Google Form
    // To find these, inspect your Google Form's HTML source code
    
    // Try common Google Form entry patterns - you need to replace these with actual IDs
    const entryMappings = [
      // Common entry ID patterns - replace with actual IDs from your form inspection
      { field: 'name', entry: 'entry.2005620554' },      // Example - replace with actual
      { field: 'email', entry: 'entry.1045781291' },     // Example - replace with actual
      { field: 'phone', entry: 'entry.1166974658' },     // Example - replace with actual  
      { field: 'message', entry: 'entry.839337160' }     // Example - replace with actual
    ];

    // Map form data to Google Form entries
    const dataMap = { name, email, phone, message };
    
    entryMappings.forEach(({ field, entry }) => {
      if (dataMap[field as keyof typeof dataMap]) {
        formData.append(entry, dataMap[field as keyof typeof dataMap]);
        console.log(`Mapping ${field} -> ${entry}: ${dataMap[field as keyof typeof dataMap]}`);
      }
    });

    // Add additional required fields for Google Forms
    formData.append('draftResponse', '[null,null,"0"]');
    formData.append('pageHistory', '0');
    formData.append('fvv', '1');
    formData.append('partialResponse', '[null,null,"0"]');
    formData.append('submitType', 'SUBMIT');

    console.log('Submitting to Google Form with FormData:', Array.from(formData.entries()));

    // Submit to Google Form with proper headers
    const response = await fetch(googleFormUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
    });

    console.log('Google Form response status:', response.status);
    console.log('Google Form response URL:', response.url);
    console.log('Google Form response redirected:', response.redirected);

    // Google Forms typically redirects to a confirmation page on successful submission
    // Status codes 200, 302, or if redirected indicates success
    if (response.status === 200 || response.redirected || response.status === 302 || response.url.includes('formResponse')) {
      console.log('Form submission appears successful');
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully to Google Forms',
        details: {
          status: response.status,
          redirected: response.redirected,
          finalUrl: response.url
        }
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Google Form submission may have failed:', response.status, response.statusText);
      const responseText = await response.text();
      console.log('Response body:', responseText.substring(0, 500)); // Log first 500 chars
      
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Google Form submission may have failed',
        details: {
          status: response.status,
          statusText: response.statusText,
          redirected: response.redirected
        }
      }), {
        status: 200, // Still return 200 to avoid frontend errors
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.error('Error in submit-google-form function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      details: 'Check the edge function logs for more information'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

console.log('Google Form submission edge function loaded successfully');