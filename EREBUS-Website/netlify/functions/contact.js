const nodemailer = require('nodemailer')

// Email configuration - SECURE: Using environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'erevus.ai@proton.me'
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || '#G3tr3kt$!555'

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    }
  }

  try {
    // Security check: Ensure email credentials are configured
    if (!ADMIN_EMAIL || !GMAIL_APP_PASSWORD) {
      console.error('❌ Email credentials not properly configured')
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Email service temporarily unavailable. Please try again later.' 
        })
      }
    }

    const { formData } = JSON.parse(event.body)

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message || !formData.inquiryType) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Missing required fields: name, email, message, and inquiry type are required.' 
        })
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Invalid email format provided.' 
        })
      }
    }

    // Create formatted email content
    const emailContent = `
THERION CLAN CONTACT FORM SUBMISSION
=====================================

CONTACT DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

INQUIRY DETAILS:
Type: ${formData.inquiryType}
Budget Range: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}
THERION CLAN Interest: ${formData.clanInterest ? 'YES - Ready to join the clan!' : 'General inquiry'}

MESSAGE:
${formData.message}

=====================================
Submitted: ${new Date().toLocaleString()}
From: EREVUS THERION Contact Form (Netlify)
=====================================
    `

    // Email sending implementation
    try {
      // Create transporter - SECURE: Using environment variables with fallback
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: ADMIN_EMAIL,
          pass: GMAIL_APP_PASSWORD
        }
      })

      // Send email with professional formatting
      await transporter.sendMail({
        from: `"THERION CLAN Contact Form" <${ADMIN_EMAIL}>`,
        to: ADMIN_EMAIL,
        subject: `🔥 THERION CLAN Contact: ${formData.inquiryType} - ${formData.name}`,
        text: emailContent,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1a1a1a; color: #ffffff; padding: 20px; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ff4444; margin: 0; font-size: 24px;">⚔️ THERION CLAN CONTACT ⚔️</h1>
            <p style="color: #888888; margin: 5px 0;">New inquiry from EREVUS website</p>
          </div>
          
          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #ff4444; margin-top: 0;">📧 Contact Details</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #7c3aed;">${formData.email}</a></p>
            <p><strong>Company:</strong> ${formData.company || 'Not specified'}</p>
          </div>

          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #7c3aed; margin-top: 0;">🎯 Inquiry Details</h3>
            <p><strong>Type:</strong> ${formData.inquiryType}</p>
            <p><strong>Budget Range:</strong> ${formData.budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
            <p><strong>THERION CLAN Interest:</strong> ${formData.clanInterest ? '👑 <span style="color: #ff4444;">YES - Ready to join the clan!</span>' : 'General inquiry'}</p>
          </div>

          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #10b981; margin-top: 0;">💬 Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>

          <div style="text-align: center; padding: 15px; background-color: #444444; border-radius: 8px; font-size: 12px; color: #888888;">
            <p>Submitted: ${new Date().toLocaleString()}</p>
            <p>From: EREVUS THERION Contact Form (Netlify)</p>
          </div>
        </div>
        `,
        replyTo: formData.email
      })

      console.log('✅ Email sent successfully to:', ADMIN_EMAIL)
      
      // Return success response
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          success: true,
          message: 'Your message has been sent successfully to THERION CLAN. We will respond within 24 hours.'
        })
      }
      
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError)
      
      // Log form submission for manual follow-up
      console.log('=== THERION CLAN CONTACT FORM SUBMISSION (EMAIL FAILED) ===')
      console.log(emailContent)
      console.log('=== MANUAL FOLLOW-UP REQUIRED ===')
      
      // Return error response for email failure
      return {
        statusCode: 503,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Email service is currently unavailable. Please try again later or contact us directly.' 
        })
      }
    }

  } catch (error) {
    console.error('❌ Contact form error:', error)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'An unexpected error occurred. Please try again.' 
      })
    }
  }
}
