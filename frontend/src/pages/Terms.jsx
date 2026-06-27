
import Header from "../components/Header";
import Footer from "../components/Footer";

function Terms() {

    return (

        <>

            <Header />

            <div className="min-h-screen bg-slate-950 text-white py-16 px-6">

                <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-700 rounded-3xl shadow-xl p-10">

                    <p className="text-indigo-400 font-semibold uppercase tracking-wider">
                        Last Updated: June 27, 2026
                    </p>

                    <h1 className="text-4xl font-bold mt-3 mb-8">
                        Terms & Conditions
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-8">

                        <div>

                            <p>
                                Welcome to <strong>AgentOS</strong>. These Terms
                                & Conditions govern your access to and use of
                                our AI-powered productivity platform. By
                                accessing or using AgentOS, you agree to be
                                bound by these terms.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                📌 Acceptable Use
                            </h2>

                            <p>
                                You agree to use AgentOS only for lawful
                                purposes and in accordance with these Terms.
                            </p>

                            <ul className="list-disc ml-8 mt-4 space-y-3">

                                <li>
                                    Do not misuse, disrupt, or interfere with
                                    the platform.
                                </li>

                                <li>
                                    Do not attempt unauthorized access to any
                                    account or system.
                                </li>

                                <li>
                                    Do not upload harmful, malicious, or
                                    illegal content.
                                </li>

                                <li>
                                    Respect applicable laws and regulations
                                    while using the service.
                                </li>

                            </ul>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                💳 Subscription & Payments
                            </h2>

                            <p>
                                AgentOS offers both Free and Pro plans.
                                Premium subscriptions unlock additional AI
                                credits, email limits, and advanced features.
                            </p>

                            <ul className="list-disc ml-8 mt-4 space-y-3">

                                <li>
                                    Payments are securely processed through
                                    Razorpay.
                                </li>

                                <li>
                                    Subscription pricing may change in the
                                    future with prior notice.
                                </li>

                                <li>
                                    Refunds are handled according to our
                                    Refund Policy.
                                </li>

                            </ul>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                🤖 AI Services Disclaimer
                            </h2>

                            <p>
                                AgentOS uses Artificial Intelligence to
                                generate recommendations, summaries, reminders,
                                and productivity insights.
                            </p>

                            <p className="mt-4">
                                While we strive for accuracy, AI-generated
                                content may occasionally contain errors or
                                incomplete information. Users should review
                                important decisions before relying on AI output.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                🔒 User Responsibilities
                            </h2>

                            <ul className="list-disc ml-8 space-y-3">

                                <li>
                                    Keep your account credentials secure.
                                </li>

                                <li>
                                    You are responsible for all activity under
                                    your account.
                                </li>

                                <li>
                                    Notify us immediately if you suspect
                                    unauthorized access.
                                </li>

                            </ul>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                ⚠ Limitation of Liability
                            </h2>

                            <p>
                                AgentOS is provided on an "as available" basis.
                                We are not responsible for indirect, incidental,
                                or consequential damages resulting from the use
                                of our services.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                📝 Changes to These Terms
                            </h2>

                            <p>
                                We may update these Terms & Conditions from
                                time to time. Continued use of AgentOS after
                                changes become effective constitutes your
                                acceptance of the updated terms.
                            </p>

                        </div>

                        <div className="border-t border-slate-700 pt-8">

                            <h2 className="text-2xl font-semibold text-white mb-4">
                                📩 Contact
                            </h2>

                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

                                <p>
                                    <strong>AgentOS Support</strong>
                                </p>

                                <p>
                                    Email:
                                    {" "}
                                    chaudhariamarkumar662@gmail.com
                                </p>

                                <p>
                                    Website:
                                    {" "}
                                    https://agent-os-bfti.vercel.app
                                </p>

                                <p>
                                    Response Time:
                                    {" "}
                                    Within 24–48 business hours
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

export default Terms;

