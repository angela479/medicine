import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>MedStore - Your Online Pharmacy</title>
        <meta name="description" content="Buy medicines online at the best prices with fast delivery." />
      </Head>

      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Your Trusted Online Medical Store</h1>
          <p className="text-lg mb-6">Fast delivery, genuine medicines, and 24/7 support.</p>
          <Link href="/medicines">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mt-6">
        <input type="text" placeholder="Search for medicines..." className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" />
      </div>

      {/* Featured Medicines */}
      <section className="max-w-6xl mx-auto py-10 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Medicines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Medicine Card */}
          <div className="bg-white shadow-lg rounded-lg p-5 text-center">
            <img src="/images/paracetamol.jpg" alt="Paracetamol" className="h-40 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-bold">Paracetamol</h3>
            <p className="text-green-600 font-semibold">₹50</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-600">Buy Now</button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-5 text-center">
            <img src="/images/ibuprofen.jpg" alt="Ibuprofen" className="h-40 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-bold">Ibuprofen</h3>
            <p className="text-green-600 font-semibold">₹100</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-600">Buy Now</button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-5 text-center">
            <img src="/images/amoxicillin.jpg" alt="Amoxicillin" className="h-40 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-bold">Amoxicillin</h3>
            <p className="text-green-600 font-semibold">₹120</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-600">Buy Now</button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-5 text-center">
            <img src="/images/cetrizine.jpg" alt="Cetrizine" className="h-40 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-bold">Cetrizine</h3>
            <p className="text-green-600 font-semibold">₹80</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-600">Buy Now</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-green-100 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">🚚 Fast Delivery</h3>
            <p>Get your medicines delivered within hours.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">💊 Genuine Medicines</h3>
            <p>100% authentic medicines from certified pharmacies.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">📞 24/7 Support</h3>
            <p>Our support team is available anytime to help you.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2025 MedStore. All rights reserved.</p>
        <p>Contact: support@medstore.com | 📞 +91 98765 43210</p>
      </footer>
    </div>
  );
}
