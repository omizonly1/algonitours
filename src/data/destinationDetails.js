export const destinationDetails = {
    // Indian Destinations
    kashmir: {
        name: "Kashmir",
        title: "The Jewel of Srinagar",
        description: "Experience the breathtaking beauty of Kashmir with our premium 5-day itinerary.",
        image: "../src/assets/Kashmir_1.jpg",
        price: "₹25,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Srinagar", desc: "Pickup from airport, check-in to houseboat, Shikara ride on Dal Lake." },
            { day: 2, title: "Srinagar to Gulmarg", desc: "Day trip to Gulmarg, Gondola ride, return to Srinagar." },
            { day: 3, title: "Srinagar to Pahalgam", desc: "Visit Saffron fields, Avantipura ruins, overnight in Pahalgam." },
            { day: 4, title: "Pahalgam Sightseeing", desc: "Betaab Valley, Aru Valley, return to Srinagar." },
            { day: 5, title: "Departure", desc: "Transfer to airport for departure." }
        ],
        inclusions: ["Accommodation in 3/4 Star Hotels", "Daily Breakfast & Dinner", "All Transfers & Sightseeing", "Shikara Ride"]
    },
    kerala: {
        name: "Kerala",
        title: "Backwaters & Beaches",
        description: "Relax in the serene backwaters and pristine beaches of God's Own Country.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹20,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Kochi", desc: "Transfer to Munnar, visit Cheeyappara Waterfalls." },
            { day: 2, title: "Munnar Sightseeing", desc: "Tea Museum, Mattupetty Dam, Echo Point." },
            { day: 3, title: "Munnar to Thekkady", desc: "Spice Plantation tour, Periyar Lake boating." },
            { day: 4, title: "Thekkady to Alleppey", desc: "Houseboat stay, backwater cruise." },
            { day: 5, title: "Alleppey to Kochi", desc: "Fort Kochi sightseeing, Chinese fishing nets." },
            { day: 6, title: "Departure", desc: "Transfer to Kochi airport." }
        ],
        inclusions: ["Accommodation", "Houseboat Stay", "Breakfast", "Private Cab"]
    },
    rajasthan: {
        name: "Rajasthan",
        title: "Royal Rajasthan",
        description: "Immerse yourself in the royal heritage and vibrant culture of Rajasthan.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹22,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Jaipur", desc: "Check-in, visit City Palace and Jantar Mantar." },
            { day: 2, title: "Jaipur Sightseeing", desc: "Amber Fort, Hawa Mahal, Jal Mahal." },
            { day: 3, title: "Jaipur to Jodhpur", desc: "Transfer to Jodhpur, visit Umaid Bhawan Palace." },
            { day: 4, title: "Jodhpur Sightseeing", desc: "Mehrangarh Fort, Jaswant Thada." },
            { day: 5, title: "Jodhpur to Udaipur", desc: "Transfer to Udaipur via Ranakpur Jain Temple." },
            { day: 6, title: "Udaipur Sightseeing & Departure", desc: "City Palace, Lake Pichola, departure." }
        ],
        inclusions: ["Heritage Hotel Stay", "Daily Breakfast", "Guide Services", "Transport"]
    },
    goa: {
        name: "Goa",
        title: "Sun, Sand & Sea",
        description: "Enjoy the ultimate beach vacation with nightlife and water sports.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹15,000",
        duration: "4 Days / 3 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Goa", desc: "Pickup and transfer to hotel. Leisure time at beach." },
            { day: 2, title: "North Goa Tour", desc: "Fort Aguada, Calangute, Baga, Anjuna beaches." },
            { day: 3, title: "South Goa Tour", desc: "Basilica of Bom Jesus, Mangueshi Temple, Colva Beach." },
            { day: 4, title: "Departure", desc: "Transfer to airport/railway station." }
        ],
        inclusions: ["3 Star Hotel Stay", "Breakfast", "Sightseeing by Private Car", "Airport Transfers"]
    },
    himachal: {
        name: "Himachal Pradesh",
        title: "Himalayan Retreat",
        description: "Escape to the mountains and enjoy the cool breeze and scenic views.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹18,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Shimla", desc: "Transfer from Chandigarh/Delhi. Mall Road stroll." },
            { day: 2, title: "Shimla Sightseeing", desc: "Kufri, Jakhu Temple, Ridge." },
            { day: 3, title: "Shimla to Manali", desc: "Scenic drive via Kullu Valley." },
            { day: 4, title: "Manali Sightseeing", desc: "Hadimba Temple, Vashisht Baths, Solang Valley." },
            { day: 5, title: "Rohtang Pass/Atal Tunnel", desc: "Snow point visit (subject to permit)." },
            { day: 6, title: "Departure", desc: "Transfer to Chandigarh/Delhi." }
        ],
        inclusions: ["Hotel Stay", "Breakfast & Dinner", "Sightseeing", "Volvo Bus Tickets (Optional)"]
    },
    andaman: {
        name: "Andaman & Nicobar",
        title: "Island Paradise",
        description: "Explore the untouched beauty of the Andaman islands.",
        image: "../src/assets/andaman_1.jpg",
        price: "₹35,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Port Blair", desc: "Cellular Jail visit, Light & Sound Show." },
            { day: 2, title: "Port Blair to Havelock", desc: "Ferry to Havelock, Radhanagar Beach." },
            { day: 3, title: "Elephant Beach", desc: "Water sports and snorkeling." },
            { day: 4, title: "Havelock to Neil Island", desc: "Visit Laxmanpur and Bharatpur beaches." },
            { day: 5, title: "Departure", desc: "Return to Port Blair and fly back." }
        ],
        inclusions: ["3 Star Hotel", "Breakfast", "Ferry Tickets", "Entry Permits"]
    },

    // International Destinations
    dubai: {
        name: "Dubai",
        title: "The City of Gold",
        description: "Experience luxury, modern architecture, and desert adventures in Dubai with our tailored packages.",
        image: "src/assets/burj_khalifa_1.jpg",
        price: "From ₹65,000",
        packages: [
            {
                id: "dubai-standard",
                name: "Dubai Essentials",
                image: "../src/assets/dubai_museum_1.jpg",
                description: "Experience the must-see attractions of Dubai on a budget.",
                price: "From ₹65,000",
                duration: "5 Days / 4 Nights"
            },
            {
                id: "dubai-luxury",
                name: "Royal Dubai",
                image: "../src/assets/burj_khalifa_1.jpg",
                description: "Indulge in the ultimate luxury experience with premium stays and transfers.",
                price: "From ₹1,20,000",
                duration: "6 Days / 5 Nights"
            },
            {
                id: "dubai-adventure",
                name: "Dubai Adventure",
                image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Thrilling desert safaris, theme parks, and skydiving.",
                price: "From ₹75,000",
                duration: "5 Days / 4 Nights"
            }
        ]
    },
    "dubai-standard": {
        name: "Dubai Essentials",
        title: "Experience The City of Gold",
        description: "Discover the iconic landmarks of Dubai.",
        image: "../src/assets/dubai_museum_1.jpg",
        price: "₹65,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Dubai", desc: "Transfer to hotel, Dhow Cruise Dinner in the evening." },
            { day: 2, title: "Dubai City Tour", desc: "Visit Dubai Museum, Gold Souk, and photo stop at Burj Al Arab." },
            { day: 3, title: "Desert Safari", desc: "Afternoon Desert Safari with BBQ Dinner and entertainment." },
            { day: 4, title: "Burj Khalifa", desc: "Visit the 124th floor of Burj Khalifa and Dubai Mall." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["3 Star Hotel Stay", "Daily Breakfast", "Desert Safari", "Dhow Cruise", "Visa"]
    },
    "dubai-luxury": {
        name: "Royal Dubai",
        title: "The Ultimate Luxury",
        description: "Experience Dubai like a royal with 5-star amenities.",
        image: "../src/assets/burj_khalifa_1.jpg",
        price: "₹1,20,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "VIP Arrival", desc: "Limousine transfer to 5-star hotel. Marina Dinner Cruise." },
            { day: 2, title: "Modern Dubai", desc: "Private tour of Palm Jumeirah, Atlantis, and Burj Al Arab High Tea." },
            { day: 3, title: "Luxury Desert Experience", desc: "Private desert safari with gourmet dinner in the dunes." },
            { day: 4, title: "Sky Views", desc: "Burj Khalifa At The Top SKY (Level 148) and Fountain Show." },
            { day: 5, title: "Shopping & Leisure", desc: "Personal shopper experience at Dubai Mall or Spa day." },
            { day: 6, title: "Departure", desc: "Luxury transfer to airport." }
        ],
        inclusions: ["5 Star Hotel", "Limousine Transfers", "Private Tours", "High Tea", "Visa"]
    },
    "dubai-adventure": {
        name: "Dubai Adventure",
        title: "Thrills & Spills",
        description: "Adrenaline-pumping activities for the adventurous traveler.",
        image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹75,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Transfer to hotel. Evening at Global Village." },
            { day: 2, title: "Theme Parks", desc: "Full day at Dubai Parks and Resorts (Motiongate/Bollywood Parks)." },
            { day: 3, title: "Desert Thrills", desc: "Dune bashing, quad biking, and sandboarding." },
            { day: 4, title: "Water & Air", desc: "Aquaventure Waterpark or Skydive Dubai (Optional add-on)." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["4 Star Hotel", "Theme Park Tickets", "Adventure Activities", "Transfers", "Visa"]
    },
    istanbul: {
        name: "Istanbul",
        title: "Where East Meets West",
        description: "Discover the rich history and culture of Turkey in the magnificent city of Istanbul.",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹95,000",
        packages: [
            {
                id: "istanbul-classics",
                name: "Istanbul Classics",
                image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Visit the Blue Mosque, Hagia Sophia, and Grand Bazaar.",
                price: "From ₹95,000",
                duration: "5 Days / 4 Nights"
            },
            {
                id: "ottoman-heritage",
                name: "Ottoman Heritage",
                image: "../src/assets/turkey_3.jpg",
                description: "Deep dive into the history of the Ottoman Empire.",
                price: "From ₹1,95,000",
                duration: "6 Days / 5 Nights"
            },
            {
                id: "istanbul-cappadocia-gems",
                name: "Turkey's Historic Gems",
                image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "A 10-day journey through Istanbul, Cappadocia, and ancient ruins.",
                price: "From ₹1,45,000",
                duration: "10 Days / 9 Nights"
            },
            {
                id: "bosphorus-delight",
                name: "Bosphorus Delight",
                image: "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Enjoy scenic cruises and Asian side tours.",
                price: "From ₹90,000",
                duration: "5 Days / 4 Nights"
            }
        ]
    },
    "istanbul-classics": {
        name: "Istanbul Classics",
        title: "Historic Istanbul",
        description: "The essential Istanbul experience covering all major landmarks.",
        image: "../src/assets/turkey_1.jpg",
        price: "₹95,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Transfer to hotel in Sultanahmet." },
            { day: 2, title: "Byzantine Relics", desc: "Hagia Sophia, Hippodrome, Blue Mosque." },
            { day: 3, title: "Ottoman Relics", desc: "Topkapi Palace and Grand Bazaar." },
            { day: 4, title: "Bosphorus Cruise", desc: "Half-day cruise and Spice Market." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Hotel Stay", "Daily Breakfast", "Guided Tours", "Transfers"]
    },
    "ottoman-heritage": {
        name: "Ottoman Heritage",
        title: "Imperial Istanbul",
        description: "Walk in the footsteps of Sultans.",
        image: "../src/assets/turkey_2.jpg",
        price: "₹1,95,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Transfer to hotel." },
            { day: 2, title: "Old City", desc: "Full day tour of Sultanahmet area." },
            { day: 3, title: "Palaces", desc: "Dolmabahce Palace and Yildiz Palace." },
            { day: 4, title: "Mosques & Museums", desc: "Suleymaniye Mosque and Archeological Museum." },
            { day: 5, title: "Shopping", desc: "Grand Bazaar and Arasta Bazaar." },
            { day: 6, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["5 Star Hotel", "Private Guide", "Entrance Fees", "Transfers"]
    },
    "bosphorus-delight": {
        name: "Bosphorus Delight",
        title: "Two Continents",
        description: "Experience the magic of the Bosphorus Strait.",
        image: "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹90,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Transfer to hotel with Bosphorus view." },
            { day: 2, title: "Cruise & Asia", desc: "Bosphorus Cruise and visit to Asian side (Kadikoy)." },
            { day: 3, title: "Princes' Islands", desc: "Full day tour to Buyukada." },
            { day: 4, title: "Golden Horn", desc: "Pierre Loti Hill and Eyup Sultan Mosque." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Boutique Hotel", "Cruise Tickets", "Ferry Tickets", "Transfers"]
    },
    "istanbul-cappadocia-gems": {
        name: "Turkey's Historic Gems",
        title: "Istanbul, Cappadocia & Beyond",
        description: "A comprehensive 10-day tour covering Turkey's most famous historical and natural wonders.",
        image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹1,45,000",
        duration: "10 Days / 9 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Istanbul", desc: "Welcome to Turkey! Transfer to your hotel. Welcome dinner." },
            { day: 2, title: "Istanbul Classics", desc: "Visit the Blue Mosque, Hagia Sophia, and Topkapi Palace." },
            { day: 3, title: "Istanbul to Ankara", desc: "Drive to Ankara. Visit the Museum of Anatolian Civilizations." },
            { day: 4, title: "Ankara to Cappadocia", desc: "Visit the Mausoleum of Ataturk, then drive to Cappadocia." },
            { day: 5, title: "Cappadocia", desc: "Optional Hot Air Balloon ride. Visit Goreme Open Air Museum and Underground City." },
            { day: 6, title: "Cappadocia to Konya", desc: "Drive to Konya. Visit the Mevlana Museum (Whirling Dervishes)." },
            { day: 7, title: "Konya to Pamukkale", desc: "Drive to Pamukkale. Visit the Cotton Castle and Hierapolis." },
            { day: 8, title: "Pamukkale to Kusadasi", desc: "Visit the ancient city of Ephesus and House of Virgin Mary." },
            { day: 9, title: "Kusadasi to Istanbul", desc: "Drive to Izmir airport and fly back to Istanbul. Farewell dinner." },
            { day: 10, title: "Departure", desc: "Transfer to Istanbul airport for your flight home." }
        ],
        inclusions: ["4/5 Star Hotels", "Domestic Flight", "Daily Breakfast & Dinner", "Professional Guide", "Entrance Fees", "AC Transport"]
    },
    bangkok: {
        name: "Bangkok & Pattaya",
        title: "The Land of Smiles",
        description: "Enjoy the vibrant street life of Bangkok and the beaches of Pattaya with our flexible packages.",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹55,000",
        packages: [
            {
                id: "bangkok-essentials",
                name: "Bangkok Essentials",
                image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Short and sweet trip to Bangkok's highlights.",
                price: "From ₹45,000",
                duration: "4 Days / 3 Nights"
            },
            {
                id: "bangkok-pattaya",
                name: "Bangkok & Pattaya",
                image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "The classic combo of city and beach.",
                price: "From ₹55,000",
                duration: "5 Days / 4 Nights"
            },
            {
                id: "luxury-bangkok",
                name: "Luxury Bangkok",
                image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Stay in 5-star hotels with rooftop dining.",
                price: "From ₹80,000",
                duration: "5 Days / 4 Nights"
            }
        ]
    },
    "bangkok-essentials": {
        name: "Bangkok Essentials",
        title: "City of Angels",
        description: "A quick getaway to explore the vibrant capital.",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹45,000",
        duration: "4 Days / 3 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Transfer to hotel. Evening street food tour." },
            { day: 2, title: "Temple Tour", desc: "Wat Arun, Wat Pho, and Grand Palace." },
            { day: 3, title: "Shopping", desc: "Chatuchak Market or Siam Paragon." },
            { day: 4, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["3 Star Hotel", "Breakfast", "City Tour", "Transfers"]
    },
    "bangkok-pattaya": {
        name: "Bangkok & Pattaya",
        title: "Best of Both Worlds",
        description: "Combine the excitement of Bangkok with the relaxation of Pattaya.",
        image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹55,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Bangkok", desc: "Transfer to Pattaya, Alcazar Show in the evening." },
            { day: 2, title: "Coral Island Tour", desc: "Speedboat to Coral Island with lunch." },
            { day: 3, title: "Pattaya to Bangkok", desc: "Transfer to Bangkok via Gems Gallery. Chao Phraya Dinner Cruise." },
            { day: 4, title: "Bangkok City Tour", desc: "Visit Golden Buddha and Marble Temple. Shopping at MBK/Indra Square." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Hotel Stay", "Daily Breakfast", "Coral Island Tour", "City Tour", "Transfers"]
    },
    "luxury-bangkok": {
        name: "Luxury Bangkok",
        title: "Sky High Luxury",
        description: "Experience the high life in Bangkok.",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹80,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "VIP Arrival", desc: "Luxury transfer to riverside hotel." },
            { day: 2, title: "Private City Tour", desc: "Private guide and driver for temple visits." },
            { day: 3, title: "Ayutthaya Cruise", desc: "River cruise to the ancient capital of Ayutthaya." },
            { day: 4, title: "Rooftop Dining", desc: "Dinner at Sky Bar (Lebua) or Moon Bar." },
            { day: 5, title: "Departure", desc: "Luxury transfer to airport." }
        ],
        inclusions: ["5 Star Hotel", "Private Tours", "River Cruise", "Transfers"]
    },
    vietnam: {
        name: "Vietnam",
        title: "Timeless Charm",
        description: "Explore the stunning landscapes, history, and culture of Vietnam with our curated packages.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹40,000",
        packages: [
            {
                id: "vietnam-classic",
                name: "Classic Vietnam",
                image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "The perfect introduction to Vietnam's highlights.",
                price: "From ₹45,000",
                duration: "6 Days / 5 Nights"
            },
            {
                id: "vietnam-north",
                name: "North Vietnam Adventure",
                image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Explore Hanoi, Halong Bay, and the mountains of Sapa.",
                price: "From ₹40,000",
                duration: "5 Days / 4 Nights"
            },
            {
                id: "vietnam-south",
                name: "South Vietnam & Delta",
                image: "https://images.unsplash.com/photo-1565060169194-1372607d2c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Discover Ho Chi Minh City and the Mekong Delta.",
                price: "From ₹42,000",
                duration: "5 Days / 4 Nights"
            }
        ]
    },
    "vietnam-classic": {
        name: "Classic Vietnam",
        title: "Highlights of Vietnam",
        description: "A comprehensive journey through the best of Vietnam.",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹45,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Hanoi", desc: "Transfer to hotel, Water Puppet Show." },
            { day: 2, title: "Halong Bay Cruise", desc: "Drive to Halong Bay, overnight cruise with activities." },
            { day: 3, title: "Halong to Hanoi", desc: "Morning Tai Chi, return to Hanoi, fly to Da Nang/Hoi An." },
            { day: 4, title: "Ba Na Hills", desc: "Cable car ride, Golden Bridge, Fantasy Park." },
            { day: 5, title: "Hoi An Ancient Town", desc: "Walking tour of the heritage town." },
            { day: 6, title: "Departure", desc: "Transfer to Da Nang airport." }
        ],
        inclusions: ["Hotel/Cruise Stay", "Meals as per itinerary", "Internal Flights", "Visa Assistance"]
    },
    "vietnam-north": {
        name: "North Vietnam Adventure",
        title: "Mountains & Bays",
        description: "Experience the rugged beauty of Northern Vietnam.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹40,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Hanoi", desc: "City tour including Ho Chi Minh Mausoleum." },
            { day: 2, title: "Hanoi to Sapa", desc: "Scenic drive to Sapa, visit Cat Cat village." },
            { day: 3, title: "Sapa Trekking", desc: "Trek through rice terraces and minority villages." },
            { day: 4, title: "Sapa to Hanoi", desc: "Return to Hanoi, evening street food tour." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Hotel Stay", "Trekking Guide", "Meals", "Transfers"]
    },
    "vietnam-south": {
        name: "South Vietnam & Delta",
        title: "Rivers & Cities",
        description: "Explore the vibrant south and the life on the Mekong Delta.",
        image: "https://images.unsplash.com/photo-1565060169194-1372607d2c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹42,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Ho Chi Minh City", desc: "Transfer to hotel, Ben Thanh Market." },
            { day: 2, title: "Cu Chi Tunnels", desc: "Half-day tour to the historic tunnels." },
            { day: 3, title: "Mekong Delta", desc: "Boat trip on the Mekong River, visit local workshops." },
            { day: 4, title: "HCMC City Tour", desc: "War Remnants Museum, Notre Dame Cathedral." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Hotel Stay", "Boat Trips", "Guide", "Entrance Fees"]
    },
    maldives: {
        name: "Maldives",
        title: "Tropical Paradise",
        description: "Luxury water villas, turquoise lagoons, and white sandy beaches.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹1,55,000",
        packages: [
            {
                id: "maldives-honeymoon",
                name: "Maldives Honeymoon",
                image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Romantic getaway with candlelit dinners and sunset cruises.",
                price: "From ₹1,55,000",
                duration: "5 Days / 4 Nights"
            },
            {
                id: "maldives-family",
                name: "Maldives Family Fun",
                image: "https://images.unsplash.com/photo-1544945582-3b466d874eac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Activities for all ages, kids club, and family villas.",
                price: "From ₹1,80,000",
                duration: "5 Days / 4 Nights"
            },
            {
                id: "maldives-luxury",
                name: "Luxury Overwater",
                image: "https://images.unsplash.com/photo-1439066615861-d1fb8bc3adc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Premium overwater villa with private pool and butler service.",
                price: "From ₹2,50,000",
                duration: "6 Days / 5 Nights"
            }
        ]
    },
    "maldives-honeymoon": {
        name: "Maldives Honeymoon",
        title: "Romantic Escape",
        description: "Celebrate love in the most beautiful place on earth.",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹1,55,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Speedboat transfer to resort. Welcome drinks and relaxation." },
            { day: 2, title: "Beach Day", desc: "Leisure time at the beach. Romantic candlelit dinner." },
            { day: 3, title: "Water Activities", desc: "Snorkeling trip to coral reef." },
            { day: 4, title: "Sunset Cruise", desc: "Private sunset cruise with champagne." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Beach Villa", "All Meals", "Honeymoon Cake", "Transfers"]
    },
    "maldives-family": {
        name: "Maldives Family Fun",
        title: "Family Paradise",
        description: "Create unforgettable memories with your loved ones.",
        image: "https://images.unsplash.com/photo-1544945582-3b466d874eac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹1,80,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Transfer to family-friendly resort." },
            { day: 2, title: "Island Exploration", desc: "Island hopping and picnic lunch." },
            { day: 3, title: "Water Sports", desc: "Banana boat ride and kayaking." },
            { day: 4, title: "Dolphin Watching", desc: "Morning dolphin watching cruise." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Family Villa", "Kids Club Access", "All Meals", "Transfers"]
    },
    "maldives-luxury": {
        name: "Luxury Overwater",
        title: "Ultimate Indulgence",
        description: "Experience the pinnacle of luxury in the Maldives.",
        image: "https://images.unsplash.com/photo-1439066615861-d1fb8bc3adc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹2,50,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "VIP Arrival", desc: "Seaplane transfer to luxury resort." },
            { day: 2, title: "Overwater Bliss", desc: "Relax in your private pool villa." },
            { day: 3, title: "Spa Day", desc: "Couples massage at the underwater spa." },
            { day: 4, title: "Private Dining", desc: "Private sandbank dinner under the stars." },
            { day: 5, title: "Marine Life", desc: "Private guided snorkeling with marine biologist." },
            { day: 6, title: "Departure", desc: "Seaplane transfer to airport." }
        ],
        inclusions: ["Overwater Pool Villa", "Premium All Inclusive", "Spa Treatment", "Seaplane"]
    },
    paris: {
        name: "Paris",
        title: "The City of Light",
        description: "Experience the romance, art, and culture of Paris.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹2,95,000",
        packages: [
            {
                id: "paris-romance",
                name: "Paris Romance",
                image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Perfect for couples, including Seine cruise and Eiffel Tower dinner.",
                price: "From ₹2,95,000",
                duration: "5 Days / 4 Nights"
            },
            {
                id: "paris-culture",
                name: "Paris Culture",
                image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Explore the Louvre, Versailles, and Montmartre.",
                price: "From ₹3,55,000",
                duration: "6 Days / 5 Nights"
            },
            {
                id: "paris-family",
                name: "Paris & Disney",
                image: "https://images.unsplash.com/photo-1549271576-92471676880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Combine city sightseeing with the magic of Disneyland Paris.",
                price: "From ₹4,95,000",
                duration: "5 Days / 4 Nights"
            }
        ]
    },
    "paris-romance": {
        name: "Paris Romance",
        title: "Romantic Paris",
        description: "A dreamy escape to the most romantic city in the world.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹2,95,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Private transfer to hotel near Eiffel Tower." },
            { day: 2, title: "Eiffel Tower", desc: "Skip-the-line access and dinner at Madame Brasserie." },
            { day: 3, title: "Seine Cruise", desc: "Romantic evening cruise on the Seine River." },
            { day: 4, title: "Montmartre", desc: "Walking tour of the artistic district and Sacré-Cœur." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["4 Star Hotel", "Breakfast", "Dinner at Eiffel Tower", "Cruise", "Transfers"]
    },
    "paris-culture": {
        name: "Paris Culture",
        title: "Art & History",
        description: "Immerse yourself in the artistic heritage of Paris.",
        image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹1,05,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Transfer to hotel in Latin Quarter." },
            { day: 2, title: "The Louvre", desc: "Guided tour of the Louvre Museum." },
            { day: 3, title: "Versailles", desc: "Day trip to the Palace of Versailles." },
            { day: 4, title: "Musée d'Orsay", desc: "Visit the Impressionist masterpieces." },
            { day: 5, title: "Marais District", desc: "Walking tour of historic Marais." },
            { day: 6, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Hotel Stay", "Museum Passes", "Versailles Tour", "Guide", "Transfers"]
    },
    "paris-family": {
        name: "Paris & Disney",
        title: "Magical Family Trip",
        description: "The perfect mix of culture and fun for the whole family.",
        image: "https://images.unsplash.com/photo-1549271576-92471676880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "₹1,15,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival", desc: "Transfer to hotel." },
            { day: 2, title: "Paris Highlights", desc: "Hop-on Hop-off bus tour of major sights." },
            { day: 3, title: "Disneyland Paris", desc: "Full day at Disneyland Park." },
            { day: 4, title: "Walt Disney Studios", desc: "Full day at Walt Disney Studios Park." },
            { day: 5, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Family Hotel", "Disney 2-Park Tickets", "Bus Tour", "Transfers"]
    }
};
