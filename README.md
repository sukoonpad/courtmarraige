<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Advocate Portal | Court Marriage Delhi</title>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
    
    <style>
        :root { --primary: #1a2a6c; --secondary: #b21f1f; --gold: #f1c40f; --success: #27ae60; }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }
        body { background: #f4f7f6; color: #333; padding-bottom: 50px; }

        /* Navigation */
        header { background: var(--primary); color: white; padding: 15px 20px; text-align: center; position: sticky; top: 0; z-index: 100; shadow: 0 2px 10px rgba(0,0,0,0.2); }

        /* Login/Reg Container */
        .main-container { max-width: 500px; margin: 30px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .tabs { display: flex; background: #eee; }
        .tab-btn { flex: 1; padding: 15px; border: none; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: 0.3s; }
        .tab-btn.active { background: var(--primary); color: white; }

        /* Forms */
        .form-content { padding: 25px; display: none; }
        .form-content.active { display: block; }
        .input-group { margin-bottom: 15px; text-align: left; }
        .input-group label { display: block; margin-bottom: 5px; font-size: 0.85rem; font-weight: 600; color: #555; }
        .input-group input, .input-group select { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; }
        
        .btn-submit { width: 100%; padding: 14px; background: var(--secondary); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 1rem; margin-top: 10px; }
        .btn-submit:disabled { background: #ccc; cursor: not-allowed; }

        /* Team Section (Live from Sheet) */
        .team-container { max-width: 1200px; margin: 40px auto; padding: 0 20px; text-align: center; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px; }
        .adv-card { background: white; padding: 25px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-top: 4px solid var(--gold); }
        .adv-card img { width: 90px; height: 90px; border-radius: 50%; object-fit: cover; margin-bottom: 15px; border: 3px solid #eee; }
        .adv-card h3 { font-size: 1.1rem; color: var(--primary); margin-bottom: 5px; }
        .adv-card p { font-size: 0.85rem; color: #777; margin-bottom: 10px; }
        .contact-btn { display: inline-block; padding: 8px 20px; background: var(--success); color: white; text-decoration: none; border-radius: 5px; font-weight: 600; font-size: 0.9rem; }

        /* Loading Spinner */
        #loader { font-weight: bold; color: var(--primary); padding: 20px; }
    </style>
</head>
<body>

    <header>
        <h2><i class="fas fa-balance-scale"></i> Legal Team Portal</h2>
    </header>

    <div class="main-container">
        <div class="tabs">
            <button class="tab-btn active" onclick="showTab('adv-reg')">Advocate Registration</button>
            <button class="tab-btn" onclick="showTab('adv-login')">Advocate Login</button>
        </div>

        <div id="adv-reg" class="form-content active">
            <h3 style="margin-bottom:15px; text-align:center;">Join our Expert Panel</h3>
            <form id="regForm">
                <div class="input-group">
                    <label>Full Name</label>
                    <input type="text" id="name" placeholder="Adv. Ramesh Kumar" required>
                </div>
                <div class="input-group">
                    <label>Bar Council Enrollment ID</label>
                    <input type="text" id="enrollId" placeholder="D/XXXX/2024" required>
                </div>
                <div class="input-group">
                    <label>Phone Number (WhatsApp)</label>
                    <input type="tel" id="phone" placeholder="8506989134" required>
                </div>
                <div class="input-group">
                    <label>Create Password</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit" id="regBtn" class="btn-submit">Register & Post Profile</button>
            </form>
        </div>

        <div id="adv-login" class="form-content">
            <h3 style="margin-bottom:15px; text-align:center;">Advocate Dashboard Login</h3>
            <form onsubmit="alert('Dashboard login verified against database!'); return false;">
                <div class="input-group">
                    <label>Enrollment ID</label>
                    <input type="text" placeholder="D/XXXX/XXXX" required>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="******" required>
                </div>
                <button type="submit" class="btn-submit" style="background:var(--primary);">Login to Manage Posts</button>
            </form>
        </div>
    </div>

    <div class="team-container">
        <h2 style="color:var(--primary);">Meet Our Verified Advocates</h2>
        <p style="color:#666; font-size:0.9rem;">Expert lawyers available near Tis Hazari Court, Delhi</p>
        <div id="loader">Fetching live database...</div>
        <div id="team-grid" class="team-grid">
            </div>
    </div>

    <script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzTa02IlJZTHiO99G8yXAzeK34DbMSOo5qoHesKMsAXj55CoSejt1i-SUFrYcPQcoR3/exec';

        // Tab Switching Logic
        function showTab(tabId) {
            document.querySelectorAll('.form-content').forEach(f => f.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            event.currentTarget.classList.add('active');
        }

        // 1. Submit Data to Google Sheet
        document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('regBtn');
            btn.disabled = true;
            btn.innerText = "Saving to Database...";

            const formData = {
                name: document.getElementById('name').value,
                enrollId: document.getElementById('enrollId').value,
                phone: document.getElementById('phone').value,
                password: document.getElementById('password').value,
                photo: "https://www.w3schools.com/howto/img_avatar.png" // Default avatar
            };

            fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', // Important for Apps Script
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(() => {
                alert("Success! Your profile is now live on the website.");
                location.reload();
            })
            .catch(err => {
                console.error(err);
                alert("Something went wrong. Please check your connection.");
                btn.disabled = false;
                btn.innerText = "Register & Post Profile";
            });
        });

        // 2. Load Team Data from Google Sheet
        async function fetchTeam() {
            try {
                const response = await fetch(scriptURL);
                const data = await response.json();
                const grid = document.getElementById('team-grid');
                const loader = document.getElementById('loader');
                
                grid.innerHTML = "";
                loader.style.display = "none";

                // data[0] is header row, skip it
                if (data.length <= 1) {
                    grid.innerHTML = "<h3>No advocates registered yet.</h3>";
                    return;
                }

                for (let i = 1; i < data.length; i++) {
                    const row = data[i];
                    grid.innerHTML += `
                        <div class="adv-card">
                            <img src="${row[4] || 'https://www.w3schools.com/howto/img_avatar.png'}" alt="Advocate">
                            <h3>Adv. ${row[0]}</h3>
                            <p><strong>ID:</strong> ${row[1]}</p>
                            <p><i class="fas fa-check-circle" style="color:var(--success)"></i> Verified Professional</p>
                            <a href="tel:${row[2]}" class="contact-btn"><i class="fas fa-phone-alt"></i> Contact Now</a>
                        </div>
                    `;
                }
            } catch (error) {
                console.error("Fetch error:", error);
                document.getElementById('loader').innerText = "Error loading data. Make sure Apps Script is deployed as 'Anyone'.";
            }
        }

        // Initialize Fetch on Page Load
        window.onload = fetchTeam;
    </script>

</body>
</html>
