import { useEffect } from "react";
import SectionWithHeading from "./SectionWithHeading";

let joinWordsWithHyphen = (string) => {
  return string.split(" ").join("-");
};

let sectionHeadings = [
  {
    heading: "Endotontics - Operative",
    number: "1",
  },
  {
    heading: "Prosthodontics",
    number: "2",
  },
  {
    heading: "Oral Medicine",
    number: "3",
  },
  {
    heading: "Pharmacology",
    number: "4",
  },
  {
    heading: "Oral Surgery + Radiology",
    number: "5",
  },
  {
    heading: "Pedodontics",
    number: "6",
  },
  {
    heading: "Periodontics",
    number: "7",
  },
  {
    heading: "Past Exams - Practice Part 1",
    number: "8",
  },
  {
    heading: "Past Exams - Practice Part 2",
    number: "9",
  },
  {
    heading: "Master Quiz + Revision",
    number: "10",
  },
];

const Step = ({ stepNumber, stepHeading, stepImgSrc, children }) => {
  return (
    <div
      id={joinWordsWithHyphen(stepHeading)}
      className="step bg-gray-900 flex gap-4 md:gap-8 flex-col sm:flex-row p-4 md:p-6"
    >
      <div className="w-32 h-32 object-contain overflow-hidden rounded">
        <img src={stepImgSrc} />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-400 text-sm uppercase tracking-wide">
          Step {stepNumber}
        </p>
        <p className="font-semibold text-lg md:text-xl text-white">
          {stepHeading}
        </p>
        <div className="mt-3 text-gray-300 text-sm md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

const SectionLink = ({ heading, number }) => {
  return (
    <div>
      <a
        className="p-2 rounded-md flex gap-4 -ml-8 text-gray-400 hover:bg-gray-700 hover:text-white transition"
        href={"#" + joinWordsWithHyphen(heading)}
      >
        <span className="block font-semibold">{number}</span>
        <span className="block ">{heading}</span>
      </a>
    </div>
  );
};

export default function ProvenPathwaySection() {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.id;
            let link = document.querySelector(`a[href="#${id}"]`);
            link.classList.add("text-indigo-50");
            link.classList.add("font-medium");
            link.classList.add("bg-indigo-900");
          } else {
            let id = entry.target.id;
            let link = document.querySelector(`a[href="#${id}"]`);
            link.classList.remove("text-indigo-50");
            link.classList.remove("font-medium");
            link.classList.remove("bg-indigo-900");
          }
        });
      },
      {
        rootMargin: "-8px 0px -98% 0px",
      }
    );
    let targets = document.querySelectorAll(".step");
    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);

  return (
    <div>
      <SectionWithHeading
        heading="Join the proven pathway"
        darkBackground="true"
      >
        <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
          We are redefining traditional approaches and offer aspiring dentists
          an unparalleled academic environment, and all the tools required to
          ensure their success.
          <br />
          <br />
        </p>
        <div className="mt-2">
          <img
            src="/career-pathway/career-pathway.webp"
            alt="Ace ADC Proven Pathway to Success"
          />
        </div>
        <div className="block md:grid md:grid-cols-8 gap-4 mt-12">
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-0 py-8 space-y-2">
              {sectionHeadings.map((section, index) => {
                return (
                  <SectionLink
                    key={section.number}
                    heading={section.heading}
                    number={section.number}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-span-5 rounded-xl overflow-hidden bg-gray-800 divide-y-2 divide-gray-700">
            <Step
              stepNumber="1"
              stepHeading="Endotontics - Operative"
              stepImgSrc="/order/endo.png"
            >
              <p>
                Endodontics focuses on the diagnosis, prevention, and treatment
                of dental pulp and the surrounding tissues. In this part of the
                curriculum for the ADC Writte Exam, students will delve into
                advanced techniques in root canal therapy, learn to diagnose and
                manage complex endodontic cases, and master the latest
                advancements in the field.
              </p>
            </Step>
            <Step
              stepNumber="2"
              stepHeading="Prosthodontics"
              stepImgSrc="/order/prostho.png"
            >
              <p>
                Prosthodontics is a specialized field of dentistry that focuses
                on the restoration and replacement of missing teeth and oral
                structures. In this course, students will explore advanced
                prosthetic techniques, including crown and bridge work,
                dentures, and dental implants, as well as gain expertise in
                treatment planning and managing complex prosthodontic cases.
              </p>
            </Step>
            <Step
              stepNumber="3"
              stepHeading="Oral Medicine"
              stepImgSrc="/order/oralmed.png"
            >
              <p>
                Oral Medicine is a crucial component of Australian dentistry,
                encompassing the diagnosis and management of oral diseases and
                conditions that affect the soft and hard tissues of the mouth.
                In preparation for the ADC Written Part 1 Exam, this specialized
                course provides students with comprehensive knowledge and
                practical skills in oral medicine, covering topics such as oral
                pathology, oral mucosal diseases, and oral manifestations of
                systemic diseases. Over the course of two months, students will
                learn to recognize and diagnose various oral conditions, develop
                treatment plans, and understand the interdisciplinary approach
                required for effective patient care in oral medicine practice.
              </p>
            </Step>
            <Step
              stepNumber="4"
              stepHeading="Pharmacology"
              stepImgSrc="/order/pharma.png"
            >
              <p>
                Pharmacology plays a vital role in Australian dentistry,
                focusing on the study of drugs and their effects on oral health
                and patient care. In preparation for the ADC Exam, this
                specialized course equips students with essential knowledge of
                pharmacological principles, drug interactions, and medication
                management in dental practice. Pharmacology has several overlaps
                with other specialisations, and through the curriculum students
                will gain a deep understanding of pharmacology as it pertains to
                dentistry, enabling them to make informed decisions in
                prescribing medications, managing pain and anxiety, and
                promoting optimal patient outcomes.
              </p>
            </Step>
            <Step
              stepNumber="5"
              stepHeading="Oral Surgery + Radiology"
              stepImgSrc="/order/surgery.png"
            >
              <p>
                Using material created out of policies from the Australian
                Dental Association and the Australian Dental Council (ADC), Ace
                ADC dental exam preparation courses offer an intensive four-week
                program in Oral Surgery and Radiology.
                <br />
                <br />
                Ace ADC's 4-week Oral Surgery and Radiology course provides
                dental professionals with comprehensive online training in
                surgical procedures and radiographic imaging essential for
                Australian dentistry. From foundational principles to advanced
                techniques, students gain proficiency in performing oral
                surgeries and interpreting radiographs accurately.
              </p>
            </Step>
            <Step
              stepNumber="6"
              stepHeading="Pedodontics"
              stepImgSrc="/order/pedo.png"
            >
              <p>
                The Pedodontics segment of Ace ADC's curriculum is designed to
                equip dental professionals with specialized knowledge in
                pediatric dentistry relevant to the Australian Dental Council
                (ADC) Part 1 Exam and dental practice in Australia. Over the
                course of several weeks, students will delve into topics such as
                child psychology, preventive dentistry, pediatric oral
                pathology, and behavior management techniques. By mastering
                these essential concepts and skills, students will be prepared
                to provide comprehensive dental care to pediatric patients and
                navigate the unique challenges of pediatric dentistry in the
                Australian context.
              </p>
            </Step>
            <Step
              stepNumber="7"
              stepHeading="Periodontics"
              stepImgSrc="/order/perio.png"
            >
              <p>
                In the Periodontics segment of Ace ADC's online curriculum,
                participants will undergo an in-depth exploration of periodontal
                anatomy, physiology, and pathology, focusing on gum disease
                management and treatment modalities. Through interactive
                modules, case studies, and virtual simulations, students will
                learn advanced periodontal assessment techniques, non-surgical
                and surgical periodontal therapy, and regenerative procedures.
                The course aims to equip dental professionals with the knowledge
                and skills required to effectively diagnose, treat, and manage
                periodontal diseases in accordance with Australian dental
                standards and ADC Part 1 Exam requirements.
              </p>
            </Step>
            <Step
              stepNumber="8"
              stepHeading="Past Exams - Practice Part 1"
              stepImgSrc="/order/radio.png"
            >
              <p>
                Exam Simulation Quizzes
                <br />
                <br />
                During the first week of Previous Exams preparation, students
                will engage in exam simulation quizzes designed to mimic the
                format and difficulty level of past ADC written part 1 exams.
                These quizzes will cover a range of topics, including oral
                surgery, pedodontics, periodontics, and radiology, allowing
                students to assess their knowledge and identify areas for
                further review. Through real-time feedback and detailed
                explanations of correct answers, students will gain invaluable
                insights into exam strategies and content mastery.
              </p>
            </Step>

            <Step
              stepNumber="9"
              stepHeading="Past Exams - Practice Part 2"
              stepImgSrc="/order/pieces.svg"
            >
              <p>
                Comprehensive Review and Analysis
                <br />
                <br />
                In the second week, students will delve deeper into exam
                preparation with a comprehensive review and analysis of their
                performance in the simulation quizzes. Through guided
                self-assessment activities and instructor-led discussions,
                students will identify strengths and weaknesses, refine their
                study strategies, and prioritize areas requiring additional
                focus. By leveraging insights gained from the previous week's
                quizzes, students will be better equipped to approach the ADC
                written part 1 exam with confidence and proficiency.
              </p>
            </Step>
            <Step
              stepNumber="10"
              stepHeading="Master Quiz + Revision"
              stepImgSrc="/order/step-2.svg"
            >
              <br />
              <p>
                In the crucial final two weeks leading up to the ADC exam,
                students will undertake intensive preparation through two
                comprehensive master quizzes designed to consolidate their
                learning and assess their readiness. These quizzes encompass a
                wide range of topics covered throughout the course, including
                oral surgery, pedodontics, periodontics, radiology, and more,
                providing students with a comprehensive review of key concepts
                and exam-relevant material. Additionally, students will receive
                dedicated support and guidance from instructors to facilitate
                targeted revision, address any remaining uncertainties, and
                fine-tune their exam strategies. This focused and tailored
                approach ensures that students enter the ADC exam with the
                confidence, competence, and readiness needed to excel and embark
                on successful careers in Australian dentistry.
              </p>
            </Step>
          </div>
        </div>
      </SectionWithHeading>
    </div>
  );
}
