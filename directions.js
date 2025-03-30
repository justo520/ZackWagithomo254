        // Initialize the map
        var map = L.map('map').setView([-1.286389, 36.817223], 15); // Nairobi

        // Load OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add a marker
        L.marker([-1.286389, 36.817223]).addTo(map)
            .bindPopup("<b>Zack Wagithomo's Workplace</b><br>Nairobi, Kenya")
            .openPopup();