import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck, Lock, Mail, Database } from "lucide-react";

function PrivacyPolicy() {
    return (
        <>
            <Header />

            <div className="min-h-screen bg-slate-950 text-white py-16 px-6">

                <div className="max-w-6xl mx-auto">

                    {/* Hero */}

                    <div className="text-center mb-14">

                        <p className="text-indigo-400 uppercase tracking-widest font-semibold">
                            Last Updated • June 27, 2026
                        </p>

                        <h1 className="text-5xl font-bold mt-4">
                            Privacy Policy
                        </h1>

                        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
                            At <span className="text-indigo-400 font-semibold">AgentOS</span>,
                            protecting your privacy is one of our highest priorities.
                            This Privacy Policy explains how we collect, use,
                            store and protect your information while providing
                            AI-powered productivity services.
                        </p>

                    </div>

                    {/* Content */}

                    <div className="space-y-8">

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <div className="flex items-center gap-3 mb-5">
                                <Database className="text-indigo-400" />
                                <h2 className="text-2xl font-bold">
                                    Information We Collect
                                </h2>
                            </div>

                            <p className="text-gray-300 leading-8">
                                When you create an account or connect your Google
                                account, AgentOS may collect:
                            </p>

                            <ul className="list-disc ml-8 mt-5 text-gray-300 space-y-3">

                                <li>Name and Email Address</li>

                                <li>Encrypted Login Credentials</li>

                                <li>Subscription & Payment Information</li>

                                <li>Google Account Authorization (with your permission)</li>

                                <li>Usage Analytics & Activity Logs</li>

                                <li>AI-generated summaries and reminder history</li>

                            </ul>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <div className="flex items-center gap-3 mb-5">
                                <ShieldCheck className="text-green-400" />
                                <h2 className="text-2xl font-bold">
                                    How We Use Your Information
                                </h2>
                            </div>

                            <ul className="list-disc ml-8 text-gray-300 space-y-3">

                                <li>Provide AI Email Assistance</li>

                                <li>Generate Email Summaries</li>

                                <li>Manage Reminders & Productivity</li>

                                <li>Improve Product Performance</li>

                                <li>Process Subscription Payments</li>

                                <li>Prevent Fraud & Unauthorized Access</li>

                            </ul>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <div className="flex items-center gap-3 mb-5">
                                <Lock className="text-yellow-400" />
                                <h2 className="text-2xl font-bold">
                                    Google Account Access
                                </h2>
                            </div>

                            <p className="text-gray-300 leading-8">

                                AgentOS only accesses Gmail after you
                                explicitly grant permission.

                                We use Gmail access solely to provide
                                AI-powered email summaries, reminders,
                                smart replies and productivity features.

                            </p>

                            <div className="mt-6 bg-slate-800 border border-slate-700 rounded-xl p-5">

                                <p className="font-semibold text-green-400">

                                    ✔ We never sell, rent or share your Google
                                    user data with any third party.

                                </p>

                            </div>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <div className="flex items-center gap-3 mb-5">
                                <Lock className="text-red-400" />
                                <h2 className="text-2xl font-bold">
                                    Security
                                </h2>
                            </div>

                            <p className="text-gray-300 leading-8">

                                We use industry-standard security practices
                                including encrypted connections and secure
                                authentication methods to protect your data.

                                Although no online platform can guarantee
                                absolute security, we continuously improve
                                our systems to safeguard your information.

                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <h2 className="text-2xl font-bold mb-5">

                                Cookies

                            </h2>

                            <p className="text-gray-300 leading-8">

                                AgentOS may use cookies and similar
                                technologies to improve user experience,
                                maintain login sessions and analyze website
                                performance.

                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <h2 className="text-2xl font-bold mb-5">

                                Changes to this Policy

                            </h2>

                            <p className="text-gray-300 leading-8">

                                We may update this Privacy Policy
                                occasionally. Any significant changes
                                will be reflected on this page together
                                with the updated revision date.

                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <div className="flex items-center gap-3 mb-5">

                                <Mail className="text-indigo-400" />

                                <h2 className="text-2xl font-bold">

                                    Contact Us

                                </h2>

                            </div>

                            <p className="text-gray-300 leading-8">

                                If you have any questions regarding this
                                Privacy Policy or your personal data,
                                please contact us.

                            </p>

                            <div className="mt-6 bg-slate-800 border border-slate-700 rounded-xl p-6">

                                <p>
                                    <strong>AgentOS Support</strong>
                                </p>

                                <p className="mt-2">
                                    📧 chaudhariamarkumar662@gmail.com
                                </p>

                                <p className="mt-2">
                                    🌐 https://agent-os-bfti.vercel.app
                                </p>

                                <p className="mt-2">
                                    ⏰ Response Time: Within 24–48 Business Hours
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default PrivacyPolicy;