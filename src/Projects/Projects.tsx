import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { SiAngular, SiNodedotjs, SiMongodb, SiReact } from "react-icons/si";


import JobFinderLogo from "../assets/JobfinderLogoNew.png";
import WebsiteLogo from "../assets/ak_logo2.png";

function Projects() {
  return (
    <div className="projectsSection">
      <div className="projectCard">
        {/* --- Title + Subtitle --- */}
        <div className="projectTitleGroup">
          <img
            className="projectLogo fillLogo"
            src={JobFinderLogo}
            alt="JobFinder Logo"
          />
          <h2 className="mainTitle">JobFinder</h2>
          <h3 className="subTitle">אתר חיפוש עבודה חכם</h3>
        </div>

        <p>
          אתר שבניתי כפרויקט גמר במכללה, שנועד לחבר בין מחפשי עבודה לבין
          מעסיקים. המערכת כוללת הרשמה, יצירת קורות חיים, פרסום משרות, ניהול
          הרשאות ותפקידים, וממשק ניהול ייעודי למעסיקים.
        </p>

        {/* --- Technologies Section --- */}
        <div className="techIcons">
          <div className="techItem">
            <SiAngular />
            <h4>Frontend</h4>
            <p>Angular (Version 15)</p>
          </div>
          <div className="techItem">
            <SiNodedotjs />
            <h4>Backend</h4>
            <p>Node.js with Express</p>
          </div>
          <div className="techItem">
            <SiMongodb />
            <h4>Database</h4>
            <p>MongoDB</p>
          </div>
          <div className="techItem">
            <FaGithub />
            <h4>Version Control</h4>
            <p>Git & GitHub</p>
          </div>
        </div>

        <ul className="featuresList">
          <li>הרשמה והתחברות מאובטחת</li>
          <li>יצירת קורות חיים וניהול פרופיל אישי</li>
          <li>הוספת משרות חדשות ועריכתן ע"י מעסיקים</li>
          <li>ממשק ניהול ייעודי למעסיקים</li>
          <li>חיפוש וסינון משרות לפי תחום או מיקום</li>
          <li>תאימות תצוגה גם למובייל</li>
        </ul>

        <h4>קישורים לפרויירט ב - GitHub</h4>

        <div className="links">
          <a
            href="https://github.com/AsiKrinitz/WorkFind"
            target="_blank"
            rel="noopener noreferrer"
            className="githubBtn"
          >
            <FaGithub /> Client
          </a>
          <a
            href="https://github.com/AsiKrinitz/WorkFindServer"
            target="_blank"
            rel="noopener noreferrer"
            className="githubBtn"
          >
            <FaGithub /> Server
          </a>
        </div>
      </div>

      {/* Responsive Video Container */}
      <div className="videoContainer">
        <iframe
          src="https://www.youtube.com/embed/eU64Wi9NWAw?si=vqGY071jIQ_CC1da"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p style={{ maxWidth: "800px", margin: "20px auto", padding: "0 20px" }}>
        שכחתי להגיד את זה בסירטון אז אני ארשום את זה פה... כל האתר או יותר נכון
        הגירסאות של האתר היו מנוהלות ב GitHub מהתחלה ועד הסוף.
      </p>

      <br></br>

      <div className="projectCard">
        {/* --- Title + Subtitle --- */}
        <div className="projectTitleGroup">
          <img
            className="projectLogo whiteBackground"
            src={WebsiteLogo}
            alt="Website Builder Logo"
          />
          <h2 className="mainTitle">Asi Website Builder</h2>
          <h3 className="subTitle">בניית אתרי תדמית בעיצוב אישי</h3>
        </div>

        <p>
          בניית אתרים מודרניים, רספונסיביים ומהירים המותאמים אישית לצרכי הלקוח. 
          דגש על חוויית משתמש מעולה, עיצוב נקי וביצועים גבוהים כדי להבטיח נוכחות דיגיטלית מרשימה.
          <br></br>
          האתרים נבנים בטכנולוגיות המתקדמות ביותר תוך הקפדה על הפרטים הקטנים ביותר.
        </p>

        {/* --- Technologies Section --- */}
        <div className="techIcons">
          <div className="techItem">
            <SiReact />
            <h4>Frontend</h4>
            <p>React (TypeScript + Vite)</p>
          </div>
          <div className="techItem">
            <FaGithub />
            <h4>Deployment</h4>
            <p>GitHub Pages / Custom Domain</p>
          </div>
        </div>

        <ul className="featuresList">
          <li>עיצוב רספונסיבי מלא לכל המכשירים</li>
          <li>רכישת דומיין והעלאת האתר לאוויר</li>
          <li>אופטימיזציה ל-SEO ומהירות טעינה</li>
          <li>ליווי אישי משלב האיפיון ועד שאתם מרוצים ואומרים לי חלאס האתר מושלם!</li>
        </ul>

        <h4>קישורים לפרוייקט</h4>

        <div className="links">
          <a
            href="https://github.com/AsiKrinitz/AsiKrinitz.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="githubBtn"
          >
            <FaGithub /> Repository
          </a>
          <a
            href="https://asikdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="githubBtn"
            style={{ backgroundColor: '#007bff' }}
          >
            Live Site
          </a>
        </div>
      </div>

      <br></br>








      <div className="projectCard">
        {/* --- Title + Subtitle --- */}
        <div className="projectTitleGroup">
          <h2 className="mainTitle"> אתר תדמית שלי (האתר הזה)</h2>
          <h3 className="subTitle">אתר תדמית אישי ונחמד</h3>
        </div>

        <p>
          אתר רספונסיבי שבניתי כדי להציג את עצמי, הפרויקטים שלי, מידע מקצועי
          וקורות חיים.
          <br></br>
          האתר נבנה ב-React, בעיקר כי רציתי ללמוד את הטכנולוגיה הזו, ואז חבר
          סיפר לי על האפשרות לעלות אתרים ל - GitHub pages מפה לשם חשבתי שזו
          תיהיה היזדמנות טובה לתפוס שתי ציפורים במכה אז.. מה אומרים יצא נחמד?
        </p>

        {/* --- Technologies Section --- */}
        <div className="techIcons">
          <div className="techItem">
            <SiReact />
            <h4>Frontend</h4>
            <p>React (TypeScript + Vite)</p>
          </div>
          <div className="techItem">
            <FaGithub />
            <h4>Version Control</h4>
            <p>Git & GitHub</p>
          </div>
        </div>

        <ul className="featuresList">
          <li>עמודי פרויקטים עם מידע מלא</li>
          <li>אפשרות לצפיה ולהורדה של קורות חיים</li>
          <li>עיצוב נקי ומותאם לכל מסך גם למובייל</li>
          <li>תמונות יפות שלי שכל פעם מתחלפות, שמתם לב לזה?</li>
        </ul>

        <h4>קישור לפרוייקט ב-GitHub</h4>

        <div className="links">
          <a
            href="https://github.com/AsiKrinitz/AsiWebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="githubBtn"
          >
            <FaGithub /> Repository
          </a>
        </div>
      </div>


    </div>
  );
}

export default Projects;
