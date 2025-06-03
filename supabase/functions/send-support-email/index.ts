
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message } = await req.json();

    console.log('Received support request:', { name, email, phone, subject });

    // In a real implementation, you would:
    // 1. Send an email to your support team
    // 2. Create a ticket in your support system
    // 3. Send a confirmation email to the user

    // For now, we'll just log the request and return success
    const supportTicket = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      subject,
      message,
      status: 'received',
      created_at: new Date().toISOString(),
    };

    console.log('Support ticket created:', supportTicket);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Support request received successfully',
        ticket_id: supportTicket.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error processing support request:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to process support request' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
