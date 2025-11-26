export const destinationDetails = {
    // Indian Destinations
    kashmir: {
        name: "Kashmir",
        title: "The Jewel of Srinagar",
        description: "Experience the breathtaking beauty of Kashmir with our premium 5-day itinerary.",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
        image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
        description: "Experience luxury, modern architecture, and desert adventures in Dubai.",
        image: "src/assets/burj_al_arab_1.jpg",
        price: "From ₹65,000",
        duration: "5 Days / 4 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Dubai", desc: "Transfer to hotel, Dhow Cruise Dinner in the evening." },
            { day: 2, title: "Dubai City Tour", desc: "Visit Burj Khalifa (124th floor), Dubai Mall, and Fountain Show." },
            { day: 3, title: "Desert Safari", desc: "Afternoon Desert Safari with BBQ Dinner and Belly Dance." },
            { day: 4, title: "Abu Dhabi Day Trip", desc: "Visit Sheikh Zayed Grand Mosque and Ferrari World (Photo Stop)." },
            { day: 5, title: "Departure", desc: "Shopping at Meena Bazaar/Gold Souk and transfer to airport." }
        ],
        inclusions: ["4 Star Hotel Stay", "Daily Breakfast", "Burj Khalifa Tickets", "Desert Safari", "Visa"]
    },
    istanbul: {
        name: "Istanbul",
        title: "Where East Meets West",
        description: "Discover the rich history and culture of Turkey in the magnificent city of Istanbul.",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹85,000",
        duration: "6 Days / 5 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Istanbul", desc: "Transfer to hotel, evening at leisure near Taksim Square." },
            { day: 2, title: "Old City Tour", desc: "Hagia Sophia, Blue Mosque, Hippodrome, and Topkapi Palace." },
            { day: 3, title: "Bosphorus Cruise", desc: "Half-day Bosphorus Cruise and Spice Bazaar visit." },
            { day: 4, title: "Princess Islands", desc: "Ferry ride to Princess Islands, horse carriage tour." },
            { day: 5, title: "Grand Bazaar", desc: "Shopping at one of the oldest covered markets in the world." },
            { day: 6, title: "Departure", desc: "Transfer to airport." }
        ],
        inclusions: ["Hotel Accommodation", "Daily Breakfast", "Guided Tours", "Airport Transfers", "Bosphorus Cruise"]
    },
    bangkok: {
        name: "Bangkok & Pattaya",
        title: "The Land of Smiles",
        description: "Enjoy the vibrant street life of Bangkok and the beaches of Pattaya.",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹55,000",
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
    vietnam: {
        name: "Vietnam",
        title: "Timeless Charm",
        description: "Explore the stunning landscapes, history, and culture of Vietnam.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹40,000",
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
    maldives: {
        name: "Maldives",
        title: "Tropical Paradise",
        description: "Luxury water villas, turquoise lagoons, and white sandy beaches.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        price: "From ₹1,55,000",
        duration: "4 Days / 3 Nights",
        itinerary: [
            { day: 1, title: "Arrival in Male", desc: "Speedboat/Seaplane transfer to resort. Relax in your villa." },
            { day: 2, title: "Water Sports & Leisure", desc: "Snorkeling, kayaking, or just relaxing by the beach." },
            { day: 3, title: "Sunset Cruise", desc: "Enjoy a romantic sunset cruise with dolphin watching." },
            { day: 4, title: "Departure", desc: "Transfer to Male airport." }
        ],
        inclusions: ["Water Villa Stay", "All Inclusive Meal Plan", "Transfers", "Green Tax"]
    }
};
