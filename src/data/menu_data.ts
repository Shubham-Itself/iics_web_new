

export interface DataType {
  id: number;
  title?: string;
  link: string;
  icon: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  has_dropdown_inner?: boolean;
  sub_menus?: {
    link?: string;
    title?: string;
    title2?: string | any;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: string | any;
    inner_menu?: boolean;
	mentorName?:string;
	mentorIcon?:string;
	mentorInfo?:string
	duration?:string;
	courseType?:string;
	fees?:string;
	courseInfo?:string;
	studentsSeat?:string;
	enrollmentDeadLine?:string
	courseStartDate?:string
	industryMentors?:string[]
	eligibilityCriteria?:string
	courseImg?:string
	courseVideo?:string
	courseCurricullam?:{

	}
	careerJob?:string
	careerEntrepreneurship?:string
    inner_menus?: {
      link?: string;
      title?: string;
	  mentorName?:string;
	  mentorIcon?:string;
	  mentorInfo?:string
	  duration?:string;
	  courseType?:string;
	  fees?:string;
	  courseVideo?:string
	  courseInfo?:string;
	  studentsSeat?:string;
	  enrollmentDeadLine?:string
	  courseStartDate?:string
	  industryMentors?:string[]
	  eligibilityCriteria?:string
	   courseImg?:string
	   mentorMessage?:string
	  courseCurricullam?:{

	  }
	  careerJob?:string
	  careerEntrepreneurship?:string
    }[];
  }[];
}

// menu data
const menu_data: DataType[] = [
  {
    id: 1,
    title: "IICS",
    link: "#",
    icon: "fas fa-home-lg",
    img_dropdown: true,
    has_dropdown_inner: true,
    sub_menus: [
      { link: "#", title: "About",
		inner_menu:true,
		inner_menus:[
			{link:'/about' , title:'About IICS'},
			{ link: "/leaders", title: "Our Guiding Force" },
			{ link: "/management", title: "Management" },
			{ link: "/stakeHolders", title: "Stake Holders" },
		]
	   },

     
      {
        inner_menu: true,
        title: "Mentors",
        inner_menus: [
          {
			  link: "/chiefMentors", title: "Chief Mentors",
			  studentsSeat: ""
		  },
          {
			  link: "/mentors", title: "Mentors",
			  studentsSeat: ""
		  },
        //   {
		// 	  link: "/internationalMentors", title: "International Mentors",
		// 	  studentsSeat: ""
		//   },
        ],
      },
	  
	 
	  
      { link: "/partners", title: "Partners" },
	  { link: "/hiring", title: "Hiring" },
      { link: "/campus", title: "Campus" },
      
	  {
        inner_menu: true,
        title: "Mentor Voice",

		inner_menus:[
			{ link: "/how-to-apply", 
			title: "Shri Jayant Chaudhary" ,
			mentorMessage:'The Media & Entertainment sector is a cornerstone of India’s global influence, and its future depends on skilled professionals who can push creative and technological boundaries. IICS plays a vital role in equipping young talent with cutting-edge expertise, ensuring they are ready to lead the industry. The Ministry of Skills Development & Entrepreneurship remains committed to strengthening skill- based education, industry collaborations, and infrastructure to make India the world’s creative powerhouse.'

			},
			{ link: "/eligibilityCriteria",
			 title: "Shri Atul Kumar Tiwari" ,
mentorMessage:'India’s Media & Entertainmentsector is poised for exponential growth, with the AVGC (Animation, Visual Effects, Gaming, and Comics) industry alone projected to exceed $25 billion by 2030. With a young, digitally native workforce, India has the potential to become a global hub for creative services. The Indian Institute of Creative Skills (IICS) is a pivotal initiative that aligns with our vision of transforming raw talent into future-ready professionals through industry-integrated training. By bridging the skill gap and fostering innovation, we are not only unlocking new job opportunities but also reinforcing India’s position as a leader in the global creative economy.'
			},
			{ link: "/fees&studentSupport", title: "Shri Ved Mani Tiwari",
				mentorMessage:'Skilling is the cornerstone of societal progress, and fostering world-class institutes is essential to equip individuals with the capabilities needed to thrive in a dynamic Global economy. The Indian Institute of Creative Skills (IICS) is a visionary initiative that places creativity at the heart of skill development, nurturing talent that not only meets professional standards but also pioneers new possibilities. At IICS, the focus is on empowering individuals to become creative entrepreneurs, shaping Industries and driving innovation rather than merely joining the workforce. NSDC is proud to champion this initiative, providing unwavering support to build a world of boundless opportunities and a thriving creative ecosystem.'
			 },
			// { link: "/samplePaper", title: "Sample Papers" },
		]
      },

     

      // { link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
      // { link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
      // { link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
    ],
  },
  {
    id: 2,
    title: "ADMISSION",
    link: "#",
    icon: "fas fa-book",
    has_dropdown: true,
    has_dropdown_inner: true,
    sub_menus: [
     
      { link: "/entranceProcess", title: "Entrance Process", 
		inner_menu:true,
		inner_menus:[
			{ link: "/how-to-apply", title: "How To Apply" },
			{ link: "/eligibilityCriteria", title: "Eligibility Criteria" },
			{ link: "/fees&studentSupport", title: "Fees & Support" },
			{ link: "/samplePaper", title: "Sample Papers" },
		]
	  },
      { link: "/publicNotes", title: "Public Notice " },
      
      
     
      { link: "/prospectus", title: "Prospectus" },

      { link: "/faq", title: "FAQs" },
    ],
  },
  {
    id: 3,
    title: "SCHOOL",
    link: "#",
    icon: "fas fa-gift",
    has_dropdown: true,
    sub_menus: [
      {
        inner_menu: true,
        title: "Performing Arts And Media Management",
        inner_menus: [
          {
			  link: "/courses-details",
			  title: "Performing Arts and Media Management",
			  mentorName: 'Dr. (Hon) Amit Behl',
			  mentorIcon:'/assets/iics_image/leaders/amit_behl.webp',
			  courseImg:'/assets/iics_course_image/performing-arts-media-management.webp',
		
			  mentorInfo:'Award-Winning Film, Television, Theatre Actor, Professor of Media & Entertainment, Creative Producer & Senior Consultant',
			  duration: '2 Years (12+6+6 Months)',
			  courseType: 'Certificate',
			  fees: '6 Lakhs Per Annum',
			  courseInfo: 'Acting, production, and media strategy in one integrated course.',
			  studentsSeat:'20',
			  enrollmentDeadLine:'15.04.2025',
			  courseStartDate:'15.05.2025',
			  industryMentors:['Mr. Dimpy Mishra' , 'Mr. Ashish Tatla'],
			  careerJob:'Actor, Theatre Artist, Media Manager, Casting Associate, Assistant Director, Talent Manager',
			  careerEntrepreneurship:'Founder of Theatre Group, Independent Creative Producer, Talent Management Agency Owner',
			  eligibilityCriteria:'Open to all, aspiring actors, theatre enthusiasts, media professionals, and graduates from related fields',
			  courseCurricullam : [
				{
				  title: "Semester 1",
				  content:  [
					"Acting Fundamentals",
					"Introduction to Media and Communication",
					"Acting for Camera and Stage",
					"Workshop: Anchoring and Presentation Skills"
				  ],
				},
				{
				  title: "Semester 2",
				  content: [
				   
					"Advanced Acting Techniques",
					"Theatre Arts",
					"Acting for Television and Film",
					"Content Creation Basics",
					"Workshop: Public Speaking and Media Relations"
				  ],
				},
				{
				  title: "Semester 3",
				  content:  [
				
					"Acting for Diverse Genres",
					"Content and Media Management",
					"Media Production Techniques",
					"Theatre Production and Direction",
					"Workshop: Improvisation and live Performances"
				  ],
				},
				{
					title: "Semester 4",
					content: [           
						"Media Entrepreneurship",
						"Industry Networking and Career Preparation",
						"Capstone Project",
						"Internship and Industry Exposure"
					  ]
				  },
			  ]

			 
		  },
          {
			  link: "/courses-details",
			  title: "Hair, Makeup & Prosthetics",
			  mentorName: 'Ms. Yasmin Rodgers',
			  duration: '1 Year (6+3+3 Months)',
			  courseType: 'Certificate',
			  fees: '6 Lakhs Per Annum',
			   courseImg:'/assets/iics_course_image/hair-makeup-prosthetics.webp',
			  courseInfo: 'Makeup Artistry, Special Effects, Prosthetic design all integrated over a one-year program.',
			  studentsSeat:'15',
			  enrollmentDeadLine:'15.04.2025',
			  courseStartDate:'19.05.2025',
			  industryMentors:['Mr. Harry'],
			  mentorIcon:'/assets/iics_image/leaders/yasmin_rodger.webp',
			  mentorInfo:'Celebrity Makeup & Prosthetics Artist',
			  careerJob:'Makeup Artist, Hair Stylist, Prosthetic Designer, Film/TV Stylist',
			  careerEntrepreneurship:'Freelance Makeup Studio, Beauty Brand Founder, Bridal & Film Makeup Studio',
			  eligibilityCriteria:'Open to makeup artists, hairstylists, fashion professionals, beauty influencers, and graduates from related disciplines. ',
			  courseCurricullam : [
				{
				  title: "Semester 1",
				  content:  [
					"Beauty & Bridal Makeup Fundamentals",
					
				  ],
				},
				
				
				
			  ]
			  
		  },
        ],
      },

      {
        inner_menu: true,
        title: "Sound And Music Production",
        inner_menus: [
          {
			  link: "/courses-details",
			  title: "Sound Recording and Sound Design",
			 
			  mentorName: 'Padma Shri Dr. Resul Pookutty',
			  duration: '2 Year (12+6+6 Months)',
			  courseType: 'Certificate',
			  fees: '6 Lakhs Per Annum',
			  courseInfo: 'Sound Recording and Sound Design',
			  studentsSeat:'20',
			  enrollmentDeadLine:'20.04.2025',
			  courseStartDate:'19.05.2025',
			  courseVideo:'/assets/iics_video/course_video/sound_school.mp4',
			   courseImg:'/assets/iics_course_image/sound-recording-sound-design.webp',
			  industryMentors:[],
			  mentorIcon:'/assets/iics_image/leaders/resul_pookutty.webp',
			  mentorInfo:'Academy Award Winner, Indian Sound Designer ',
			  careerJob:'Sound Designer, Sound Editor, Audio Engineer, Foley Artist, Mixing/Mastering Engineer',
			  careerEntrepreneurship:'Home Studio Business, Independent Sound Post-Production Services, Podcast & Music Production Studio Owner',
			  eligibilityCriteria:'Open to B.Tech, B.Sc. graduates in Sound Engineering or related disciplines, music producers, audio technicians, and professionals in the music and film industry.',
			  courseCurricullam : [
				{
				  title: "Semester 1: Introduction to Cinema and Filmmaking",
				  content:  [
					"Introduction to Cinema",
					'Introduction to Filmmaking',
					'Introduction to different departments of Cinema (Direction, Camera, Sound and Edit)'
					
				  ],
				},
				{
					title: "Semester 2: Sound Recording, Sound Designing and Sound Editing",
					content:  [
					  "Introduction to Sound Recording and Sound Designing",
					  'Sound Recording and Sound Editing',
					  'Project (Dialogue Film)'
					  
					],
				  },
				  {
					title: "Semester 3: Sound Mixing, Mastering and Playback Project",
					content:  [
					  "Sound Mixing",
					  'Mastering',
					  'Playback Project'
					  
					],
				  },
				  {
					title: "Semester 4:  Sound Design, Sound Production and Film Project",
					content:  [
					  "Sound Design (Aesthetics, Spirituality and Technology)",
					  'Different formats of Sound Production',
					  'Graduation Portfolio',
					  'Internship and Industry Exposure'
					  
					],
				  },
				
				
				
			  ]
			
		  },
        ],
      },

      {
        inner_menu: true,
        title: "Video Games And Digital Media",
        inner_menus: [
          {
			  link: "/courses-details",
			  title: "3D Game Art",
			  mentorName: 'Mr. Manvendra Shukul',
			  duration: '2 Year (12+6+6 Months)',
			  courseType: 'Certificate',
			  fees: '6 Lakhs Per Annum',
			  courseInfo: '3D Game Art',
			  studentsSeat:'25',
			  enrollmentDeadLine:'19.04.2025',
			  courseStartDate:'15.05.2025',
			       courseImg:'/assets/iics_course_image/3d-game-art.webp',
			  industryMentors:[],
			  mentorIcon:'/assets/iics_image/leaders/manvendra_shukul.webp',
			  mentorInfo:'CEO, Lakshya Digital',
			  careerJob:'3D Artist, Game Designer, Environment Artist, Character Modeler',
			  careerEntrepreneurship:'Indie Game Studio Founder, Freelance 3D Modeling Services, VR/AR Asset Design Services',
			  eligibilityCriteria:'Open to B.Sc., BFA, B.Tech graduates in Animation, Game Art, or related fields, digital artists, gaming professionals, and designers looking to enhance their 3D skills.',
			  courseCurricullam : [
				{
				  title: "Semester 1",
				  content:  [
					"Intro and Fundamentals",
					'Base of Art Skills',
					'Game Art Pipeline and Production'
					
				  ],
				},
				{
					title: "Semester 2",
					content:  [
					  "Transition to Intermediate Level",
					  'Interest Mapping and Teamwork',
					  
					  
					],
				  },
				  {
					title: "Semester 3",
					content:  [
					  "Specialization Focus",
					  'Portfolio Creation',
					 
					  
					],
				  },
				  {
					title: "Semester 4",
					content:  [
					  "Internship/Apprenticeship",
					  
					  
					],
				  },
				
				
				
			  ]
			
		  },
          {
			  link: "/courses-details",
			  title: "Advance Gaming and Extended Reality (XR) Innovations",
			  mentorName: 'Mr. Anand Jha',
			  duration: '2 Year (12+6+6 Months)',
			  courseType: 'Certificate',
			  fees: '6 Lakhs Per Annum',
			  courseInfo: 'Advance Gaming and Extended Reality (XR) Innovations',
			  studentsSeat:'25',
			  enrollmentDeadLine:'19.04.2025',
			  courseStartDate:'20.05.2025',
			   courseImg:'/assets/iics_course_image/advance-gaming-extended-reality-innovations.webp',
			  industryMentors:[],
			  mentorIcon:'/assets/iics_image/leaders/anand_jha.webp',
			  mentorInfo:'CEO, Nilee Games',
			  careerJob:'Game Developer, XR Developer, Simulation Designer, AR/VR Project Coordinator',
			  careerEntrepreneurship:'XR Startup Founder, Metaverse Design Studio, Training Simulation Company Owner',
			  eligibilityCriteria:'Open to B.Tech, B.Sc., BCA graduates in Game Development, XR, or related fields, AR/VR developers, designers, and gaming professionals.',
			  courseCurricullam : [
				{
				  title: "Semester 1: Game Development with Unity and Unreal Engine",
				  content:  [
					"Introduction to Game Design",
					'Introduction of AI in Game Development',
					'Unreal Engine and Unity3D Basics',
					'Level Design',
					'Scripting Fundamentals',
					'Game Art and Assets'
					
				  ],
				},
				{
					title: "Semester 2: Advanced Game Development and Extended Reality (XR)",
					content:  [
					  "Advanced Techniques",
					  'Advanced Programming',
					  'Character Design and Animation',

					  'Multiplayer Game Design',
					  'Game Testing and QA',
					  'Game Monetization and Launching Platforms',

					  
					  
					],
				  },
				  {
					title: "Semester 3",
					content:  [
					  "Projects",
					  'Specialization',
					 
					  
					],
				  },
				  {
					title: "Semester 4",
					content:  [
					  "Apprenticeship/Internship at Studio",
					  
					  
					],
				  },
				
				
				
			  ]
			
		  },
        ],
      },

      {
        inner_menu: true,
        title: "Creative Communication",
        inner_menus: [
          {
			  link: "/courses-details",
			  title: "Journalism, PR, Image Strategization & Brand Custodianship Program",
			  mentorName: 'Dr. (Hon) Anusha Srinivasan Iyer',
			  duration: '2 Year (12+6+6 Months)',
			  courseType: 'Certificate',
			  fees: '6 Lakhs Per Annum',
			  courseInfo: 'Journalism, PR, Image Strategization & Brand Custodianship all integrated over a one-year program.',
			  studentsSeat:'20',
			  enrollmentDeadLine:'19.04.2025',
			  courseStartDate:'20.05.2025',
			     courseImg:'/assets/iics_course_image/journalism-PR-Image-strategization-Brand-Custodianship.webp',
			  industryMentors:[],
			  mentorIcon:'/assets/iics_image/leaders/anusha_srinivasan_iyer.webp',
			  mentorInfo:'Brand Custodian, Image Strategist, International Award- Winning Writer- Director, Firebrand Journalist, Egalitarian Activist',
			  careerJob:'Journalist, PR Executive, Image Consultant, Brand Strategist, Content Editor',
			  careerEntrepreneurship:'Media Consulting Firm, PR Agency Founder, Branding & Digital Reputation Agency',
			  eligibilityCriteria:'Open to Mass Communication, BBA, and MBA graduates, PR professionals, journalists, media strategists, and corporate communication executives.',
			  courseCurricullam : [
				{
				  title: "Semester 1: Foundations of Media and Communication",
				  content:  [
					"Fundamentals of Communication",
					'Journalism Fundamentals',
					'Introduction to Public Relations',
					'Introduction to Social Media',
					
					
				  ],
				},
				{
					title: "Semester 2: Digital Media and Social Media Marketing",
					content:  [
					  "Digital Media Marketing",
					  'Social Media Strategy and Management',
					  'Digital Storytelling',

					  'Public Relations in the Digital Age',
					  'Introduction to Artificial Intelligence in Media',
					  'Social Media Analytics and Measurement',
					  'Social Media for Business',


					  
					  
					],
				  },
				  {
					title: "Semester 3: Specialization Track",
					content:  [
					  "Journalism and Media (Option 1)",
					  'Public Relations and Corporate Communication (Option 2)',
					  'Digital Marketing and Social Media (Option 3)',
					  'Internship (I)',
					  'Elective-Introduction to Film Studies (Performing Art Department)',

					 
					  
					],
				  },
				  {
					title: "Semester 4: Advanced Studies and Internship (II)",
					content:  [
					  "Advanced Topics in Specialization",
					  "AI in Media and Communication",
					  "Social Media Influencers",
					  "Internship (II)",

					  
					  
					],
				  },
				
				
				
			  ]
			
		  },
        ],
      },

      {  link: "/event-details", title: "Events And Experiential Media" ,  mentorName: 'Ms. Sushma Gaikwad',
		duration: '2 Year (12+6+6 Months)',
		courseType: 'Certificate',
		fees: '6 Lakhs Per Annum',
		courseInfo: 'Events and Experiential Management Program',
		studentsSeat:'20',
		enrollmentDeadLine:'20.04.2025',
		courseStartDate:'19.05.2025',
		courseVideo:'https://res.cloudinary.com/dwgwz52rq/video/upload/v1744687414/events_xbzrld.mp4',
		courseImg:'/assets/iics_course_image/event-experiential-management-program.webp',
		industryMentors:[],
		mentorIcon:'/assets/iics_image/leaders/sushma_gaikwad.webp',
		mentorInfo:'Academy Award Winner, Indian Sound Designer ',
		careerJob:'Sound Designer, Sound Editor, Audio Engineer, Foley Artist, Mixing/Mastering Engineer',
		careerEntrepreneurship:'Home Studio Business, Independent Sound Post-Production Services, Podcast & Music Production Studio Owner',
		eligibilityCriteria:'Open to B.Tech, B.Sc. graduates in Sound Engineering or related disciplines, music producers, audio technicians, and professionals in the music and film industry.',
		courseCurricullam : [
		  {
			title: "Semester 1: Fundamentals of Event Management",
			content:  [
			  "Overview of Experiential & Event Management",
			  'Understanding the Science Behind Experiential Management',
			  'Understanding the Functioning of Experiential Management',
			  'Types of Events',
			  'Event Planning'
			  
			],
		  },
		  {
			  title: "Semester 2: Sound Recording, Sound Designing and Sound Editing",
			  content:  [
				"Introduction to Sound Recording and Sound Designing",
				'Sound Recording and Sound Editing',
				'Project (Dialogue Film)'
				
			  ],
			},
			{
			  title: "Semester 3: Sound Mixing, Mastering and Playback Project",
			  content:  [
				"Sound Mixing",
				'Mastering',
				'Playback Project'
				
			  ],
			},
			{
			  title: "Semester 4:  Sound Design, Sound Production and Film Project",
			  content:  [
				"Sound Design (Aesthetics, Spirituality and Technology)",
				'Different formats of Sound Production',
				'Graduation Portfolio',
				'Internship and Industry Exposure'
				
			  ],
			},
		  
		  
		  
		] },

      {
     link: "/event-details",
        title: "Digital Content Creation",  mentorName: 'Ms. Ketki Pandit',
		duration: '2 Year (12+6+6 Months)',
		courseType: 'Certificate',
		fees: '6 Lakhs Per Annum',
		courseInfo: 'Events and Experiential Management Program',
		studentsSeat:'20',
		enrollmentDeadLine:'20.04.2025',
		courseStartDate:'19.05.2025',
		    courseImg:'/assets/iics_course_image/digital-management-content-creation.webp',
		industryMentors:[],
		mentorIcon:'/assets/iics_image/leaders/ketki_pandit.webp',
		mentorInfo:'Academy Award Winner, Indian Sound Designer ',
		careerJob:'Sound Designer, Sound Editor, Audio Engineer, Foley Artist, Mixing/Mastering Engineer',
		careerEntrepreneurship:'Home Studio Business, Independent Sound Post-Production Services, Podcast & Music Production Studio Owner',
		eligibilityCriteria:'Open to B.Tech, B.Sc. graduates in Sound Engineering or related disciplines, music producers, audio technicians, and professionals in the music and film industry.',
		courseCurricullam : [
		  {
			title: "Semester 1: Digital Content Mastery: Building the Foundation",
			content:  [
			  "Foundations of Content Creation",
			  'Communication & Design',
			  'Visual Content Creation',
			  'Customer Journey & Engagement',
			  'Digital Analytics & Measurement',
			  'Social Media Marketing (A)'
			  
			],
		  },
		  {
			  title: "Semester 2: Advanced Media Strategies & AI Integration",
			  content:  [
				"Audio Influence & Podcast Mastery",
				'Video Creation & AI Integration',
				'AR/VR, Blogging & Web Optimization',
				'Measuring Content Performance',
				'Creative Studio with AI Integration',
				'Specialization & Major Project',

				
			  ],
			},
			{
			  title: "Semester 3: 6 Months Internship",
			  content:  [
				"Potential Internship Opportunities",
				'Media Houses',
				'Film Studios',
				'Digital Platforms',
				'Advertising Agencies'
				
			  ],
			},
			{
			  title: "Semester 4: 6 Months Apprenticeship",
			  content:  [
				"Execute a full-scale content project under expert mentorship",
				'Develop high-level content strategy & leadership skills',
				'Build an industry-ready portfolio',
				// 'Internship and Industry Exposure'
				
			  ],
			},
		  
		  
		  
		]
	
      
      },
    ],
  },
  {
    id: 4,
    title: "LIFE @ IICS",
    link: "#",
    icon: "fas fa-shopping-bag",
    has_dropdown: true,
    sub_menus: [
      { link: "/gallery", title: "Gallery" },
      {
        inner_menu: false,
        title: "Events",
		link: "/event",
        inner_menus: [
          {
			  link: "/delhi-creators-summit", title: "Delhi Creator’s Summit",
		
		  },
          {
			  link: "/delhi-creative-artists-summit",
			  title: "Delhi Creative Artists Summit",
			 
		  },

          {
			  link: "/gujarat-creative-artists-summit",
			  title: "Gujarat Creative Artists Summit",
			
		  },
        ],
      },
      { link: "/press-media", title: "Press Media" },
      { link: "/workshop", title: "Workshops" },
      { link: "/infrastructure", title: "Infrastructure" },
      { link: "/careers", title: "Careers" },
      { link: "/accommodation", title: "Accommodation" },
    ],
  },
  {
    id: 5,
    title: "CREATIVE INCUBATOR",
    link: "#",
    icon: "fas fa-file-alt",
    has_dropdown: true,
    has_dropdown_inner: true,
    sub_menus: [
      { link: "/live-projects", title: "Live Projects" },
      { link: "/apprenticeship", title: "Apprenticeship" },
      { link: "/startup-support", title: "Startup Support" },
      { link: "/portfolio-development", title: "Portfolio Development" },
      { link: "/industry-association", title: "Industry Association" },
      { link: "/source-funding-ip-creation", title: "Source Funding & IP Creation" },
      { link: "/podcast", title: "Podcast" },


	  
    ],
  },
  {
    id: 6,
    title: "CONTACT US",
    link: "/contact",
    icon: "fas fa-phone-rotary",
    has_dropdown: false,
  },
 
];
export default menu_data;
