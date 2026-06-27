
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    Mail,
    Globe,
    Clock,
    ShieldCheck,
    MessageSquare,
    Bug
} from "lucide-react";

function Contact() {

    return (

        <>

            <Header />

            <div className="min-h-screen bg-slate-950 text-white py-16 px-6">

                <div className="max-w-5xl mx-auto">

                    {/* Hero */}

                    <div className="text-center mb-14">

                        <p className="text-indigo-400 font-semibold uppercase tracking-wider">
                            AgentOS Support
                        </p>

                        <h1 className="text-5xl font-bold mt-3">
                            Contact Us
                        </h1>

                        <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
                            Need help with your account, payments, Gmail
                            integration, or have a feature suggestion?
                            We're always happy to help.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <Mail className="text-indigo-400 mb-4" size={34} />

                            <h2 className="text-2xl font-semibold mb-3">
                                Email Support
                            </h2>

                            <p className="text-gray-400">
                                For general inquiries, technical support,
                                billing issues, refunds, or account-related
                                questions, contact us anytime.
                            </p>

                            <p className="mt-5 text-lg font-semibold text-indigo-400 break-all">
                                chaudhariamarkumar662@gmail.com
                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <Globe className="text-indigo-400 mb-4" size={34} />

                            <h2 className="text-2xl font-semibold mb-3">
                                Website
                            </h2>

                            <p className="text-gray-400">
                                Visit AgentOS anytime to access AI-powered
                                productivity tools and manage your account.
                            </p>

                            <p className="mt-5 text-lg font-semibold text-indigo-400 break-all">
                                https://agent-os-bfti.vercel.app
                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <Clock className="text-indigo-400 mb-4" size={34} />

                            <h2 className="text-2xl font-semibold mb-3">
                                Response Time
                            </h2>

                            <p className="text-gray-400">
                                We typically respond to all support requests
                                within
                                <strong> 24–48 business hours.</strong>
                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

                            <ShieldCheck
                                className="text-indigo-400 mb-4"
                                size={34}
                            />

                            <h2 className="text-2xl font-semibold mb-3">
                                Privacy & Security
                            </h2>

                            <p className="text-gray-400">
                                Your information is handled securely. We never
                                sell your personal information or Google user
                                data to third parties.
                            </p>

                        </div>

                    </div>

                    {/* Support */}

                    <div className="mt-14 bg-slate-900 border border-slate-700 rounded-2xl p-10">

                        <h2 className="text-3xl font-bold mb-8">
                            What can we help you with?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="flex gap-4">

                                <MessageSquare
                                    className="text-indigo-400"
                                    size={30}
                                />

                                <div>

                                    <h3 className="font-semibold text-xl">
                                        General Support
                                    </h3>

                                    <p className="text-gray-400 mt-2">
                                        Questions about your account,
                                        subscriptions, login issues,
                                        Gmail connection, or platform usage.
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <Bug
                                    className="text-indigo-400"
                                    size={30}
                                />

                                <div>

                                    <h3 className="font-semibold text-xl">
                                        Report a Bug
                                    </h3>

                                    <p className="text-gray-400 mt-2">
                                        Found an issue or unexpected behavior?
                                        Send us detailed information and we'll
                                        investigate it as quickly as possible.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Footer Message */}

                    <div className="text-center mt-16">

                        <h2 className="text-3xl font-bold">
                            We're Here to Help ❤️
                        </h2>

                        <p className="text-gray-400 mt-5 text-lg">
                            Thank you for using AgentOS.
                            Your feedback helps us improve and build better AI
                            tools for professionals around the world.
                        </p>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Contact;

