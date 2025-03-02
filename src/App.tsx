import React, { useState } from 'react';
import { Shield, Lock, Wallet, ChevronRight, Menu, X, ArrowRight, HelpCircle, Settings, Download } from 'lucide-react';
import TrezorLogo from './components/TrezorLogo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TrezorLogo className="h-8 w-8 text-green-800" />
            <span className="text-xl font-bold text-green-800">Trezor.io</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#getting-started" className="text-green-800 hover:text-green-700 font-medium">Getting Started</a>
            <a href="#setup-process" className="text-green-800 hover:text-green-700 font-medium">Setup Process</a>
            <a href="#security-features" className="text-green-800 hover:text-green-700 font-medium">Security</a>
            <a href="#faq" className="text-green-800 hover:text-green-700 font-medium">FAQ</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-md">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#getting-started" 
                className="text-green-800 hover:text-green-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Getting Started
              </a>
              <a 
                href="#setup-process" 
                className="text-green-800 hover:text-green-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Setup Process
              </a>
              <a 
                href="#security-features" 
                className="text-green-800 hover:text-green-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </a>
              <a 
                href="#faq" 
                className="text-green-800 hover:text-green-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Trezor.io/start
              </h1>
              <p className="text-xl mb-6">
                Your complete guide to setting up and securing your Trezor hardware wallet
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#setup-process" 
                  className="bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center"
                >
                  Start Setup <ChevronRight className="ml-2" size={18} />
                </a>
                <a 
                  href="#security-features" 
                  className="border border-white text-white hover:bg-white hover:text-green-800 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Trezor hardware wallet" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Getting Started Section */}
        <section id="getting-started" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
              Getting Started with Trezor.io/start
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-6 text-lg">
                Trezor.io/start is your gateway to secure cryptocurrency management. The Trezor hardware wallet offers unparalleled security for your digital assets by keeping your private keys offline and protected from online threats. Setting up your Trezor device properly is crucial for ensuring the safety of your investments.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Why Choose Trezor for Your Crypto Security?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-700 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Trezor provides <strong>military-grade security</strong> for your cryptocurrency assets</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="text-green-700 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Your private keys <strong>never leave the device</strong>, keeping them safe from hackers</span>
                  </li>
                  <li className="flex items-start">
                    <Wallet className="text-green-700 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Support for <strong>1,000+ cryptocurrencies</strong> in a single device</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="text-green-700 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>User-friendly interface with <strong>regular firmware updates</strong> for enhanced security</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg">
                At Trezor.io/start, we guide you through every step of the setup process to ensure your hardware wallet is configured correctly and securely. Our comprehensive approach helps both beginners and experienced users make the most of their Trezor device.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Process Section */}
        <section id="setup-process" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
              Trezor.io/start Setup Process
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Step 1: Unbox Your Trezor</h3>
                  <p className="mb-4">
                    When you receive your Trezor device from Trezor.io/start, verify the package integrity. Ensure the holographic seal is intact and check for any signs of tampering.
                  </p>
                  <div className="flex items-center text-green-700">
                    <ArrowRight size={18} className="mr-2" />
                    <span className="font-medium">What's in the box:</span>
                  </div>
                  <ul className="mt-2 space-y-1 pl-8 list-disc">
                    <li>Trezor hardware wallet</li>
                    <li>USB cable</li>
                    <li>Recovery seed cards</li>
                    <li>User manual</li>
                    <li>Stickers and lanyard</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Step 2: Connect to Trezor.io/start</h3>
                  <p className="mb-4">
                    Visit Trezor.io/start on your computer and connect your device using the provided USB cable. The website will automatically detect your Trezor and guide you through the initialization process.
                  </p>
                  <div className="flex items-center text-green-700">
                    <Download size={18} className="mr-2" />
                    <span className="font-medium">Download Trezor Suite:</span>
                  </div>
                  <p className="mt-2 pl-8">
                    For enhanced security, we recommend downloading the Trezor Suite desktop application from the official Trezor.io/start website.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Step 3: Create Your Wallet</h3>
                  <p className="mb-4">
                    Follow the on-screen instructions at Trezor.io/start to set up your new wallet. You'll create a PIN code to protect your device from unauthorized access.
                  </p>
                  <div className="flex items-center text-green-700">
                    <HelpCircle size={18} className="mr-2" />
                    <span className="font-medium">PIN tips:</span>
                  </div>
                  <ul className="mt-2 space-y-1 pl-8 list-disc">
                    <li>Use a unique PIN you don't use elsewhere</li>
                    <li>Avoid obvious patterns or sequences</li>
                    <li>Consider using a longer PIN for extra security</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Step 4: Backup Your Recovery Seed</h3>
                  <p className="mb-4">
                    The most critical step at Trezor.io/start is backing up your recovery seed. Your device will display a 12 or 24-word recovery phrase that you must write down on the provided seed cards.
                  </p>
                  <div className="flex items-center text-green-700">
                    <Shield size={18} className="mr-2" />
                    <span className="font-medium">Seed security:</span>
                  </div>
                  <ul className="mt-2 space-y-1 pl-8 list-disc">
                    <li>Write down words in the exact order</li>
                    <li>Store in a secure, private location</li>
                    <li>Consider using a metal backup for fire protection</li>
                    <li>Never store digitally or take photos</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Final Verification</h3>
                <p className="mb-4">
                  After completing the Trezor.io/start setup process, your device will prompt you to verify your recovery seed. This crucial step ensures you've correctly recorded your backup and can recover your wallet if needed.
                </p>
                <p className="font-medium">
                  Once verified, your Trezor is ready to securely store your cryptocurrencies!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section id="security-features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
              Trezor.io/start Security Features
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-center mb-10">
                When you set up your device through Trezor.io/start, you benefit from industry-leading security features designed to keep your digital assets safe.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-800 mb-4">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Offline Security</h3>
                  <p>
                    Trezor.io/start ensures your private keys remain offline in cold storage, completely isolated from internet-connected devices and potential online threats.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-800 mb-4">
                    <Lock size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">PIN Protection</h3>
                  <p>
                    Your Trezor device configured at Trezor.io/start requires PIN verification for every operation, preventing unauthorized access even if your device is stolen.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-800 mb-4">
                    <Settings size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Firmware Verification</h3>
                  <p>
                    The Trezor.io/start process includes cryptographic verification of firmware to ensure your device hasn't been compromised with malicious code.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Why Trezor.io/start Security Matters</h3>
                <p className="mb-6">
                  In the world of cryptocurrency, security isn't just a feature—it's essential. When you use Trezor.io/start to set up your hardware wallet, you're taking the most important step to protect your digital assets from:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Shield className="text-green-700 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Phishing attacks</strong> that attempt to steal your private keys</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-700 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Malware</strong> that could compromise software wallets</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-700 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Exchange hacks</strong> that put custodial holdings at risk</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-700 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Physical theft</strong> of devices through PIN protection</span>
                  </li>
                </ul>
                <p>
                  The Trezor.io/start setup process ensures that you implement all these security measures correctly, giving you peace of mind about your cryptocurrency investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
              Frequently Asked Questions About Trezor.io/start
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    What is Trezor.io/start?
                  </h3>
                  <p>
                    Trezor.io/start is the official starting point for setting up your Trezor hardware wallet. It provides step-by-step instructions for initializing your device, creating a secure wallet, and backing up your recovery seed.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Is Trezor.io/start safe to use?
                  </h3>
                  <p>
                    Yes, Trezor.io/start is the official website for Trezor setup. Always ensure you're on the genuine site by checking the URL and looking for security indicators in your browser. Never follow links from emails or search results—type Trezor.io/start directly into your browser.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    What happens if I lose my Trezor device?
                  </h3>
                  <p>
                    If you lose your Trezor device after setting it up through Trezor.io/start, you can recover all your funds using your backup recovery seed. Simply purchase a new Trezor device and use the recovery process to restore your wallet.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Can I use Trezor.io/start on any computer?
                  </h3>
                  <p>
                    Yes, you can access Trezor.io/start from any computer with a modern web browser. However, for maximum security, we recommend using a trusted computer that's free from malware. The Trezor Suite desktop application, which you can download from Trezor.io/start, offers enhanced security features.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    How long does the Trezor.io/start setup process take?
                  </h3>
                  <p>
                    The complete Trezor.io/start setup process typically takes 15-20 minutes. This includes unboxing your device, connecting to the website, creating your wallet, and backing up your recovery seed. It's important not to rush this process, as proper setup is crucial for the security of your assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Secure Your Crypto with Trezor.io/start?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Take the first step toward truly owning and securing your cryptocurrency assets. The Trezor.io/start process is simple, secure, and essential for anyone serious about crypto security.
            </p>
            <a 
              href="#setup-process" 
              className="inline-flex items-center bg-white text-green-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg"
            >
              Begin Your Trezor Setup <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <TrezorLogo className="h-8 w-8 text-green-800" />
                <span className="text-xl font-bold text-green-800">Trezor.io</span>
              </div>
              <p className="text-gray-600 max-w-md">
                Trezor.io/start is your gateway to secure cryptocurrency management with the world's most trusted hardware wallet.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-green-800">Help Center</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-800">User Manual</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-800">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-green-800">About Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-800">Careers</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-800">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-green-800">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-800">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-800">Compliance</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Trezor. All rights reserved. Trezor.io/start is the official setup guide for Trezor hardware wallets.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;