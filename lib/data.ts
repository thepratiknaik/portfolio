import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'pratiknaik212@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Pratik, I am reaching out to you because...',

    oldPortfolio: 'https://github.com/thepratiknaik',
    upworkProfile: 'https://www.linkedin.com/in/thepratiknaik/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/thepratiknaik' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/thepratiknaik' },
    { name: 'instagram', url: 'https://www.instagram.com/thepratiknaik/' },
];

export const MY_STACK = {
    ai_ml: [
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'TensorFlow',
            icon: '/logo/tensorflow.png',
        },
        {
            name: 'Keras',
            icon: '/logo/keras.svg',
        },

        {
            name: 'NumPy',
            icon: '/logo/numpy.svg',
        },
        {
            name: 'Matplotlib',
            icon: '/logo/matplotlib.svg',
        },
        {
            name: 'Pandas',
            icon: '/logo/pandas.svg',
        },
        {
            name: 'Scikit-learn',
            icon: '/logo/scikit.png',
        },
        {
            name: 'PyTorch',
            icon: '/logo/pytorch.png',
        },
        {
            name: 'OpenAI',
            icon: '/logo/openai.svg',
        },
        {
            name: 'Jupyter',
            icon: '/logo/jupyter.svg',
        },
        {
            name: 'Anaconda',
            icon: '/logo/anaconda.svg',
        },
    ],    
    
    computer_vision: [
        {
            name: 'OpenCV',
            icon: '/logo/opencv.png',
        },
        {
            name: 'YOLOv8',
            icon: '/logo/yolo.svg',
        },
        {
            name: 'Hugging Face',
            icon: '/logo/huggingface.svg',
        },
        {
            name: 'MediaPipe',
            icon: '/logo/mediapipe.png',
        },
    ],

    frontend: [
        {
            name: 'HTML5',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS3',
            icon: '/logo/css.png',
        },
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.svg',
        },
        {
            name: 'Vue.js',
            icon: '/logo/vue.svg',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        // {
        //     name: 'GSAP',
        //     icon: '/logo/gsap.png',
        // },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        // {
        //     name: 'SASS',
        //     icon: '/logo/sass.png',
        // },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    mobile_development: [
        {
            name: 'Flutter',
            icon: '/logo/flutter.svg',
        },
        {
            name: 'Kotlin',
            icon: '/logo/kotlin.svg',
        },
        {
            name: 'Swift',
            icon: '/logo/swift.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Weapon Detection Using CNN-Based Model',
        slug: 'weapon-detection',
        liveUrl: 'https://github.com/thepratiknaik/WeaponDetectionCNN/blob/main/Real-Time_Weapon_Detection.ipynb',
        year: 2025,
        description: `
      As part of my graduate coursework in <strong>CS672: Introduction to Deep Learning</strong> at Pace University, I built a real-time weapon detection system from scratch using a custom <strong>Convolutional Neural Network (CNN)</strong>. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🔍 Trained from scratch without pre-trained models</li>
        <li>🔫 Detects four weapon types: gun, pistol, knife, and grenade</li>
        <li>🎥 Real-time detection pipeline using OpenCV and webcam input</li>
        <li>⚙️ Designed for deployment in low-resource environments (CPU only)</li>
        <li>📊 Visual feedback overlays and terminal alerts</li>
      </ul><br/>

      Technical Highlights:<br/>
      <ul>
        <li>Used a YOLOv5-annotated dataset for bounding box-based training</li>
        <li>Implemented and trained the CNN model in TensorFlow/Keras</li>
        <li>Integrated with OpenCV for real-time inference and webcam streaming</li>
        <li>Optimized for performance on a standard laptop without GPU acceleration</li>
      </ul>
      `,
        role: `
      AI/ML Engineer <br/>
      Led the end-to-end design, training, and deployment of the deep learning model:
      <ul>
        <li>🧠 Model Design: Architected and trained a lightweight CNN from scratch</li>
        <li>📦 Dataset Preparation: Labeled and processed data in YOLOv5 format</li>
        <li>🧪 Model Evaluation: Tuned for accuracy, latency, and efficiency</li>
        <li>🖥️ Deployment: Integrated with OpenCV for real-time webcam input</li>
        <li>🚫 No Cloud/GPU: Fully CPU-based for edge and offline deployment</li>
      </ul>`,

        techStack: [
            'Python',
            'TensorFlow',
            'Keras',
            'OpenCV',
            'YOLOv5 (dataset format)',
            'NumPy',
            'Matplotlib'
        ],
        thumbnail: '/projects/thumbnail/weapon.jpg',
        longThumbnail: '/projects/thumbnail/weapon.jpg',
        images: [
            '/projects/thumbnail/weapon.jpg',
        ],
    },

    {
        title: 'Real-Time ASL Interpreter Using Computer Vision and Machine Learning',
        slug: 'asl-interpreter',
        liveUrl: 'https://github.com/thepratiknaik/ASL_Interpreter',
        year: 2023,
        description: `The Real-Time ASL Interpreter project is aimed at bridging the communication gap between individuals who use American Sign Language (ASL) and those who do not. Leveraging the power of Computer Vision and Machine Learning, this project has developed an innovative system that interprets ASL gestures in real-time, primarily focusing on fingerspelling.`,

        role: `As the Team Lead for this assistive tech project, I: <br/>
        - Designed and trained a real-time gesture recognition system for ASL fingerspelling using Computer Vision and Machine Learning.<br/>
        - Achieved 95.7% accuracy in classifying 26 ASL alphabets through a custom pipeline of image preprocessing, feature extraction, and SVM classification.<br/>
        - Implemented a robust vision module that filters and processes hand movements before classification.<br/>
        - Integrated speech-to-sign capabilities using the Sphinx voice recognition module to enhance bidirectional communication.<br/>
        - Focused on performance optimization for real-time webcam-based inference using OpenCV and NumPy.<br/>
        - Ensured the entire system was accessible, offline-capable, and tailored for use by individuals with hearing and speech impairments.<br/>`,
   
        techStack: [
            'Python',
            'TensorFlow',
            'OpenCV',
            'MediaPipe',
        ],
        thumbnail: '/projects/thumbnail/asl.jpg',
        longThumbnail: '/projects/long/asl.jpg',
        images: [
            '/projects/images/asl.jpg',
        ],
    },
    {
        title: 'Sentiment Analysis for Hinglish Text (Code mix English + Hindi)',
        slug: 'sentiment-analysis-hinglish',
        liveUrl: 'https://github.com/thepratiknaik/sentimentAnalysis',
        year: 2022,
        description: `Developed a Sentiment Analysis model for Hinglish text, a code-mixed language combining English and Hindi. The project involved data collection, preprocessing, and training a machine learning model to classify sentiments accurately.A Natural Language Processing project focused on analyzing sentiment in Hinglish (code-mixed Hindi and English) social media text. 
        The project involved dataset preprocessing, language normalization, and classification using traditional ML models to detect positive, negative, or neutral sentiment.<br/><br/>
        
        Key Features:
        <ul>
          <li>🗣️ Hinglish Tokenizer: Developed a custom tokenizer to handle code-mixed text</li>
          <li>📊 Text Classification: Achieved high accuracy using Logistic Regression and SVM models</li>
          <li>🧹 Preprocessing Pipeline: Cleaned noisy data with transliteration and stopword filtering</li>
          <li>📈 Visualizations: Created insights using word clouds and sentiment distribution plots</li>
        </ul>`,

        role: `As a group project, we:<br/>
        - Collected and preprocessed a large dataset of Hinglish text from social media and online forums.<br/>
        - Implemented text normalization techniques to handle code-mixing challenges.<br/>
        - Developed a machine learning model using Scikit-learn to classify sentiments into positive, negative, and neutral categories.<br/>
        - Evaluated model performance using metrics like accuracy, precision, and recall.<br/>
        - Deployed the model in a Jupyter Notebook for easy access and demonstration.<br/>
        - Created visualizations to showcase model performance and insights from the data.<br/>`,
        
        techStack: [
        'Python',
        'Scikit-learn',
        'NLTK',
        'Pandas',
        'Jupyter Notebook',
        'Hinglish Dataset',
        ],
        thumbnail: '/projects/thumbnail/sentiment.jpg',
        longThumbnail: '/projects/long/sentiment.jpg',
        images: [
            '/projects/images/sentiment.jpg',
        ],        
    },
    {
          title: 'Automatization Spoken Tutorial Activities',
          slug: 'spoken-tutorial-automatization',
          year: 2023,
          liveUrl: 'https://www.sakec.ac.in/category/spoken-tutorial/',
          techStack: [
            'MySQL',
            'PHP',
            'HTML5',
            'CSS3',
            'JavaScript',
          ],
          thumbnail: '/projects/thumbnail/spoken.jpg', // Replace with actual path
          longThumbnail: '/projects/long/spoken.jpg',  // Replace with actual path
          images: [
            '/projects/images/spoken.png',
          ],
          description: `
            A web-based application designed to help students and faculty members access, manage, and summarize spoken tutorial activities with ease. Built to ensure secure and intuitive usage across campus and remote environments.<br/><br/>
      
            <strong>Key Features:</strong><br/>
            <ul>
              <li>🔐 User Authentication: Only authorized faculty and admin can log in and manage records.</li>
              <li>🌐 Web-Based Access: Platform accessible from any internet-enabled device.</li>
              <li>🗂️ Year-wise Categorization: Efficiently organizes student and faculty data by academic year.</li>
              <li>🧮 Data Summarization: Summarizes tutorial activity data for easier analysis.</li>
              <li>🧑‍💼 Admin Privileges: Only admins can modify or update data, ensuring accuracy.</li>
              <li>🎥 Educational Content Hosting: Integrated library of spoken tutorial videos.</li>
            </ul><br/>
      
            Designed to improve engagement with educational video content and streamline academic resource management.`,
          role: `
            As the Full Stack Developer, I:<br/>
            - Designed and developed the application using PHP, MySQL, HTML, CSS, and JavaScript.<br/>
            - Implemented secure authentication logic and access control for different user roles.<br/>
            - Built a clean, responsive UI for ease of use across all devices.<br/>
            - Managed database schema and logic for year-wise categorization and summarization of records.<br/>
            - Developed admin-specific tools to manage and update tutorial content and user data securely.`,
    },

    {
          title: 'Diabetes Prediction using Support Vector Machine Algorithm',
          slug: 'diabetes-prediction-svm',
          year: 2023,
          liveUrl: 'https://github.com/thepratiknaik/diabetesPrediction', // Add GitHub or deployment URL if available
          techStack: [
            'Python',
            'Pandas',
            'Scikit-learn',
            'NumPy',
            'Matplotlib',
            'SVM',
            'SQL',
          ],
          thumbnail: '/projects/thumbnail/diabetes-prediction.jpg', // Update with actual path
          longThumbnail: '/projects/long/diabetes-prediction.jpg',  // Update with actual path
          images: [
            '/projects/images/diabetes-prediction.jpg',
          ],
          description: `
            A machine learning-based diagnostic system that predicts the presence of Diabetes Mellitus (DM) using Support Vector Machines (SVM).<br/><br/>
      
            <strong>Key Features:</strong><br/>
            <ul>
              <li>⚙️ SVM-Based Prediction Model: Developed an SVM algorithm tailored for medical diagnosis based on five measurable parameters.</li>
              <li>🩺 Simplified Diagnosis: Focused on minimal input data (age, glucose level, etc.) to eliminate subjectivity in diagnostics.</li>
              <li>🧠 Medical Mining: Merges computational intelligence with healthcare to enhance predictive accuracy and efficiency.</li>
              <li>🗃️ Data Integrity: Ensured proper preprocessing, handling of missing values, and normalization of medical datasets.</li>
              <li>📊 Visual Insights: Generated performance metrics and diagnostic graphs using Matplotlib and Pandas.</li>
            </ul><br/>
      
            This project showcases how AI can simplify complex medical processes while achieving high diagnostic accuracy.`,

          role: `
            As the sole developer and researcher, I:<br/>
            - Engineered an SVM-based predictive model using Scikit-learn for medical classification tasks.<br/>
            - Processed and cleaned medical datasets to maintain high data integrity.<br/>
            - Designed interpretable visualizations to communicate model performance.<br/>
            - Validated accuracy and efficiency compared to traditional diagnostic methods.<br/>
            - Demonstrated healthcare applications of ML to improve patient outcomes.`,
    },

    {
      title: 'ADAM (Ailment Detection and Medicine Suggestion App)',
      slug: 'adam-health-app',
      year: 2019,
      liveUrl: 'https://github.com/thepratiknaik/Adam', // You can add a GitHub or APK link if available
      techStack: [
        'Android',
        'Java',
        'Android Studio',
        'SQLite',
        'XML',
        'Material UI'
      ],
      thumbnail: '/projects/thumbnail/adam.png', // Replace with actual image
      longThumbnail: '/projects/long/adam.png',   // Replace with actual image
      images: [
        '/projects/images/adam2.png',
        '/projects/images/adam3.png',
        '/projects/images/adam4.png',
        '/projects/images/adam5.png',
      ],
      description: `
        ADAM (Ailment Detection and Medicine Suggestion App) is a health-oriented Android application developed to assist users in tracking symptoms, speculating diseases, and suggesting over-the-counter medications.<br/><br/>

        <strong>Key Features:</strong><br/>
        <ul>
          <li>📝 Symptom Tracking: Input symptoms and monitor trends to recognize common ailments.</li>
          <li>🧠 Disease Speculation: Leverages logic trees to suggest possible diseases based on user input.</li>
          <li>💊 Medicine Suggestion: Recommends over-the-counter medications relevant to potential diagnoses.</li>
          <li>🚨 Emergency Features: Quick-access emergency contacts and first-aid guidance.</li>
          <li>📚 Health Education: Provides accessible insights into common diseases, including CVDs, TB, and respiratory issues.</li>
          <li>📱 Simple UI: Clean, intuitive interface for enhanced usability by non-technical users.</li>
        </ul><br/>

        Designed for accessibility and utility, ADAM empowers users to take proactive steps in managing their health.
      `,
      role: `
        As a student developer during my diploma program, I:<br/>
        - Developed the Android application using Java and Android Studio.<br/>
        - Designed the GUI with XML and implemented logic-based symptom mapping.<br/>
        - Integrated SQLite for local data storage and condition tracking.<br/>
        - Collaborated with a faculty mentor to ensure clinical accuracy in content.<br/>
        - Focused on UX to ensure the app’s accessibility for users across all age groups.
      `,
    }

];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Ionio LLC',
        duration: 'August 2023 - July 2024',
    },
    {
        title: 'Summer Intern',
        company: 'Shah and Anchor Kutchi Engineering College',
        duration: 'July 2021 - September 2021',
    },
];
