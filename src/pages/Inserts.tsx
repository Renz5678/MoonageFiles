import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Edit3, CheckCircle, Package2, ArrowRight, Star, Sparkles, Clock, Send, Palette } from 'lucide-react';

export const Inserts = () => {
    return (
        <div className="pt-20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] pt-20 pb-20 px-8 flex items-center overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="inline-block mb-4 px-4 py-1 bg-secondary-container/30 text-secondary text-sm font-label rounded-full">
                            Spring 2024 Collection
                        </div>
                        <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-[0.9] mb-8">
                            custom phone case <span className="italic text-primary">inserts</span>, made just for you
                        </h1>
                        <p className="text-on-surface-variant text-xl max-w-md mb-10 font-body leading-relaxed">
                            Turning your favorite memories and smallest ideas into something you can carry everywhere. Hand-tacked, curated, and deeply personal.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:translate-y-[-2px] transition-all active:scale-95">
                                order now
                            </button>
                            <button className="text-tertiary font-script text-3xl px-6 py-4 flex items-center gap-2 hover:opacity-80 transition-opacity">
                                see the vibe <ArrowRight size={28} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Collage */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute top-0 right-10 w-2/3 aspect-[3/4] bg-surface-container-low p-2 rounded-xl rotate-3 shadow-lg z-20 border-4 border-white">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWPobn4HnFZmtL67zto7EN1fL-KfFgcC-leOXhQo3TRZR6ksnqU7Nnuem77lKvBvl4fEduHAd20dI_nZWx_7E5f0gXRuB56JgyMNIbBmcDpBbIpBto3N20TTCtINDHHznjLsoicYss75CBdBTWvl-MVYHVP09FBMsYyCtP2SfodYnivNWvBAH7SdB9_ATgWQZhdDaL1teQ38cI4UCUevYb74fZAPiGCV9sGqgvZZ8WIAHtUGp0RNHsYezR6TPcgjh6GL8BtJCMhJQL"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 washi-tape bg-secondary-container rotate-[-15deg] opacity-60"></div>
                            </div>
                            <div className="absolute bottom-10 left-0 w-2/3 aspect-[3/4] bg-surface-container-low p-2 rounded-xl -rotate-6 shadow-md z-10 border-4 border-white">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNxhVoY5PBmCYE-_bf7N63jPL-CN1TtGijFsC28xdQEzcyi-5QvsBvUdLL7u4nsSFtTbZXQJoU_N-DpKqYOT12GDub9Y73p-iQ-hydwMyJoLSRAhA6pvhIAZ8ML4Jfh6OF_nUY81ENfzKzQ7VI1Vv1H5E1t-JMTaO4W5-hZvjmmgNwaCRZ6GpWXPc108NUbB2eZu0TR3kcwM8TtkHnsBoPHASfNIZSMQXzrYhSZOLlFogtOtevyHIGoJLrQrowWzodPQmrt6pn4xof"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <Star className="absolute top-1/4 -left-8 text-secondary animate-pulse" size={48} fill="currentColor" />
                            <Sparkles className="absolute bottom-1/4 -right-4 text-tertiary" size={40} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Studio Note */}
            <section className="py-24 bg-surface-container-low relative">
                <div className="max-w-5xl mx-auto px-8">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        viewport={{ once: true }}
                        className="bg-surface p-12 md:p-20 rounded-[3rem] shadow-sm relative overflow-hidden"
                    >
                        <h2 className="font-headline italic text-4xl mb-12 text-primary">A Note from the Studio</h2>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <p className="font-body text-xl leading-relaxed text-on-surface-variant">
                                    Moonage Files started as a quiet project in the corner of my room, surrounded by film scraps and dried petals. I wanted to create something that felt like a tactile memory—a piece of art that lives in your hand, not just on a wall.
                                </p>
                                <p className="font-body text-xl leading-relaxed text-on-surface-variant">
                                    Every insert is curated with care, choosing colors and textures that feel like a soft spring afternoon. It's about finding beauty in the quiet moments.
                                </p>
                                <div className="pt-6">
                                    <span className="font-script text-3xl text-secondary -rotate-3 inline-block">xoxo, Moonage</span>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="w-full aspect-square bg-surface-container-highest p-1 rounded-sm rotate-2 shadow-inner group-hover:rotate-0 transition-transform duration-500">
                                    <img
                                        className="w-full h-full object-cover opacity-90"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOMymW0Z2UA2faBAoiLbMe79yvginwct48xaYN8_KD9Ux43uSyoRVSyAGPDSoRE2DJZu1wjIXinCV1FDu0XMP-Jod45HnqRDYIZvj3aPVBzcxXPixBnKr5gqvi-I_-dGB90Laxv77OLMJlBsW8_kaSY1NW8CKj3mIvk-qIw5J5LOqZmb-0oYXmQVuRMh1L9Bkr_BQ6lQWRqwVvDkLluo6D5wOePE4_a7PubCVS7xQr6z12-P0kvPDSODNiGir3K0S2uRxWNqvLGvDZ"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-tertiary-container p-4 rounded-full shadow-lg rotate-[-10deg]">
                                    <Palette className="text-on-tertiary-container" size={32} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process */}
            <section className="py-32 px-8 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-headline text-5xl mb-4">the process</h2>
                        <div className="w-24 h-1 bg-secondary-container mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <MessageSquare className="text-primary" size={36} />
                            </div>
                            <h3 className="font-headline text-2xl mb-2">1. send your idea</h3>
                            <p className="text-on-surface-variant font-body px-4 text-base">A photo, a poem, or just a color vibe. I'm all ears.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Edit3 className="text-secondary" size={36} />
                            </div>
                            <h3 className="font-headline text-2xl mb-2">2. design process</h3>
                            <p className="text-on-surface-variant font-body px-4 text-base">I sketch out your vision with textures and hand-picked assets.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-tertiary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CheckCircle className="text-tertiary" size={36} />
                            </div>
                            <h3 className="font-headline text-2xl mb-2">3. approval</h3>
                            <p className="text-on-surface-variant font-body px-4 text-base">You get a preview to ensure every detail is just right.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Package2 className="text-on-surface" size={36} />
                            </div>
                            <h3 className="font-headline text-2xl mb-2">4. receive your case</h3>
                            <p className="text-on-surface-variant font-body px-4 text-base">Tucked in custom packaging and sent straight to you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 bg-surface-container-high/30">
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-surface p-4 rounded-3xl shadow-sm rotate-[-3deg]">
                            <img
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5WsRQchGSUi7G1-iZnGuwZYoIXVVAjtfcEJHoTbOIbjaPv3JDXTmF7SRkqWw1wolbv9lSgCAOrah-Ciu9_vVeanwtTz8faB64IUiK8nqFj0wd1betw1FfZYWkRyrJDBp1zWvLDmriZI3Iggvi1nKRQFHrGJG2LYP_WLSsdONKuXcoq_qeEsjBPLoSyXCSzkIe38i8n1ZsPDYTxNkUYikiyXYZjk0zgbZqYGBpc3zvttAZm2ebLI6JVN34LBamFkYBXivmDy9NhoI8"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="bg-surface p-4 rounded-3xl shadow-sm rotate-[4deg] mt-12">
                            <img
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb772LSu8wWNMD8KGZoAKmm6IbB9jqXZL6sMP4G__s4RYVXs0_rjGZYuD3GxHvnBV59DIck47OZzK6G6dmOXXSWlzETm5uCvR9c3tQHwdVyvswQX14w-GHBAcuPO161fg2EBtN-AC-VN-Ayes15AhaXv4ocyidFv0bO16XDuNGE3R7eV_X-fIyYgPdN3fp-7mUAmFKlHDR2CJheFuPPJPhngSytmSfq3e9-TfANtLWmB87_CDmKIQ_8SFPXptbpZ7cr3AlUc9JuVYd"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                    <div className="space-y-10">
                        <h2 className="font-headline text-6xl">Simple Pricing</h2>
                        <div className="space-y-8">
                            <div className="flex justify-between items-end pb-6 border-b border-outline-variant/30">
                                <div>
                                    <h4 className="font-headline text-3xl">Insert Only</h4>
                                    <p className="text-on-surface-variant text-lg">The custom artwork for your existing clear case.</p>
                                </div>
                                <span className="text-4xl font-headline text-primary">₱100</span>
                            </div>
                            <div className="flex justify-between items-end pb-6 border-b border-outline-variant/30">
                                <div>
                                    <h4 className="font-headline text-3xl">Full Set</h4>
                                    <p className="text-on-surface-variant text-lg">Premium clear case + your custom insert.</p>
                                </div>
                                <span className="text-4xl font-headline text-primary">₱250</span>
                            </div>
                        </div>
                        <p className="italic text-tertiary font-body text-xl">Bulk orders for gifts or events available upon request.</p>
                    </div>
                </div>
            </section>

            {/* Archives */}
            <section className="py-32 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 flex justify-between items-end">
                        <h2 className="font-headline text-6xl italic">Past Favorites</h2>
                        <p className="font-script text-2xl text-secondary">"the archives"</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="md:col-span-2 md:row-span-2 bg-surface-container-low p-6 rounded-[3rem] relative rotate-[-1deg] shadow-sm">
                            <img
                                className="w-full h-[700px] object-cover rounded-[2rem]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy7lZkdGNG5MNgqyziU7TiytTLu1ODKc9l5k02qosQpSutSNG-Bt3CqK_9Rq4h-eSUKSo6Xk1eJs1s216i0m1rRbPwVH4nct1RyFIS2CFZV3AYWvlDkoO-kafvpgPzIUbzYBNSgz4T0LXrH-kg48jv1dm3mzsT00KY4NUXPbl2faWrbCLShe1MAIEC6qdpp2FIfuOclDxwZgFs5-gT8j90LkGETrYjBMXVTU6Zu6C5F3jApIxf76gDtakvTebDDkvOJGaTH6x_wuGg"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-12 right-12 bg-secondary-container/90 text-on-secondary-container px-6 py-2 rounded-full text-sm font-label shadow-sm">Best Seller</div>
                            <div className="absolute -bottom-6 left-12 font-script text-2xl bg-surface px-6 py-3 shadow-md rounded-xl rotate-[-2deg]">summer of '23 vibes</div>
                        </div>
                        <div className="bg-surface-container-low p-4 rounded-3xl rotate-3 shadow-sm">
                            <img
                                className="w-full aspect-square object-cover rounded-2xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGQ0i5Zo7Rq5HYKZ9suYLgWnC49y0BfA6RSGCBbqzyxncbCQv9oInKKCXi7ze0wDOUFYEjn9E1QPGpt4osI7kvjs2tRMO5ps-Qjf4xZYCd0Ndw5Io9r5fdmIkwrLuXtUqa6lT6CtWi9sWM1m_e_6BRaH5DfSOccia_M8_Fqpcg1a5YadM9OwXawpPEnTbH_nWqW0CciwiyqWnaI7jKWiLxzY54-jNUctZtL6Z5MvT5g7LRQRSmE5umELwdDkDK_d5Dyf7qJfltFci3"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="bg-surface-container-low p-4 rounded-3xl -rotate-4 shadow-sm">
                            <img
                                className="w-full aspect-square object-cover rounded-2xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3YgZjfi4iQfETBIvrG4OSAl-N3gTiDh0A6DlgH0WUtRbQnzzmngmekVmHbLm4-zwunC2BaakGtnTc9EkGpweBzF8pysvWKLG2hTuL-Ry35CT7AFQARUCqUdJ76PwrJoUOCRw4Sj4pcMD5we14iFqHf_Kd9M4NJKMcdjg3OD6DE8WkPbGX2QcqK-OwxPEIZ8QYRNYTp5_3V0obt0lbhR-7AME2B9lN-I-9Z7_aIeCHqqfmkBLyOxo9YBn5-OztO9hNti_lx1PhCNMg"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="md:col-span-2 bg-surface-container-low p-6 rounded-[3rem] rotate-1 shadow-sm">
                            <img
                                className="w-full h-96 object-cover rounded-2xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU5Qe2U9sWayz0keE_nibJtQvP1KEtzjHBf8XjV8Ik0KnJxVT-dQAVsnP76mW3JbcdZLFY14-U9baFFHjcp78SbSAx5H7vmQkk5BgZLFk2frFeDxO-GovvsUJnZlAnTP_cYEHcz9vTg0x421xgTP0AGAWyxe2iyuwWfDeN6yzFgaI637zvOKCdRPjPBxgsJfH9FRaBhZu0YAgX4o1BLPBFV-qj2b9keyUh0T9PD6Yok1CTbNrCTDeMjxbJu0-mrTxo-d6_iDWCt9qn"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-8">
                <div className="max-w-6xl mx-auto bg-primary text-on-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-on-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-on-primary/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="font-headline text-6xl md:text-8xl mb-10">open for custom orders</h2>
                        <p className="font-body text-2xl opacity-90 max-w-2xl mx-auto mb-16 leading-relaxed">
                            limited slots available for our next batch. <br />let's make something beautiful together.
                        </p>
                        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                            <button className="bg-surface text-primary px-12 py-6 rounded-full text-2xl font-medium hover:scale-105 transition-transform flex items-center gap-4 shadow-xl active:scale-95">
                                DM to order
                                <Send size={32} />
                            </button>
                            <div className="flex items-center gap-4 text-on-primary/80 italic font-script text-3xl">
                                <Clock size={36} />
                                5 slots left
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
