<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Court Marriage Delhi | Advocate Portal</title>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        :root { --primary: #1a2a6c; --secondary: #b21f1f; --gold: #f1c40f; --success: #25d366; }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
        body { background: #f4f7f6; color: #333; line-height: 1.6; }

        /* --- Main Website Styling --- */
        header { background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; padding: 15px 0; position: fixed; width: 100%; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.2); }
        nav { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.4rem; font-weight: 700; color: white; text-decoration: none; }

        .hero { background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80'); 
                background-size: cover; background-position: center; height: 60vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; padding-top: 60px; }
        
        .section { padding: 60px 20px; max-width: 1200px; margin: 0 auto; }
        .section-title { text-align: center; margin-bottom: 40px; font-size: 2rem; color: var(--primary); }

        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); text-align: center; border-top: 5px solid var(--secondary); }

        /* --- Advocate System Styling (The New Part) --- */
        .portal-container { background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); max-width: 600px; margin: 40px auto; }
        .tabs { display: flex; background: #eee; }
        .tab-btn { flex: 1; padding: 15px; border: none; cursor: pointer; font-weight: 600; transition: 0.3s; }
        .tab-btn.active { background: var(--primary); color: white; }
        .form-content { padding: 30px; display: none; }
        .form-content.active { display: block; }
        .input-group { margin-bottom: 15px; text-align: left; }
        .input-group label { display: block; margin-bottom: 5px; font-size: 0.9rem; font-weight: 500; }
        .input-group input, .input-group textarea { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; }
        .btn-submit { width: 100%; padding: 15px; background: var(--secondary); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }

        .advocate-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .adv-card { background: white; padding: 20px; border-radius: 12px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
        .adv-card img { width: 90px; height: 90px; border-radius: 50%; border: 3px solid var(--gold); margin-bottom: 10px; }

        /* Sticky Footer Bar */
        .sticky-bar { position: fixed; bottom: 0; width: 100%; height: 65px; display: flex; z-index: 2000; }
        .bar-btn { flex: 1; display: flex; align-items: center; justify-content: center; text-decoration: none; color: white; font-weight: bold; }
        
        .hidden { display: none; }
        footer { background: #222; color: #888; padding: 40px 20px; text-align: center; }
    </style>
</head>
<body>

    <header>
        <nav>
            <a href="#" class="logo"><i class="fas fa-gavel"></i> Legal Marriage Delhi</a>
            <div style="font-size: 1.2rem;"><i class="fas fa-phone-alt"></i> 8506989134</div>
        </nav>
    </header>

    <section class="hero">
        <div>
            <h1 style="font-size: 2.5rem;">Court Marriage Consultants</h1>
            <p style="color: var(--gold); font-weight: 600;">Tis Hazari Court, Delhi | Fast & Legal</p>
        </div>
    </section>

    <section class="section">
        <h2 class="section-title">Our Legal Services</h2>
        <div class="services-grid">
            <div class="card">
                <i class="fas fa-heart" style="font-size: 2rem; color: var(--secondary);"></i>
                <h3>Court Marriage</h3>
                <p>Register your marriage legally under Special Marriage Act.</p>
            </div>
            <div class="card">
                <i class="fas fa-file-alt" style="font-size: 2rem; color: var(--secondary);"></i>
                <h3>Marriage Registration</h3>
                <p>Get government certificate for already performed marriage.</p>
            </div>
        </div>
    </section>

    <hr>

    <section class="section" style="background: #ebedef;">
        <h2 class="section-title">Advocate & User Portal</h2>
        <div class="portal-container">
            <div class="tabs">
                <button class="tab-btn active" onclick="showTab('user-login')">User Login</button>
                <button class="tab-btn" onclick="showTab('adv-reg')">Advocate Register</button>
                <button class="tab-btn" onclick="showTab('adv-login')">Advocate Login</button>
            </div>

            <div id="user-login" class="form-content active">
                <h3>User Access</h3>
                <div class="input-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter mobile number">
                </div>
                <button class="btn-submit" onclick="alert('User section coming soon!')">Login</button>
            </div>

            <div id="adv-reg" class="form-content">
                <h3>Advocate Registration</h3>
                <form id="regForm">
                    <div class="input-group"><label>Full Name</label><input type="text" id="name" required></div>
                    <div class="input-group"><label>Enrollment ID</label><input type="text" id="enrollId" required></div>
                    <div class="input-group"><label>Phone</label><input type="tel" id="phone" required></div>
                    <div class="input-group"><label>Password</label><input type="password" id="pass" required></div>
                    <button type="submit" id="regBtn" class="btn-submit">Register & Join Panel</button>
                </form>
            </div>

            <div id="adv-login" class="form-content">
                <h3>Advocate Dashboard</h3>
                <div class="input-group"><label>Enrollment ID</label><input type="text"></div>
                <div class="input-group"><label>Password</label><input type="password"></div>
                <button class="btn-submit" onclick="document.getElementById('dash').classList.remove('hidden')">Login to Post</button>
            </div>
        </div>
    </section>

    <section class="section">
        <h2 class="section-title">Meet Our Verified Team</h2>
        <div id="team-list" class="advocate-grid">
            <p>Loading team from database...</p>
        </div>
    </section>

    <div id="dash" class="hidden" style="position:fixed; inset:0; background:white; z-index:5000; padding:40px;">
        <button onclick="this.parentElement.classList.add('hidden')" style="float:right;">Logout</button>
        <h2>Advocate Dashboard</h2>
        <div class="input-group">
            <label>Post Legal Update</label>
            <textarea rows="5" placeholder="Write something..."></textarea>
            <button class="btn-submit" style="width:200px;">Publish Post</button>
        </div>
    </div>

    <footer>
        <p>Near Metro Station Tis Hazari Court, Delhi-110054</p>
        <p>&copy; 2026 Legal Marriage Delhi | 8506989134</p>
    </footer>

    <div class="sticky-bar">
        <a href="tel:+918506989134" class="bar-btn" style="background: var(--secondary);"><i class="fas fa-phone"></i> Call</a>
        <a href="https://wa.me/918506989134" class="bar-btn" style="background: var(--success);"><i class="fab fa-whatsapp"></i> WhatsApp</a>
    </div>

    <script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzTa02IlJZTHiO99G8yXAzeK34DbMSOo5qoHesKMsAXj55CoSejt1i-SUFrYcPQcoR3/exec';

        function showTab(id) {
            document.querySelectorAll('.form-content').forEach(f => f.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            event.currentTarget.classList.add('active');
        }

        // Handle Registration
        document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('regBtn');
            btn.disabled = true; btn.innerText = "Saving...";

            const data = {
                name: document.getElementById('name').value,
                enrollId: document.getElementById('enrollId').value,
                phone: document.getElementById('phone').value,
                password: document.getElementById('pass').value,
                photo: "https://www.w3schools.com/howto/img_avatar.png"
            };

            fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(data) })
            .then(() => { alert("Registered!"); location.reload(); })
            .catch(() => { alert("Error!"); btn.disabled = false; });
        });

        // Load Team from Google Sheets
        async function loadTeam() {
            try {
                const res = await fetch(scriptURL);
                const data = await res.json();
                const list = document.getElementById('team-list');
                list.innerHTML = "";
                for(let i=1; i<data.length; i++) {
                    list.innerHTML += `
                        <div class="adv-card">
                            <img src="${data[i][4]}">
                            <h3>Adv. ${data[i][0]}</h3>
                            <p>ID: ${data[i][1]}</p>
                            <a href="tel:${data[i][2]}" style="color:var(--secondary); font-weight:bold;">Contact Now</a>
                        </div>
                    `;
                }
            } catch(e) { document.getElementById('team-list').innerHTML = "Panel is being updated."; }
        }
        window.onload = loadTeam;
    </script>
</body>
</html>
