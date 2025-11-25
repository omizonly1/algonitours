// src/pages/UmrahGuideSection.jsx

import React from "react";

const UmrahGuideSection = () => {
    return (
        <main className="umrah-page">
            {/* Hero */}
            <section className="umrah-hero">
                <div className="umrah-hero-content">
                    <p className="umrah-hero-eyebrow">Al Goni Tours & Travels</p>
                    <h1 className="umrah-hero-title">
                        Complete Umrah Guide
                        <span className="umrah-hero-subtitle">
                            According to Hanafi Fiqh
                        </span>
                    </h1>
                    <p className="umrah-hero-text">
                        Plan your Umrah with confidence. This step-by-step guide follows
                        authentic Hanafi rulings and is designed to give you clarity from
                        Ihram to completion, while Al Goni Tours & Travels takes care of
                        your travel arrangements.
                    </p>
                </div>
            </section>

            {/* Content Wrapper */}
            <section className="umrah-content container">
                {/* What is Umrah */}
                <article className="umrah-card">
                    <h2>What is Umrah?</h2>
                    <p>
                        Umrah is a blessed act of worship that includes entering into{" "}
                        <strong>Ihram</strong>, performing <strong>Tawaf</strong> around the
                        Kaaba, performing <strong>Sa’i</strong> between Safa and Marwah, and
                        finally <strong>shaving (ḥalq)</strong> or{" "}
                        <strong>trimming (taqṣīr)</strong> the hair.
                    </p>
                    <p>
                        According to the <strong>Hanafi school</strong>, Umrah is{" "}
                        <strong>Sunnah Mu’akkadah</strong> (highly emphasized). Muslims are
                        strongly encouraged to perform it when they are able.
                    </p>
                    <div className="umrah-highlight">
                        <p className="umrah-quote-label">Qur’an</p>
                        <p className="umrah-quote">
                            “And complete the Hajj and Umrah for Allah.”{" "}
                            <span className="umrah-quote-ref">(Surah Al-Baqarah 2:196)</span>
                        </p>
                    </div>
                </article>

                {/* Before You Travel */}
                <article className="umrah-card">
                    <h2>Before You Travel</h2>
                    <ul className="umrah-list">
                        <li>
                            <strong>Intention &amp; Planning</strong> – Make a sincere
                            intention that your journey is for the pleasure of Allah and to
                            perform Umrah correctly.
                        </li>
                        <li>
                            <strong>Documents &amp; Bookings</strong> – Our team assists with{" "}
                            visa, flights, hotels, and transport so you can focus on worship.
                        </li>
                        <li>
                            <strong>Learn the Basics</strong> – Understand the key steps:
                            Ihram, Tawaf, Sa’i, and Halq/Taqsir. We provide pre-departure
                            guidance and on-trip support.
                        </li>
                    </ul>
                </article>

                {/* Step-by-Step Guide */}
                <article className="umrah-card">
                    <h2>Step-by-Step Umrah Guide (Hanafi)</h2>

                    <div className="umrah-step">
                        <h3>Step 1 — Ihram &amp; Miqat</h3>
                        <ul className="umrah-list">
                            <li>
                                Wear Ihram before crossing the <strong>Miqat</strong>. For many
                                South Asian travellers, this happens in the plane before
                                entering the Miqat zone.
                            </li>
                            <li>
                                Take a <strong>ghusl</strong>, trim nails, and apply perfume
                                (for men) <strong>before</strong> making intention.
                            </li>
                            <li>
                                Make niyyah:{" "}
                                <em>“Labbaik Allahumma ‘Umrah” – “O Allah, I am present for
                                    Umrah.”</em>
                            </li>
                            <li>
                                Start reciting <strong>Talbiyah</strong> frequently:
                                <div className="umrah-arabic">
                                    لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ
                                    لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا
                                    شَرِيكَ لَكَ
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="umrah-step">
                        <h3>Step 2 — Entering Masjid al-Haram</h3>
                        <ul className="umrah-list">
                            <li>Enter with your right foot and recite the dua for entering a masjid.</li>
                            <li>
                                When you first see the <strong>Kaaba</strong>, pause and make
                                heartfelt dua – this is a special moment of acceptance.
                            </li>
                        </ul>
                    </div>

                    <div className="umrah-step">
                        <h3>Step 3 — Tawaf (7 Rounds Around the Kaaba)</h3>
                        <ul className="umrah-list">
                            <li>
                                Start at <strong>Hajar al-Aswad</strong>, face it and say:{" "}
                                <em>“Bismillah, Allahu Akbar”</em>. If possible, kiss it; if
                                crowded, point towards it.
                            </li>
                            <li>
                                Walk <strong>7 rounds</strong>, keeping the Kaaba on your left,
                                reciting Qur’an, dhikr, and dua.
                            </li>
                            <li>
                                Between <strong>Rukn Yamani</strong> and{" "}
                                <strong>Hajar al-Aswad</strong>, it is Sunnah to recite:
                                <div className="umrah-arabic">
                                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً
                                    وَقِنَا عَذَابَ النَّارِ
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="umrah-step">
                        <h3>Step 4 — Two Rak’ah After Tawaf</h3>
                        <ul className="umrah-list">
                            <li>
                                Pray <strong>two rak’ah</strong> after Tawaf, preferably behind{" "}
                                <strong>Maqam Ibrahim</strong>, or anywhere in the Masjid if it
                                is crowded.
                            </li>
                            <li>
                                Drink <strong>Zamzam</strong>, face the Qiblah, and make dua.
                            </li>
                        </ul>
                    </div>

                    <div className="umrah-step">
                        <h3>Step 5 — Sa’i Between Safa and Marwah</h3>
                        <ul className="umrah-list">
                            <li>
                                Start at <strong>Safa</strong>, face the Kaaba and recite:{" "}
                                <em>“Innaṣ-Ṣafā wal-Marwata min sha‘ā’irillāh.”</em> Then praise
                                Allah, send salawat, and make dua.
                            </li>
                            <li>
                                Walk from <strong>Safa</strong> to <strong>Marwah</strong> = 1
                                lap, then Marwah back to Safa = 2nd lap, until you complete{" "}
                                <strong>7 laps</strong>, finishing at Marwah.
                            </li>
                            <li>
                                Men should walk briskly between the green lights during Sa’i.
                            </li>
                        </ul>
                    </div>

                    <div className="umrah-step">
                        <h3>Step 6 — Shaving or Trimming the Hair</h3>
                        <ul className="umrah-list">
                            <li>
                                <strong>Men (Hanafi):</strong> Shaving the entire head is
                                superior, or trim the hair all around the head by at least one
                                finger-length.
                            </li>
                            <li>
                                <strong>Women (Hanafi):</strong> Trim a fingertip’s length from
                                the ends of the gathered hair.
                            </li>
                            <li>
                                After hair is shaved or trimmed, your <strong>Umrah is
                                    complete</strong> and you may exit Ihram.
                            </li>
                        </ul>
                    </div>
                </article>

                {/* Prohibitions */}
                <article className="umrah-card">
                    <h2>Things Prohibited in Ihram (Hanafi)</h2>
                    <ul className="umrah-list">
                        <li>Cutting hair or nails after entering Ihram.</li>
                        <li>Using perfume or scented products.</li>
                        <li>
                            Men covering the head or wearing stitched clothing (like shirts
                            and trousers).
                        </li>
                        <li>
                            Women covering the face tightly – the cloth should not touch the
                            face; instead use a visor-style niqab if needed.
                        </li>
                        <li>Marital relations and marriage contracts.</li>
                        <li>Hunting land animals.</li>
                    </ul>
                    <p className="umrah-note">
                        Different types of penalties (dam, sadaqah, or fasting) may apply if
                        these rules are broken. For fiqh details, please consult a qualified
                        Hanafi scholar.
                    </p>
                </article>

                {/* Our Support */}
                <article className="umrah-card">
                    <h2>How We Support Your Umrah Journey</h2>
                    <ul className="umrah-list">
                        <li>
                            <strong>Pre-departure briefing</strong> on Umrah steps and Hanafi
                            guidelines.
                        </li>
                        <li>
                            <strong>End-to-end arrangements</strong> – visa, flights, hotels,
                            transport, Ziyarat tours.
                        </li>
                        <li>
                            <strong>On-ground assistance</strong> so you can focus on worship,
                            not logistics.
                        </li>
                    </ul>
                    <p className="umrah-cta">
                        Have questions about your specific situation? Our team can connect
                        you with reliable Hanafi scholars and help you plan a spiritually
                        focused journey.
                    </p>
                </article>

                {/* Disclaimer */}
                <article className="umrah-card umrah-disclaimer">
                    <h2>Fiqh Disclaimer</h2>
                    <p>
                        This guide follows <strong>Hanafi fiqh</strong> in a simplified and
                        practical way for travellers. It is not a fiqh textbook. For special
                        cases – such as illness, pregnancy, missed steps, or penalties –
                        please consult a  <strong><u>QUALIFIED HANAFI SCHOLAR or RELIABLE MUFTI</u></strong>.
                    </p>
                </article>
            </section>
        </main>
    );
};

export default UmrahGuideSection;
