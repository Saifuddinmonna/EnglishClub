import React, { useEffect } from 'react';

// Component to represent the MsoNormal styling, adapted with Tailwind
// This is a helper to avoid repeating classes, but you can also apply them directly.
const MsoP = ({ children, className = "" }) => {
  // Base MsoNormal: mt-0 mr-0 ml-0 mb-8pt (mb-2.5 or mb-[10.66px]) leading-107 (leading-[1.07] or custom) font-size-11pt (text-[14.66px]) font-calibri
  // We'll mostly override these with more specific styles from the original HTML's inline styles.
  return (
    <p className={`font-calibri text-[14.66px] leading-[1.07] mb-[10.66px] ${className}`}>
      {children}
    </p>
  );
};


function CaseGrammarPage() {
  useEffect(() => {
    document.title = "Case (কারক) - Grammar";
  }, []);

  return (
    <div className="container mx-auto p-4 text-black"> {/* Default text color */}
      <p className="mb-0 leading-normal"> {/* margin-bottom:0in; line-height:normal; */}
        <strong className="font-lato text-[24px] text-black"> {/* font-family:'Lato',sans-serif; font-size:18.0pt; color:black; */}
          <a
            href="https://www.english-bangla.com/grammar/case"
            title="English grammar: Case (কারক)"
            className="text-[#106AAD] no-underline" // color:#106AAD; text-decoration:none;
          >
            <span className="">Case (</span>
            <span className="font-shonar-bangla">কারক)</span>
          </a>
        </strong>
      </p>

      <p className="font-lato text-[18px] text-black mt-0 mb-0 leading-normal"> </p> {/* MsoNormal with overrides, but content is just a space */}

      <p className="mb-0 leading-normal">
        <strong className="font-lato text-[17.33px] text-[#8E3C04]"> {/* font-family:'Lato',sans-serif; font-size:13.0pt; color:#8E3C04; */}
          Case (
        </strong>
        <strong className="font-shonar-bangla text-[17.33px] text-[#8E3C04]">
          কারক)
        </strong>
        <strong className="font-lato text-[17.33px] text-[#8E3C04]">
          {' '}
        </strong>
      </p>

      <p className="mb-0 leading-[28px]"> {/* MsoNormal base, but mb-0, leading-21pt */}
        <span className="font-lato text-base text-black">Sentence </span>
        <span className="font-shonar-bangla text-base text-black">এ কোন </span>
        <span className="font-lato text-base text-black">noun </span>
        <span className="font-shonar-bangla text-base text-black">বা </span>
        <span className="font-lato text-base text-black">pronoun </span>
        <span className="font-shonar-bangla text-base text-black">এর সাথে অন্যান্য </span>
        <span className="font-lato text-base text-black">word </span>
        <span className="font-shonar-bangla text-base text-black">বা শব্দের যে সম্পর্ক থাকে তাকে</span>
        <span className="font-lato text-base text-black"> <strong>Case</strong> </span>
        <span className="font-shonar-bangla text-base text-black">বলে</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>

      <p className="mb-0 leading-[28px]">
        <span className="font-shonar-bangla text-base text-black">ইংরেজিতে </span>
        <span className="font-lato text-base text-black">noun </span>
        <span className="font-shonar-bangla text-base text-black">বা </span>
        <span className="font-lato text-base text-black">pronoun </span>
        <span className="font-shonar-bangla text-base text-black">এর </span>
        <span className="font-lato text-base text-black">Case </span>
        <span className="font-shonar-bangla text-base text-black">সাধারনত পাঁচ রকমের হয়ে থাকে। এগুলো হল-</span>
        <span className="font-lato text-base text-black"> </span>
      </p>

      <ol className="list-decimal list-inside pl-5 space-y-1 my-4 font-lato text-[18px] text-black"> {/* Approximate MsoNormal list item styles */}
        <li><strong>Nominative case</strong> </li>
        <li><strong>Objective case</strong> </li>
        <li><strong>Possessive case</strong> </li>
        <li><strong>Vocative case</strong> </li>
        <li><strong>Dative case</strong> </li>
      </ol>

      <p className="font-lato text-[18px] text-black mb-0 leading-normal"> </p>

      <div className="border-l-[1.5pt] border-r-[1.5pt] border-[#0D699B] px-[8px]"> {/* border-left/right:solid #0D699B 1.5pt; padding:0in 6.0pt (8px) */}
        <p className="my-[2px] leading-[28px] p-0"> {/* margin-top/bottom:1.5pt; line-height:21.0pt; padding:0in; */}
          <span className="font-lato text-base text-black">Note: Dative case </span>
          <span className="font-shonar-bangla text-base text-black">কে সাধারনত স্বতন্ত্র কারক হিসেবে গণ্য করা হলেও আধুনিক </span>
          <span className="font-lato text-base text-black">English grammer </span>
          <span className="font-shonar-bangla text-base text-black">এটিকে </span>
          <span className="font-lato text-base text-black">object </span>
          <span className="font-shonar-bangla text-base text-black">তথা </span>
          <span className="font-lato text-base text-black">Objective case </span>
          <span className="font-shonar-bangla text-base text-black">রুপে গণ্য করে। তাই </span>
          <span className="font-lato text-base text-black">English grammar </span>
          <span className="font-shonar-bangla text-base text-black">এ মূলত চার প্রকার </span>
          <span className="font-lato text-base text-black">case </span>
          <span className="font-shonar-bangla text-base text-black">ই আলোচিত হয়</span>
          <span className="font-mangal text-base text-black">।</span>
          <span className="font-lato text-base text-black"> </span>
        </p>
      </div>

      <p className="font-lato text-[18px] text-black mb-0 leading-normal"><br /></p>

      <p className="mb-0 leading-[30px]"> {/* line-height:22.5pt */}
        <strong className="font-lato text-[17.33px] text-[#032D4C]">Nominative case:</strong>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-shonar-bangla text-base text-black">যখন কোন </span>
        <span className="font-lato text-base text-black">noun </span>
        <span className="font-shonar-bangla text-base text-black">বা </span>
        <span className="font-lato text-base text-black">pronoun </span>
        <span className="font-shonar-bangla text-base text-black">কর্তা রুপে ব্যবহৃত হয় তখন তাকে</span>
        <span className="font-lato text-base text-black"> <strong>Nominative case</strong> </span>
        <span className="font-shonar-bangla text-base text-black">বলে</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">Nominative </span>
        <span className="font-shonar-bangla text-base text-black">কে পেতে হলে</span>
        <span className="font-lato text-base text-black"> </span>
        <strong className="font-shonar-bangla text-base text-black">ক্রিয়াকে কে (</strong>
        <strong className="font-lato text-base text-black">who) </strong>
        <strong className="font-shonar-bangla text-base text-black"> অথবা কি (</strong>
        <strong className="font-lato text-base text-black">what)</strong>
        <span className="font-lato text-base text-black"> </span>
        <span className="font-shonar-bangla text-base text-black">দ্বারা প্রশ্ন করতে হবে</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">For example:</span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">- Orin goes to school. [</span>
        <span className="font-shonar-bangla text-base text-black">কে (</span>
        <span className="font-lato text-base text-black">who) </span>
        <span className="font-shonar-bangla text-base text-black">স্কুলে যায়</span>
        <span className="font-lato text-base text-black">?]</span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-shonar-bangla text-base text-black">এছাড়াও </span>
        <span className="font-lato text-base text-black">pronoun, adjective, infinitive, gerund, verbal noun, phrase, clause, etc. Nominative case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে ব্যবহৃত হয়</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">Nominative </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">noun - <strong>Orin</strong> goes to school.<br />
          Nominative </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">pronoun – <strong>He</strong> visited Khulna.<br />
          Nominative </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">adjective – <strong>The poor</strong> live in hand to mouth.<br />
          Nominative </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">infinitive – <strong>To err</strong> is human.<br />
          Nominative </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">gerund – <strong>Walking</strong> is a good exercise.<br />
          Nominative </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">verbal noun – <strong>The reading of newspaper</strong> is a good habit.<br />
          Nominative </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">phrase – <strong>A man of letters</strong> came here.<br />
          Nominative </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">clause – <strong>What he says</strong> is known to all.</span>
      </p>

      <p className="font-lato text-[18px] text-black mb-0 leading-normal"><br /></p>

      <p className="mb-0 leading-[30px]">
        <strong className="font-lato text-[17.33px] text-[#032D4C]">Objective case:</strong>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-shonar-bangla text-base text-black">যখন কোন </span>
        <span className="font-lato text-base text-black">noun </span>
        <span className="font-shonar-bangla text-base text-black">বা </span>
        <span className="font-lato text-base text-black">pronoun </span>
        <span className="font-shonar-bangla text-base text-black">কর্ম রুপে ব্যবহৃত হয় তখন তাকে </span>
        <span className="font-lato text-base text-black">Objective case </span>
        <span className="font-shonar-bangla text-base text-black">বলে</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">Objective </span>
        <span className="font-shonar-bangla text-base text-black">কে পেতে হলে ক্রিয়াকে কাকে (</span>
        <span className="font-lato text-base text-black">whom) </span>
        <span className="font-shonar-bangla text-base text-black"> অথবা কী (</span>
        <span className="font-lato text-base text-black">what) </span>
        <span className="font-shonar-bangla text-base text-black"> দ্বারা প্রশ্ন করতে হবে</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">- Rahim reads a book. (rahim </span>
        <span className="font-shonar-bangla text-base text-black">কী পড়ছে</span>
        <span className="font-lato text-base text-black">? - book)<br />
          - The horse kicked the boy. (</span>
        <span className="font-shonar-bangla text-base text-black">কাকে </span>
        <span className="font-lato text-base text-black">kick </span>
        <span className="font-shonar-bangla text-base text-black">করেছে</span>
        <span className="font-lato text-base text-black">? – the boy)</span>
      </p>

      <p className="mb-0 leading-[30px]">
        <strong className="font-lato text-[17.33px] text-[#032D4C]">Objective case </strong>
        <strong className="font-shonar-bangla text-[17.33px] text-[#032D4C]">দুই প্রকার:</strong>
        <strong className="font-lato text-[17.33px] text-[#032D4C]"> </strong>
      </p>
      <p className="mb-0 leading-[28px]">
        <strong className="font-lato text-base text-black">Accusative case</strong>
        <span className="font-lato text-base text-black">- </span>
        <span className="font-shonar-bangla text-base text-black">কোন </span>
        <span className="font-lato text-base text-black">sentence </span>
        <span className="font-shonar-bangla text-base text-black">এ যদি বস্তুবাচক </span>
        <span className="font-lato text-base text-black">noun – verb </span>
        <span className="font-shonar-bangla text-base text-black">এর </span>
        <span className="font-lato text-base text-black">object </span>
        <span className="font-shonar-bangla text-base text-black">রূপে বসে</span>
        <span className="font-lato text-base text-black">, </span>
        <span className="font-shonar-bangla text-base text-black">তবে তাকে </span>
        <span className="font-lato text-base text-black">Accusative case </span>
        <span className="font-shonar-bangla text-base text-black">বলে।</span>
        <span className="font-lato text-base text-black"><br />
          - He bought a car. (car </span>
        <span className="font-shonar-bangla text-base text-black">বস্তুবাচক </span>
        <span className="font-lato text-base text-black">noun)</span>
      </p>
      <p className="mb-0 leading-[28px]">
        <strong className="font-lato text-base text-black">Dative case </strong>
        <span className="font-lato text-base text-black">– </span>
        <span className="font-shonar-bangla text-base text-black">কোন </span>
        <span className="font-lato text-base text-black">sentence </span>
        <span className="font-shonar-bangla text-base text-black">এ যদি ব্যেক্তিবাচক </span>
        <span className="font-lato text-base text-black">noun – verb </span>
        <span className="font-shonar-bangla text-base text-black">এর </span>
        <span className="font-lato text-base text-black">object </span>
        <span className="font-shonar-bangla text-base text-black">রূপে বসে</span>
        <span className="font-lato text-base text-black">, </span>
        <span className="font-shonar-bangla text-base text-black">তবে তাকে </span>
        <span className="font-lato text-base text-black">Dative case </span>
        <span className="font-shonar-bangla text-base text-black">বলে।</span>
        <span className="font-lato text-base text-black"><br />
          - I like the man. (The man </span>
        <span className="font-shonar-bangla text-base text-black">ব্যেক্তিবাচক </span>
        <span className="font-lato text-base text-black">noun)</span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-shonar-bangla text-base text-black">এছাড়াও </span>
        <span className="font-lato text-base text-black">noun, pronoun, adjective, infinitive, gerund, verbal noun, phrase, clause, etc. Objective case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে ব্যবহৃত হয়</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">Objective case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">noun – He reads the <strong>Quran</strong>.<br />
          Objective case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">pronoun – We called <strong>him</strong>.<br />
          Objective case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">adjective – He helps <strong>the poor</strong>.<br />
          Objective case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">infinitive – I want to <strong>sleep</strong>.<br />
          Objective case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">verbal noun – I <strong>like the playing of cricket</strong>.<br />
          Objective case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">phrase – I met <strong>a man of parts</strong>.<br />
          Objective case </span>
        <span className="font-shonar-bangla text-base text-black">রূপে </span>
        <span className="font-lato text-base text-black">clause – I know <strong>how he did it</strong>.</span>
      </p>

      <p className="font-lato text-[18px] text-black mb-0 leading-normal"><br /></p>

      <p className="mb-0 leading-[30px]">
        <strong className="font-lato text-[17.33px] text-[#032D4C]">Possessive case:</strong>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-shonar-bangla text-base text-black">অধিকার সম্বন্ধ বা কর্তৃত্ব সম্বন্ধ বোঝায়। এটি “কার” এই প্রশ্নের উত্তর দেয়</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">- This is Ram’s book. (</span>
        <span className="font-shonar-bangla text-base text-black">কার বই- </span>
        <span className="font-lato text-base text-black">Ram </span>
        <span className="font-shonar-bangla text-base text-black">এর)</span>
        <span className="font-lato text-base text-black"><br />
          - These are Shakespeare’s plays.(</span>
        <span className="font-shonar-bangla text-base text-black">কার নাটক - </span>
        <span className="font-lato text-base text-black">Shakespeare </span>
        <span className="font-shonar-bangla text-base text-black">এর)</span>
        <span className="font-lato text-base text-black"> </span>
      </p>

      <p className="mb-0 leading-[30px]">
        <strong className="font-lato text-[17.33px] text-[#032D4C]">Formation of Possessive case:</strong>
      </p>
      <div className="space-y-2 mb-0 leading-[28px] font-lato text-base text-black"> {/* Common styling for these points */}
        <p>
          <strong>1.</strong> 
          <span className="font-shonar-bangla">শেষে ‘</span>
          <span className="font-lato">s’ </span>
          <span className="font-shonar-bangla">বিহীন </span>
          <span className="font-lato">singular noun </span>
          <span className="font-shonar-bangla">এর সাধারণত </span>
          <span className="font-lato">Apostrophe </span>
          <span className="font-shonar-bangla">ও </span>
          <span className="font-lato">S (’s) </span>
          <span className="font-shonar-bangla">যোগ করে </span>
          <span className="font-lato">Possessive </span>
          <span className="font-shonar-bangla">করা হয়। এটা জীবিত </span>
          <span className="font-lato">noun </span>
          <span className="font-shonar-bangla">এর ক্ষেত্রে হয়। যেমন- </span>
          <span className="font-lato">Shawkot’s book, kamal’s pen, mother’s glass, baby’s toy.</span>
        </p>
        <p>
          <strong>2.</strong> 
          <span className="font-shonar-bangla">শেষে ‘</span>
          <span className="font-lato">s’ </span>
          <span className="font-shonar-bangla">যুক্ত </span>
          <span className="font-lato">singular noun </span>
          <span className="font-shonar-bangla">এর শেষে শুধু </span>
          <span className="font-lato">Apostrophe </span>
          <span className="font-shonar-bangla">যোগ করে </span>
          <span className="font-lato">Possessive </span>
          <span className="font-shonar-bangla">করা হয়। যেখানে স-ধ্বনি একাধিক থাকে। যেমন- </span>
          <span className="font-lato">jesus’ speech, brutass’ car, keates’ poem.</span>
        </p>
        <p>
          <strong>3.</strong> 
          <span className="font-shonar-bangla">শেষে ‘</span>
          <span className="font-lato">s’ </span>
          <span className="font-shonar-bangla">বিহীন </span>
          <span className="font-lato">plural noun </span>
          <span className="font-shonar-bangla">এর সাধারণত </span>
          <span className="font-lato">Apostrophe </span>
          <span className="font-shonar-bangla">ও </span>
          <span className="font-lato">S (’s) </span>
          <span className="font-shonar-bangla">যোগ করে </span>
          <span className="font-lato">Possessive </span>
          <span className="font-shonar-bangla">করা হয়। যেমন- </span>
          <span className="font-lato">women’s co-operative, children’s park, men’s dress, people’s republic.</span>
        </p>
        <p>
          <strong>4.</strong> 
          <span className="font-shonar-bangla">শেষে ‘</span>
          <span className="font-lato">s’ </span>
          <span className="font-shonar-bangla">যুক্ত </span>
          <span className="font-lato">plural noun </span>
          <span className="font-shonar-bangla">এর শেষে শুধু </span>
          <span className="font-lato">Apostrophe </span>
          <span className="font-shonar-bangla">যোগ করে </span>
          <span className="font-lato">Possessive </span>
          <span className="font-shonar-bangla">করা হয়। যেমন- </span>
          <span className="font-lato">boys’ school, girls’ school, sailors’ cap, brothers’ garden.</span>
        </p>
        <p>
          <strong>5.</strong> 
          <span className="font-lato">Compound noun </span>
          <span className="font-shonar-bangla">এর শেষে </span>
          <span className="font-lato">Apostrophe </span>
          <span className="font-shonar-bangla">ও </span>
          <span className="font-lato">S (’s) </span>
          <span className="font-shonar-bangla">যোগ করে </span>
          <span className="font-lato">Possessive </span>
          <span className="font-shonar-bangla">করা হয়। যেমন- </span>
          <span className="font-lato">brother-in-law’s home, Inspector-general’s office.</span>
        </p>
        <p>
          <strong>6.</strong> 
          <span className="font-lato">And </span>
          <span className="font-shonar-bangla">দ্বারা যুক্ত একাধিক </span>
          <span className="font-lato">noun </span>
          <span className="font-shonar-bangla">যৌথ অধিকার প্রকাশ করলে শেষের </span>
          <span className="font-lato">noun </span>
          <span className="font-shonar-bangla">টির সাথে (’</span>
          <span className="font-lato">s) </span>
          <span className="font-shonar-bangla">যোগ করতে হয়। যেমন- </span>
          <span className="font-lato">Rahim and Karim’s flat. Sami and Rahi’s mother.</span>
        </p>
        <p>
          <strong>7.</strong> 
          <span className="font-shonar-bangla">সাধারণত ব্যক্তির ক্ষেত্রে (’</span>
          <span className="font-lato">s) </span>
          <span className="font-shonar-bangla">বসিয়ে বা তার পূর্বে </span>
          <span className="font-lato">of </span>
          <span className="font-shonar-bangla">বসিয়ে </span>
          <span className="font-lato">Possessive </span>
          <span className="font-shonar-bangla">করা হয়। যেমন- </span>
          <span className="font-lato">Rahim’s hen or The hen of Rahim. Rabbi’s goat or the goat of rabbi.</span>
        </p>
        <p>
          <strong>8.</strong> 
          <span className="font-shonar-bangla">অচেতন পদার্থের ক্ষেত্রে (’</span>
          <span className="font-lato">s) </span>
          <span className="font-shonar-bangla">না বসিয়ে </span>
          <span className="font-lato">of </span>
          <span className="font-shonar-bangla">বসিয়ে </span>
          <span className="font-lato">Possessive </span>
          <span className="font-shonar-bangla">করতে হয়। যেমন-</span><br />
          <strong>Incorrect</strong> – The Chair’s legs are broken.<br />
          <strong>Correct</strong> – The legs of chair are broken.
        </p>
        <p>
          <strong>9.</strong> 
          <span className="font-shonar-bangla">সময়</span>
          <span className="font-lato">, </span>
          <span className="font-shonar-bangla">দুরুত্ব ও ওজন প্রকাশক </span>
          <span className="font-lato">noun </span>
          <span className="font-shonar-bangla">এর সাথে (</span>
          <span className="font-lato">s’) </span>
          <span className="font-shonar-bangla">যোগ করে </span>
          <span className="font-lato">Possessive </span>
          <span className="font-shonar-bangla">করতে হয়। যেমন – </span>
          <span className="font-lato">Three days’ leave, A yard’s length, A ton’s weight.</span>
        </p>
      </div>

      <p className="font-lato text-[18px] text-black mb-0 leading-normal"><br /></p>

      <p className="mb-0 leading-[30px]">
        <strong className="font-lato text-[17.33px] text-[#032D4C]">Vocative case:</strong>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-lato text-base text-black">Go there, Rahim. May I come in sir.</span>
      </p>
      <p className="mb-0 leading-[28px]">
        <span className="font-shonar-bangla text-base text-black">উপরের </span>
        <span className="font-lato text-base text-black">sentence </span>
        <span className="font-shonar-bangla text-base text-black">দুটিতে </span>
        <span className="font-lato text-base text-black">Rahim and sir </span>
        <span className="font-shonar-bangla text-base text-black">দুটি </span>
        <span className="font-lato text-base text-black">noun </span>
        <span className="font-shonar-bangla text-base text-black">এ সম্বোধন করে কিছু বলা আছে। এখানে </span>
        <span className="font-lato text-base text-black">noun </span>
        <span className="font-shonar-bangla text-base text-black">দুটির সাথে স্ব স্ব বাক্য দুটির অপর অংশ দুটির সাথে যে সম্পর্ক তাই </span>
        <span className="font-lato text-base text-black">Vocative case</span>
        <span className="font-mangal text-base text-black">। </span>
        <span className="font-shonar-bangla text-base text-black">এক কথায় বাক্যে </span>
        <span className="font-lato text-base text-black">noun </span>
        <span className="font-shonar-bangla text-base text-black">এর মাধ্যমে কাউকে কে সম্বোধন করে কিছু বলা হলে তার </span>
        <span className="font-lato text-base text-black">Vocative case </span>
        <span className="font-shonar-bangla text-base text-black">হয়। একে </span>
        <span className="font-lato text-base text-black">nominative address </span>
        <span className="font-shonar-bangla text-base text-black">বা </span>
        <span className="font-lato text-base text-black">case of address </span>
        <span className="font-shonar-bangla text-base text-black">ও বলা হয়</span>
        <span className="font-mangal text-base text-black">।</span>
        <span className="font-lato text-base text-black"> </span>
      </p>
      <p className="mb-0 leading-[28px]">
        <strong className="font-shonar-bangla text-base text-black">যেমন –</strong>
        <span className="font-lato text-base text-black"> Brother, could I take your pen?<br />
          Good bye, mother.<br />
          Come here.<br />
          Go there.</span>
      </p>

      <p className="font-lato text-[18px] text-black mb-0 leading-normal"> </p>
      <p className=""> </p> {/* Default MsoNormal if helper used, or specify classes */}

    </div>
  );
}

export default CaseGrammarPage;