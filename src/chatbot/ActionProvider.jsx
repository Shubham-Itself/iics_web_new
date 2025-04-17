// chatbot/ActionProvider.js
import ListingElement from "./widget/ListingElement";
import { matchSorter } from "match-sorter";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleMessage = (message) => {
    const lowerMessage = message.toLowerCase().trim();
    const subjects = this.getSubjects();

    // Find best matching subject using keywords
    const keywordMap = subjects.flatMap((subject) =>
      subject.keywords.map((kw) => ({
        keyword: kw.toLowerCase(),
        subjectKey: subject.key,
      }))
    );

     // Try to find a match
     const matched = keywordMap.find(({ keyword }) =>
      lowerMessage.includes(keyword)
    );

    if (matched) {
      this.handleSubject(matched.subjectKey);
     // show full listing for that subject
    } else {
      const fallback = this.createChatBotMessage(
        `Sorry, I couldn't find anything related to that. Try asking about admission, mentors, careers, etc.`
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, fallback],
      }));
    }
  };

  getSubjects = () => [
    {
      key: "Admission Process",
      keywords: ["admission", "apply", "entrance", "fees", "support", "process"],
    },
    {
      key: "Courses",
      keywords: ["course", "program", "degree", "study", "field"],
    },
    {
      key: "Mentors",
      keywords: ["mentor", "faculty", "teacher", "guide", "instructor"],
    },
    {
      key: "Careers",
      keywords: ["career", "job", "future", "employment", "outcome"],
    },
    {
      key: "Live Projects",
      keywords: ["project", "real world", "live", "practice"],
    },
    {
      key: "Industry Associations",
      keywords: ["industry", "partner", "association", "network"],
    },
    {
      key: "Apprenticeship",
      keywords: ["apprentice", "intern", "training", "hands-on"],
    },
  ];

  handleSubject = (subject) => {
    let response;

    switch (subject) {
      case "Admission Process":
        response = (
          <div>
            <p className="leading-[20px] mb-[10px]">
              In admission process, what do you want to know?
            </p>
            <ListingElement title="How To Apply" path="/how-to-apply" />
            <ListingElement title="Eligibility Criteria" path="/eligibilityCriteria" />
            <ListingElement title="Entrance Process" path="/entranceProcess" />
            <ListingElement title="Fees & Support" path="/fees&studentSupport" />
          </div>
        );
        break;

      case "Courses":
        response = (
          <div>
            <p className="leading-[20px] mb-[10px]">
              Here's a list of all courses at IICS:
            </p>
            {[
              "Performing Arts And Media Management",
              "Hair, Makeup & Prosthetics",
              "Sound Recording and Sound Design",
              "3D Game Art",
              "Advance Gaming and Extended Reality (XR) Innovations",
              "Journalism, PR, Image Strategization & Brand Custodianship Program",
              "Events And Experiential Media",
              "Digital Content Creation",
            ].map((title) => (
              <ListingElement
                key={title}
                title={title}
                path={`/courses-details/${encodeURIComponent(title)}`}
              />
            ))}
          </div>
        );
        break;

      case "Mentors":
        response = (
          <div>
            <p className="leading-[20px] mb-[10px]">
              Meet our experienced mentors who are here to guide you!
            </p>
            <p className="leading-[20px] mb-[10px]">Chief Mentors</p>
            {[
              "Padma Shri Dr. Resul Pookutty",
              "Mr. Manvendra Shukul",
              "Dr.(Hon) Anusha Srinivasan Iyer",
              "Ms. Ketki Pandit",
              "Dr. (Hon) Amit Behl",
              "Ms. Yasmin Rodgers",
              "Mr. Anand Jha",
              "Ms. Sushma Gaikwad",
              "Dr. (Hon) S Ramachandran",
            ].map((name) => (
              <ListingElement key={name} title={name} path={`/details/${encodeURIComponent(name)}`} />
            ))}
            <p className="leading-[20px] mb-[10px]">Mentors</p>
            {[
              "Prof. Dimpy Mishra",
              "Mr. Harry",
              "Mr. Ashish Kant Tatla",
              "Mr. Mark Theodossiou",
              "Mr. Gareth Benson",
            ].map((name) => (
              <ListingElement key={name} title={name} path={`/details/${encodeURIComponent(name)}`} />
            ))}
          </div>
        );
        break;

      case "Careers":
        response = (
          <div>
            <p className="leading-[20px] mb-[10px]">
              We offer <strong>8 unique career pathways</strong> designed to meet industry demands.
            </p>
            <p className="leading-[20px] mb-[10px]">
              Would you like to explore the <strong>career outcomes</strong> of these pathways?
            </p>
            <ListingElement title="Career Options" onClick={() => this.handleSubject("Courses")} />
            <ListingElement title="Explore Career Outcomes" path="/careers" />
          </div>
        );
        break;

      case "Live Projects":
        response = (
          <div>
            <p className="leading-[20px] mb-[10px]">
              At IICS, we believe in <strong>learning by doing</strong>. Our students work on real-world <strong>Live Projects</strong>.
            </p>
            <ListingElement title="Watch Live Projects" path="/live-projects" />
          </div>
        );
        break;

      case "Industry Associations":
        response = (
          <div>
            <p className="leading-[20px] mb-[10px]">
              We maintain strong ties with industry through <strong>strategic associations</strong>.
            </p>
            <ListingElement title="Explore Industry Associations" path="/industry-association" />
          </div>
        );
        break;

      case "Apprenticeship":
        response = (
          <div>
            <p className="leading-[20px] mb-[10px]">
              We offer structured <strong>Apprenticeship Programs</strong> to give hands-on industry exposure.
            </p>
            <ListingElement title="Discover Apprenticeship Opportunities" path="/apprenticeship" />
          </div>
        );
        break;

      default:
        response = this.createChatBotMessage("Subject not found.");
    }

    const message = this.createChatBotMessage(response);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;