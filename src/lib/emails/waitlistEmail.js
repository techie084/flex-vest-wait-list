const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      body {
        font-family: 'Inter', Arial, sans-serif;
        background: #f8fafc;
        padding: 0;
        margin: 0;
      }
      .container {
        max-width: 480px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 16px;
        padding: 32px 24px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        animation: fadeIn 0.7s ease forwards;
      }
      h1 {
        font-size: 22px;
        color: #111827;
        margin-bottom: 12px;
        text-align: center;
      }
      p {
        color: #4b5563;
        font-size: 15px;
        line-height: 1.6;
        text-align: center;
      }
      .cta {
        display: inline-block;
        margin-top: 24px;
        background: linear-gradient(135deg, #6366f1, #4f46e5);
        color: #fff;
        text-decoration: none;
        padding: 12px 28px;
        border-radius: 10px;
        font-weight: 600;
        transition: all 0.3s ease;
      }
      .cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(99,102,241,0.4);
      }
      .footer {
        margin-top: 32px;
        font-size: 12px;
        color: #9ca3af;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>You're on the Waitlist 🎉</h1>
      <p>Hey there 👋 ${name}<br/>
      Thanks for signing up for <strong>Flex Vest </strong> — we’re building something awesome, and you’ll be one of the first to try it.</p>

      <p>We’ll keep you posted when we’re live. Until then, stay tuned and get ready to record your story.</p>

      <div style="text-align:center;">
        <a href="https://yourappdomain.com" class="cta">Visit Our Site</a>
      </div>

      <p class="footer">©2025 Flex Vest. All rights reserved.</p>
    </div>
  </body>
</html>
`;

export default html;
