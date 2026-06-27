
import Header from "../components/Header";
import Footer from "../components/Footer";

function RefundPolicy() {

    return (

        <>

            <Header />

            <div
                className="min-h-screen bg-slate-950 text-white py-16 px-6"
            >

                <div
                    className="max-w-5xl mx-auto bg-slate-900 border border-slate-700 rounded-3xl shadow-xl p-10"
                >

                    <p className="text-indigo-400 font-semibold uppercase tracking-wider">
                        Last Updated: June 27, 2026
                    </p>

                    <h1 className="text-4xl font-bold mt-3 mb-8">
                        Refund Policy
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-8">

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                💳 Our Refund Commitment
                            </h2>

                            <p>
                                At <strong>AgentOS</strong>, we strive to provide
                                reliable AI-powered productivity services.
                                If you experience payment-related issues, we
                                will review your request fairly and resolve it
                                as quickly as possible.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                ✅ Eligible Refund Cases
                            </h2>

                            <ul className="list-disc ml-8 space-y-3">

                                <li>
                                    Duplicate or accidental payments.
                                </li>

                                <li>
                                    Technical failures preventing access to
                                    premium features after successful payment.
                                </li>

                                <li>
                                    Incorrect payment processing caused by
                                    system errors.
                                </li>

                                <li>
                                    Other exceptional situations reviewed by
                                    the AgentOS support team.
                                </li>

                            </ul>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                ❌ Non-Refundable Cases
                            </h2>

                            <ul className="list-disc ml-8 space-y-3">

                                <li>
                                    Subscription cancellations after the
                                    service has been actively used.
                                </li>

                                <li>
                                    Requests based solely on change of mind.
                                </li>

                                <li>
                                    Violations of our Terms of Service.
                                </li>

                            </ul>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                ⏳ Refund Processing Time
                            </h2>

                            <p>
                                Approved refunds are generally processed within
                                <strong> 5–10 business days </strong>
                                depending on your payment provider or bank.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                📩 Need Help?
                            </h2>

                            <p>
                                If you believe you're eligible for a refund,
                                please contact our support team with your
                                payment details.
                            </p>

                            <div className="mt-5 bg-slate-800 rounded-xl border border-slate-700 p-5">

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

export default RefundPolicy;

