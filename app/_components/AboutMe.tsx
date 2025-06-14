'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in an intelligence-driven development approach — 
                    where every system I build integrates deep learning at its core to deliver scalable, efficient, and purpose-built solutions. 
                    My goal is to engineer AI-powered applications that are robust, adaptable, and capable of solving complex real-world problems with precision.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Pratik.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I’m <strong>Pratik Naik</strong>, a Software Engineer based in New York City 
                                with a passion for <strong>Deep Learning</strong> and <strong>AI-powered applications</strong>. 
                                With a strong academic foundation — including an MS in Computer Science and a BE in Computer Engineering — 
                                I specialize in developing intelligent systems that bridge the gap between machine learning and real-world usability.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My work fuses deep learning with practical engineering to build intelligent, high-impact systems.
                                From <em>real-time weapon detection using CNNs</em> to <em>ASL interpretation with computer vision</em>, 
                                I’ve developed solutions that apply machine learning to solve real-world challenges.
                                I thrive on building scalable, intelligent systems at the intersection of <strong>AI and software engineering</strong>
                                , turning complex ideas into efficient, production-ready implementations.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
