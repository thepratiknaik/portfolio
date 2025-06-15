import { GENERAL_INFO } from '@/lib/data';

const Footer = async () => {
    
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/thepratiknaik/portfolio"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Developed by Pratik Naik
                        
                    </a>

                    {/* Note: If you are not Pratik Naik, use this copyright message instead */}
            
                </div>
            </div>
        </footer>
    );
};

export default Footer;
