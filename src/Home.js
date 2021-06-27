import React from "react";
import "./Home.css";
import Courses from "./Courses";
import Slider from "./Components/Navbar/Slider";

function Home() {
  return (
    <div className="">
      <img
        className="w-screen object-cover object-top h-96"
        src="https://image.freepik.com/free-photo/young-female-student-studying-library_58466-6472.jpg"
      ></img>
      {/* <Slider /> */}
      <div>
        <div className="text-3xl font-extrabold text-center mt-4 mx-6 p-2 bg-gray-300">
          BEST NDA AND SSB INTERVIEW COACHING IN MUMBAI, INDIA
        </div>
        <div className="p-11">
          XYZ Academy is the first name that pops up commonly whenever there is
          a mention of best Defence Coaching. Situated as offline coaching in 2
          premises of Mumbai, Alambagh and Indira Nagar and online in XYZ
          Academy Student App, XYZ Academy provides an all round guidance,
          training, residential + academic facilities for guaranteed success.
          XYZ Academy has seen an overwhelming growth chart since its inception.
          From coaching to a grand Academy, Centurion has come a long way. The
          reason is the devotion and hard work invested by the Centurion team as
          well as the student's input. Being a Defence academy and not just a
          coaching institute, XYZ provides training for NDA, CDS, AFCAT, SSB
          Interview, Air Force, MNS, CAPF, Army, Navy, Merchant Navy, INET,
          Sainik School and other Defence Entrance Exam. The Defence Coaching
          institute is all decked up with highly equipped infrastructure,
          air-conditioned classes, including audio-visual support, technically
          sounds studios for online classes, Separate Hostel for Boys / Girls,
          Online Lab, Library, Weekly Mock Test, Online Test, parade once a
          week, outdoor GTO tasks, DIPR inspector, personalized training
          including individual feedback by the completion of the task. The
          Coaching institute specializes in SSB coaching for interview
          examination. Our Team is Focused on Providing top NDA Coaching
          Classes, CDS Coaching Classes, Air Force Coaching Classes, AFCAT
          Coaching Classes that trains the cadets to be adept in basic
          soldiering skills. Centurion Defence Academy runs one of the best
          batches for Defence Written Exam and SSB Interview training. Not only
          regular but also crash course Centurion Defence Academy has provision
          for both kinds. The expert panel of Centurion Defence Academy makes
          sure to give a similar range of input in the crash course as that in
          regular.
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
