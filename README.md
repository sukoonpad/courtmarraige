<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Court Marriage & Registration Services</title>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Poppins', sans-serif; line-height: 1.6; color: #333; background: #f4f7f6; padding-bottom: 70px; }

        /* Header */
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        .logo { font-size: 1.4rem; font-weight: 700; text-decoration: none; color: white; display: flex; align-items: center; gap: 10px; }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80');
            background-size: cover;
            background-position: center;
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            padding: 100px 20px 60px;
        }

        .hero-content h1 { font-size: 2.2rem; margin-bottom: 1rem; }
        .hero-content p { font-size: 1.1rem; margin-bottom: 2rem; }

        /* Services */
        .services { padding: 60px 20px; max-width: 1200px; margin: 0 auto; }
        .section-title { text-align: center; margin-bottom: 40px; font-size: 1.8rem; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .service-card { background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); text-align: center; }
        .service-icon { font-size: 2.5rem; color: #667eea; margin-bottom: 1rem; }

        /* Documents Mobile View */
        .documents { padding: 60px 20px; background: #fff; }
        .doc-grid { display: grid; grid-template-columns: 1fr; gap: 15px; }
        .doc-item { padding: 1.5rem; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #764ba2; }

        /* Contact Form */
        .contact { background: #764ba2; color: white; padding: 60px 20px; }
        .contact-form { max-width: 500px; margin: 20px auto; background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; backdrop-filter: blur(5px); }
        .form-group { margin-bottom: 15px; text-align: left; }
        .form-group label { display: block; margin-bottom: 5px; }
        .form-group input, .form-group select { width: 100%; padding: 12px; border-radius: 8px; border: none; }
        .submit-btn { width: 100%; padding: 15px; background: #ff6b6b; color: white; border: none; border-radius: 50px; font-weight: bold; cursor: pointer; }

        /* 🔥 MOBILE FLOATING BAR (Sticky) */
        .mobile-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 65px;
            display: flex;
            z-index: 9999;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
        }
        .bar-btn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: 1rem;
            gap: 8px;
        }
        .btn-call { background: #d4af37; }
        .btn-wa { background: #25d366; }

        /* Navigation Hide for Mobile */
        @media (max-width: 768px) {
            .nav-links { display: none; }
            .hero-content h1 { font-size: 1.8rem; }
        }
    </style>
</head>
<body>

    <header>
        <nav>
            <a href="#" class="logo"><i class="fas fa-balance-scale"></i> CourtMarriage.in</a>
            <div style="font-size: 1.5rem;"><i class="fas fa-bars"></i></div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Fast & Legal Court Marriage</h1>
            <p>Get married in 24-48 hours. 100% Confidential & Legal.</p>
            <a href="#contact" style="background: #ff6b6b; color:white; padding: 12px 25px; border-radius: 50px; text-decoration:none; font-weight:bold;">Book Now</a>
        </div>
    </section>

    <section class="services">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
            <div class="service-card">
                <i class="fas fa-gavel service-icon"></i>
                <h3>Court Marriage</h3>
                <p>Marriage registration within 24 hours under Special Marriage Act.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-certificate service-icon"></i>
                <h3>Registration</h3>
                <p>Already married? Get your legal certificate issued easily.</p>
            </div>
        </div>
    </section>

    <section class="documents">
        <h2 class="section-title">Required Documents</h2>
        <div class="doc-grid">
            <div class="doc-item"><strong>1. Age Proof:</strong> 10th Certificate / Passport</div>
            <div class="doc-item"><strong>2. ID Proof:</strong> Aadhar Card / PAN Card</div>
            <div class="doc-item"><strong>3. Witness:</strong> 2 Witnesses with ID Proof</div>
        </div>
    </section>

    <section id="contact" class="contact">
        <h2 class="section-title">Get Free Consultation</h2>
        <form class="contact-form" onsubmit="alert('Thank you! We will call you back.'); return false;">
            <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your mobile number" required>
            </div>
            <div class="form-group">
                <label>Service</label>
                <select>
                    <option>Court Marriage</option>
                    <option>Marriage Registration</option>
                </select>
            </div>
            <button class="submit-btn">Consult Now</button>
        </form>
    </section>

    <footer>
        <p style="text-align: center; padding: 20px; background: #333; color: white;">&copy; 2026 CourtMarriage.in</p>
    </footer>

    <div class="mobile-bar">
        <a href="tel:+919876543210" class="bar-btn btn-call">
            <i class="fas fa-phone-alt"></i> Call Now
        </a>
        <a href="https://wa.me/919876543210" class="bar-btn btn-wa">
            <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
    </div>

</body>
</html>
