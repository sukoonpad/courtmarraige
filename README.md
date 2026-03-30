```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Court Marriage & Registration Services</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: #333;
        }

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
            padding: 0 2rem;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            text-decoration: none;
            color: white;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s;
        }

        .nav-links a:hover {
            opacity: 0.8;
        }

        .menu-toggle {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f8f9fa" width="1200" height="800"/><path fill="%23e9ecef" d="M0 400Q300 200 600 400T1200 400V800H0z"/></svg>');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            margin-top: 80px;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            animation: fadeInUp 1s ease;
        }

        .hero-content p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            max-width: 600px;
            animation: fadeInUp 1s ease 0.2s both;
        }

        .cta-button {
            display: inline-block;
            background: #ff6b6b;
            color: white;
            padding: 1rem 2.5rem;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
            animation: fadeInUp 1s ease 0.4s both;
            box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(255, 107, 107, 0.6);
        }

        /* Services Section */
        .services {
            padding: 100px 0;
            max-width: 1200px;
            margin: 0 auto;
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #333;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            text-align: center;
            transition: all 0.3s;
            border-top: 4px solid transparent;
        }

        .service-card:nth-child(1) { border-top-color: #667eea; }
        .service-card:nth-child(2) { border-top-color: #ff6b6b; }
        .service-card:nth-child(3) { border-top-color: #51cf66; }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #333;
        }

        /* Process Section */
        .process {
            background: #f8f9fa;
            padding: 100px 0;
        }

        .process-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .process-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .step {
            text-align: center;
            position: relative;
        }

        .step-number {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 auto 1.5rem;
        }

        /* Documents Section */
        .documents {
            padding: 100px 0;
            max-width: 1200px;
            margin: 0 auto;
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .doc-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .doc-item {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 100px 0;
            text-align: center;
        }

        .contact-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .contact-form {
            background: rgba(255,255,255,0.1);
            padding: 2.5rem;
            border-radius: 20px;
            margin-top: 2rem;
            backdrop-filter: blur(10px);
        }

        .form-group {
            margin-bottom: 1.5rem;
            text-align: left;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: 10px;
            font-family: inherit;
            font-size: 1rem;
            background: rgba(255,255,255,0.9);
        }

        .submit-btn {
            background: #ff6b6b;
            color: white;
            padding: 1rem 3rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            width: 100%;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255,107,107,0.4);
        }

        /* Footer */
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem 0;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }

            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: rgba(102, 126, 234, 0.95);
                flex-direction: column;
                padding: 1rem;
            }

            .nav-links.active {
                display: flex;
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }

            .services-grid,
            .process-steps,
            .doc-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav>
            <a href="#" class="logo">
                <i class="fas fa-balance-scale"></i> CourtMarriage.in
            </a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#documents">Documents</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="menu-toggle"><i class="fas fa-bars"></i></div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Fast & Legal Court Marriage</h1>
            <p>Get legally married within 24-48 hours with our expert court marriage and registration services. Hassle-free, confidential, and 100% legal.</p>
            <a href="#contact" class="cta-button">Book Appointment Now</a>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-gavel"></i>
                </div>
                <h3>Court Marriage</h3>
                <p>Special Marriage Act ceremonies within 24-48 hours. Legal marriage certificate issued immediately.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3>Marriage Registration</h3>
                <p>Register your existing marriage under Hindu Marriage Act or Special Marriage Act.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-file-contract"></i>
                </div>
                <h3>Legal Documentation</h3>
                <p>Complete documentation support including affidavits, witness arrangements, and certificate delivery.</p>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="process">
        <div class="process-container">
            <h2 class="section-title">Simple 4-Step Process</h2>
            <div class="process-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <h3>Consultation</h3>
                    <p>Free consultation to understand your requirements</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h3>Documentation</h3>
                    <p>Submit required documents (we help prepare them)</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h3>Court Appearance</h3>
                    <p>Appear before marriage officer (30 minutes)</p>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <h3>Certificate</h3>
                    <p>Receive marriage certificate within 24-48 hours</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Documents Section -->
    <section id="documents" class="documents">
        <h2 class="section-title">Required Documents</h2>
        <div class="doc-grid">
            <div class="doc-item">
                <h3><i class="fas fa-id-card"></i> Identity Proof</h3>
                <p>Aadhar Card, Passport, Voter ID, PAN Card, or Driving License (both parties)</p>
            </div>
            <div class="doc-item">
                <h3><i class="fas fa-home"></i> Address Proof</h3>
                <p>Any of the above documents with address or utility bills</p>
            </div>
            <div class="doc-item">
                <h3><i class="fas fa-users"></i> Witnesses</h3>
                <p>2 witnesses with valid ID proofs (we can arrange if needed)</p>
            </div>
            <div class="doc-item">
                <h3><i class="fas fa-file-signature"></i> Affidavit</h3>
                <p>Age declaration and single status affidavit (we prepare)</p>
            </div>
            <div class="doc-item">
                <h3><i class="fas fa-calendar-alt"></i> DOB Proof</h3>
                <p>Birth certificate, 10th marksheet, or passport</p>
            </div>
            <div class="doc-item">
                <h3><i class="fas fa-heart-broken"></i> Divorce Proof</h3>
                <p>(If applicable) Divorce decree or death certificate</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="contact-content">
            <h2>Ready to Get Married?</h2>
            <p>Fill out the form below or call us directly for immediate assistance</p>
            <form class="contact-form" onsubmit="handleSubmit(event)">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" required>
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" required>
                </div>
                <div class="form-group">
                    <label>Service Required</label>
                    <select required>
                        <option value="">Select Service</option>
                        <option value="court-marriage">Court Marriage</option>
                        <option value="registration">Marriage Registration</option>
                        <option value="documentation">Legal Documentation</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Preferred Date</label>
                    <input type="date" required>
                </div>
                <button type="submit" class="submit-btn">Get Free Consultation</button>
            </form>
            <div style="margin-top: 2rem; font-size: 1.1rem;">
                <p><i class="fas fa-phone"></i> +91 98765 43210 | <i class="fas fa-envelope"></i> info@courtmarriage.in</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 CourtMarriage.in - All Rights Reserved | Legal Court Marriage Services Across India</p>
    </footer>

    <script>
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                navLinks.classList.remove('active');
            });
        });

        // Form submission
        function handleSubmit(event) {
            event.preventDefault();
            alert('Thank you! Our team will contact you within 30 minutes.');
            event.target.reset();
        }

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(102, 126, 234, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #667eea 0
