"use client";

import React from "react";

export default function Page() {
  return (
    <html lang="id">
      <head>
        <title>TAMPAN - Undangan Online</title>
      </head>
      <body>
        {/* Hero Section */}
        <section className="hero min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] relative overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full -top-[250px] -right-[250px]"></div>
          <div className="hero-content text-center z-10">
            <h1
              id="hero-title"
              className="text-6xl font-bold mb-6 text-[#2d3748] tracking-tight"
            >
              TAMPAN
            </h1>
            <p
              id="hero-subtitle"
              className="text-2xl text-[#4a5568] mb-10 font-light"
            >
              Undangan Digital Elegan & Berkesan
            </p>
            <a
              href="#pricing"
              id="hero-cta"
              className="inline-block px-12 py-4 bg-[#667eea] text-white rounded-full text-lg font-semibold shadow-lg hover:bg-[#5a67d8] transition"
            >
              Mulai Gratis
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="features py-20 bg-white">
          <div className="container mx-auto px-6 max-w-[1200px]">
            <h2
              id="features-title"
              className="text-center text-4xl font-bold mb-16 text-[#2d3748]"
            >
              Fitur Unggulan
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  icon: "✨",
                  title: "Desain Premium",
                  desc: "Pilihan desain elegan dan modern yang dapat disesuaikan dengan tema acara Anda",
                },
                {
                  icon: "📱",
                  title: "Responsif Mobile",
                  desc: "Tampil sempurna di semua perangkat, dari smartphone hingga desktop",
                },
                {
                  icon: "⚡",
                  title: "Mudah & Cepat",
                  desc: "Buat undangan hanya dalam hitungan menit tanpa coding",
                },
                {
                  icon: "🎵",
                  title: "Musik Latar",
                  desc: "Tambahkan musik favorit untuk membuat undangan lebih hidup",
                },
                {
                  icon: "📍",
                  title: "Lokasi Maps",
                  desc: "Integrasi Google Maps untuk memudahkan tamu menemukan lokasi",
                },
                {
                  icon: "💌",
                  title: "RSVP Online",
                  desc: "Kelola konfirmasi kehadiran tamu dengan mudah dan real-time",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="feature-card text-center p-10 rounded-2xl transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-[#667eea] text-white rounded-xl mx-auto mb-6 text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#2d3748]">
                    {item.title}
                  </h3>
                  <p className="text-[#718096] text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Themes Section */}
        <section className="themes py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-6 max-w-[1200px]">
            <h2
              id="themes-title"
              className="section-title text-center text-4xl font-bold mb-16 text-[#2d3748]"
            >
              Pilihan Tema
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="theme-card bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition">
                <div className="h-52 flex items-center justify-center text-5xl bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                  💐
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#2d3748]">
                    Classic Floral
                  </h3>
                  <p className="text-[#718096] text-base">
                    Tema klasik dengan sentuhan bunga yang elegan, cocok untuk
                    pernikahan tradisional
                  </p>
                </div>
              </div>

              <div className="theme-card bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition">
                <div className="h-52 flex items-center justify-center text-5xl bg-gradient-to-br from-[#f093fb] to-[#f5576c]">
                  💎
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#2d3748]">
                    Luxury Gold
                  </h3>
                  <p className="text-[#718096] text-base">
                    Desain mewah dengan aksen emas, sempurna untuk acara formal
                  </p>
                </div>
              </div>

              <div className="theme-card bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition">
                <div className="h-52 flex items-center justify-center text-5xl bg-gradient-to-br from-[#4facfe] to-[#00f2fe]">
                  🌊
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#2d3748]">
                    Modern Minimalist
                  </h3>
                  <p className="text-[#718096] text-base">
                    Tampilan minimalis dan modern, cocok untuk berbagai jenis
                    acara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing py-20 bg-white">
          <div className="container mx-auto px-6 max-w-[1200px]">
            <h2
              id="pricing-title"
              className="text-center text-4xl font-bold mb-16 text-[#2d3748]"
            >
              Paket Harga
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1000px] mx-auto">
              {/* Basic */}
              <div className="pricing-card border-2 border-[#e2e8f0] rounded-2xl p-10 text-center hover:-translate-y-2 transition">
                <h3 className="text-2xl mb-4 text-[#2d3748] font-semibold">
                  Basic
                </h3>
                <div className="text-5xl font-bold mb-2 text-[#2d3748]">
                  Gratis
                </div>
                <div className="text-[#718096] mb-8">Selamanya</div>
                <ul className="features-list mb-8 space-y-3 text-[#4a5568]">
                  <li>✓ 1 Desain Tema</li>
                  <li>✓ 50 Tamu</li>
                  <li>✓ Musik Latar</li>
                  <li>✓ Galeri Foto (5)</li>
                </ul>
                <a
                  className="block w-full py-3 bg-[#667eea] text-white rounded-full font-semibold"
                  href="#"
                >
                  Mulai Gratis
                </a>
              </div>

              {/* Premium */}
              <div className="pricing-card featured bg-[#667eea] border-2 border-[#667eea] rounded-2xl p-10 text-center scale-105 hover:scale-110 transition text-white">
                <h3 className="text-2xl mb-4 font-semibold">Premium</h3>
                <div className="text-5xl font-bold mb-2">Rp 99k</div>
                <div className="opacity-80 mb-8">Per Acara</div>
                <ul className="features-list mb-8 space-y-3">
                  <li>✓ Semua Tema</li>
                  <li>✓ Unlimited Tamu</li>
                  <li>✓ Custom Domain</li>
                  <li>✓ Galeri Foto (Unlimited)</li>
                  <li>✓ RSVP & Gift Registry</li>
                  <li>✓ No Watermark</li>
                </ul>
                <a
                  className="block w-full py-3 bg-white text-[#667eea] rounded-full font-semibold"
                  href="#"
                >
                  Pilih Premium
                </a>
              </div>

              {/* Business */}
              <div className="pricing-card border-2 border-[#e2e8f0] rounded-2xl p-10 text-center hover:-translate-y-2 transition">
                <h3 className="text-2xl mb-4 text-[#2d3748] font-semibold">
                  Business
                </h3>
                <div className="text-5xl font-bold mb-2 text-[#2d3748]">
                  Rp 299k
                </div>
                <div className="text-[#718096] mb-8">Per Bulan</div>
                <ul className="features-list mb-8 space-y-3 text-[#4a5568]">
                  <li>✓ 10 Acara/Bulan</li>
                  <li>✓ Semua Fitur Premium</li>
                  <li>✓ Priority Support</li>
                  <li>✓ Custom Design</li>
                </ul>
                <a
                  className="block w-full py-3 bg-[#667eea] text-white rounded-full font-semibold"
                  href="#"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2d3748] text-white text-center py-10">
          <div className="container mx-auto px-6">
            <p id="footer-text" className="text-base opacity-80">
              © 2025 TAMPAN. Semua hak dilindungi.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
