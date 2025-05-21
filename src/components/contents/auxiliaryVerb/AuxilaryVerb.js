import React, { useEffect } from 'react';
import './AuxiliaryVerbPage.css'; // Import the CSS

// If you decide to import images (alternative to public folder)
// import logoImage from './path/to/your/public/images/logo.png';
// import clipImage1 from './path/to/your/public/EnglishClub/clip_image001_0004.png';
// import clipImage2 from './path/to/your/public/EnglishClub/clip_image002_0003.png';


function AuxiliaryVerbPage() {
  // useEffect can be used to set the document title if needed
  useEffect(() => {
    document.title = "Auxiliary Verb Document";
  }, []);

  // Note: For Bootstrap JS to work (modals, dropdowns), ensure
  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
  // is included in your public/index.html, typically before the closing </body> tag.
  // Also, ensure the Bootstrap CSS and Icons CSS are in public/index.html <head>
  // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
  // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">


  return (
    <div className="container"> {/* body tag becomes a div with className */}
      <p className="MsoNormal" style={{ textAlign: 'center' }}> {/* align="center" becomes style */}
        <strong><em><u>
          <span style={{ lineHeight: '107%', fontSize: '22.0pt', color: 'black' }}>
            AUXILIARY VERB
          </span>
        </u></em></strong>
      </p>
      <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
        <em><span style={{ fontSize: '16.0pt', color: 'black' }}>Auxiliary </span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Verbs Tense, Voice </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '14.0pt', color: 'black' }}>ও</span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}> </span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Mood </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '14.0pt', color: 'black' }}>এর</span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '14.0pt', color: 'black' }}>রূপ</span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '14.0pt', color: 'black' }}>গঠনের</span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '14.0pt', color: 'black' }}>জন্য</span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}> </span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Principal Verb </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '14.0pt', color: 'black' }}>কে</span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '14.0pt', color: 'black' }}>সহয়তা</span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '14.0pt', color: 'black' }}>করে।</span></em>
        <em><span style={{ fontSize: '14.0pt', color: 'black' }}> </span></em>
      </p>
      <p className="MsoNormal">
        <strong><em><span style={{ lineHeight: '107%', fontSize: '16.0pt', color: 'black' }}> </span></em></strong>
        <strong><em><span style={{ lineHeight: '107%', fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt', color: 'black', background: 'lightgrey' }}>সাধারণত</span></em></strong>
        <strong><em><span style={{ lineHeight: '107%', fontSize: '16.0pt', color: 'black', background: 'lightgrey' }}> </span></em></strong>
        <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt', color: 'black', background: 'lightgrey' }}>২</span></em></strong>
        <strong><em><span style={{ fontSize: '16.0pt', color: 'black', background: 'lightgrey' }}> </span></em></strong>
        <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt', color: 'black', background: 'lightgrey' }}>প্রকার</span></em></strong>
        <strong><em><span style={{ fontSize: '16.0pt', color: 'black', background: 'lightgrey' }}> :</span></em></strong>
        <span style={{ fontSize: '16.0pt', color: 'black', background: 'lightgrey' }}> </span>
        <span style={{ fontSize: '16.0pt', color: 'black' }}> </span>
      </p>
      <ul>
        <li><span style={{ lineHeight: '107%', fontSize: '14.0pt', color: 'black' }}>primary auxiliary</span></li>
        <li><span style={{ fontSize: '14.0pt', color: 'black' }}>modal auxiliary</span></li>
      </ul>
      <p className="MsoNormal">
        <strong><em><u><span style={{ lineHeight: '107%', fontSize: '18.0pt', color: 'black' }}>1 Primary Auxiliary</span></u></em></strong>
        <span style={{ lineHeight: '107%', fontSize: '12.0pt', color: 'black' }}> </span>
        <span style={{ lineHeight: '107%', fontSize: '11.5pt', color: 'black' }}>/</span>
        <strong><em><span style={{ fontSize: '18.0pt', color: 'black' }}>Tense Auxiliaries</span></em></strong>
        <strong><em><u><span style={{ fontSize: '16.0pt', color: 'black' }}>:</span></u></em></strong>
      </p>
      <p className="MsoNormal">
        <strong><em><u><span style={{ fontSize: '12.0pt', color: 'black' }}>  Main Verb </span></u></em></strong>
        <strong><em><u><span style={{ lineHeight: '107%', fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>হিসাবে</span></u></em></strong>
        <strong><em><u><span style={{ fontSize: '12.0pt', color: 'black' }}> Use </span></u></em></strong>
        <strong><em><u><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>হয়</span></u></em></strong>
        <strong><em><u><span style={{ fontSize: '12.0pt', color: 'black' }}> </span></u></em></strong>
        <strong><em><u><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>আবার</span></u></em></strong>
        <strong><em><u><span style={{ fontSize: '12.0pt', color: 'black' }}> </span></u></em></strong>
        <strong><em><u><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>সাহায্যকারী হিসাবে</span></u></em></strong>
        <strong><em><u><span style={{ fontSize: '12.0pt', color: 'black' }}> Use </span></u></em></strong>
        <strong><em><u><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>হয়</span></u></em></strong>
        <strong><em><u><span style={{ fontSize: '12.0pt', color: 'black' }}>   (</span></u></em></strong>
        <span style={{ lineHeight: '107%', fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>যে</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}>Verb </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>গুলোকে</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>বাক্যে</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}>Helping </span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}>verb</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>এবং</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>কখনো</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>কখনো</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}>main verb  </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>হিসেবে</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>ব্যবহৃত</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>হয়</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>তাদেরকে</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}> </span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}>Primary Auxiliaries/Tense Auxiliaries </span>
        <span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '11.5pt', color: 'black' }}>বলে।</span>
        <span style={{ fontSize: '11.5pt', color: 'black' }}>)</span>
      </p>
      <p className="MsoNormal"><span style={{ fontSize: '11.5pt', color: 'black' }}> </span></p>

      <table
        className="MsoTable15Grid4Accent1"
        border="1" // This will be overridden by CSS if border-collapse is used, but good for semantics
        cellSpacing="0"
        cellPadding="0"
        width="684"
        style={{ width: '512.65pt', marginLeft: '-.25pt', borderCollapse: 'collapse', border: 'none' }}
      >
        <thead> {/* Added thead for semantic HTML */}
          <tr style={{ height: '38.75pt' }}>
            <td width="97" valign="top" style={{ width: '73.1pt', border: 'solid #4472C4 1.0pt', borderRight: 'none', background: '#4472C4', padding: '0in 5.4pt 0in 5.4pt', height: '38.75pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'white' }}>Base form </span></em></strong>
              </p>
            </td>
            <td width="123" valign="top" style={{ width: '92.15pt', borderTop: 'solid #4472C4 1.0pt', borderLeft: 'none', borderBottom: 'solid #4472C4 1.0pt', borderRight: 'none', background: '#4472C4', padding: '0in 5.4pt 0in 5.4pt', height: '38.75pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'white' }}>V1/ present form</span></em></strong>
              </p>
            </td>
            <td width="86" valign="top" style={{ width: '64.65pt', borderTop: 'solid #4472C4 1.0pt', borderLeft: 'none', borderBottom: 'solid #4472C4 1.0pt', borderRight: 'none', background: '#4472C4', padding: '0in 5.4pt 0in 5.4pt', height: '38.75pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'white' }}>V2/ past form</span></em></strong>
              </p>
            </td>
            <td width="84" valign="top" style={{ width: '63.35pt', borderTop: 'solid #4472C4 1.0pt', borderLeft: 'none', borderBottom: 'solid #4472C4 1.0pt', borderRight: 'none', background: '#4472C4', padding: '0in 5.4pt 0in 5.4pt', height: '38.75pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'white' }}>V3/ past participle</span></em></strong>
              </p>
            </td>
            <td width="74" valign="top" style={{ width: '55.65pt', borderTop: 'solid #4472C4 1.0pt', borderLeft: 'none', borderBottom: 'solid #4472C4 1.0pt', borderRight: 'none', background: '#4472C4', padding: '0in 5.4pt 0in 5.4pt', height: '38.75pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'white' }}>Ing form</span></em></strong>
              </p>
            </td>
            <td width="218" valign="top" style={{ width: '163.75pt', border: 'solid #4472C4 1.0pt', borderLeft: 'none', background: '#4472C4', padding: '0in 5.4pt 0in 5.4pt', height: '38.75pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'white' }}>comments</span></em></strong>
              </p>
            </td>
          </tr>
        </thead>
        <tbody> {/* Added tbody for semantic HTML */}
          <tr style={{ height: '35.5pt' }}>
            <td width="97" valign="top" style={{ width: '73.1pt', border: 'solid #8EAADB 1.0pt', borderTop: 'none', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '35.5pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'black' }}>Be </span></em></strong>
                <strong><em><span style={{ fontSize: '14.0pt' }}> </span></em></strong>
              </p>
            </td>
            <td width="123" valign="top" style={{ width: '92.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '35.5pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Am, is, are</span></em>
                <em><span style={{ fontSize: '14.0pt' }}> </span></em>
              </p>
            </td>
            <td width="86" valign="top" style={{ width: '64.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '35.5pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Was ,were</span></em>
                <em><span style={{ fontSize: '14.0pt' }}> </span></em>
              </p>
            </td>
            <td width="84" valign="top" style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '35.5pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>been</span></em>
                <em><span style={{ fontSize: '14.0pt' }}> </span></em>
              </p>
            </td>
            <td width="74" valign="top" style={{ width: '55.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '35.5pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>being</span></em>
                <em><span style={{ fontSize: '14.0pt' }}> </span></em>
              </p>
            </td>
            <td width="218" valign="top" style={{ width: '163.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#FFF2CC', padding: '0in 5.4pt 0in 5.4pt', height: '35.5pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}>Be verb </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>ছাড়া</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}> continuous </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>হয়</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}> </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>না।</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt' }}> </span></em></strong>
              </p>
            </td>
          </tr>
          <tr style={{ height: '38.35pt' }}>
            <td width="97" valign="top" style={{ width: '73.1pt', border: 'solid #8EAADB 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt', height: '38.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'black' }}>Have</span></em></strong>
              </p>
            </td>
            <td width="123" valign="top" style={{ width: '92.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '38.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Have ,has</span></em>
              </p>
            </td>
            <td width="86" valign="top" style={{ width: '64.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '38.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Had</span></em>
              </p>
            </td>
            <td width="84" valign="top" style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '38.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Had</span></em>
              </p>
            </td>
            <td width="74" valign="top" style={{ width: '55.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '38.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Having</span></em>
              </p>
            </td>
            <td width="218" valign="top" style={{ width: '163.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D0CECE', padding: '0in 5.4pt 0in 5.4pt', height: '38.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}>Have </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>ছাড়া</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}>  perfect </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>হয়</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}> </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>না।</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}> </span></em></strong>
              </p>
            </td>
          </tr>
          <tr style={{ height: '32.35pt' }}>
            <td width="97" valign="top" style={{ width: '73.1pt', border: 'solid #8EAADB 1.0pt', borderTop: 'none', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '32.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '14.0pt', color: 'black' }}>Do </span></em></strong>
                <strong><em><span style={{ fontSize: '14.0pt' }}> </span></em></strong>
              </p>
            </td>
            <td width="123" valign="top" style={{ width: '92.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '32.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Do,does</span></em>
                <em><span style={{ fontSize: '14.0pt' }}> </span></em>
              </p>
            </td>
            <td width="86" valign="top" style={{ width: '64.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '32.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Did </span></em>
                <em><span style={{ fontSize: '14.0pt' }}> </span></em>
              </p>
            </td>
            <td width="84" valign="top" style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '32.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Done</span></em>
                <em><span style={{ fontSize: '14.0pt' }}> </span></em>
              </p>
            </td>
            <td width="74" valign="top" style={{ width: '55.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#D9E2F3', padding: '0in 5.4pt 0in 5.4pt', height: '32.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <em><span style={{ fontSize: '14.0pt', color: 'black' }}>Doing</span></em>
                <em><span style={{ fontSize: '14.0pt' }}> </span></em>
              </p>
            </td>
            <td width="218" valign="top" style={{ width: '163.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #8EAADB 1.0pt', borderRight: 'solid #8EAADB 1.0pt', background: '#FFF2CC', padding: '0in 5.4pt 0in 5.4pt', height: '32.35pt' }}>
              <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal' }}>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}>Do verb ,negative interrogative </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>করতে</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}> </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>সাহায্য</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt', color: 'black' }}> </span></em></strong>
                <strong><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '12.0pt', color: 'black' }}>করে।</span></em></strong>
                <strong><em><span style={{ fontSize: '12.0pt' }}> </span></em></strong>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="MsoNormal"><em><span style={{ lineHeight: '107%', fontSize: '16.0pt' }}> </span></em></p>
      <p className="MsoNormal"><em><span style={{ fontSize: '16.0pt' }}> </span></em></p>

      <p className="MsoNormal">
        <strong><em><u><span style={{ lineHeight: '107%', fontSize: '20.0pt' }}>2 Modal Auxiliary</span></u></em></strong>
        <strong><em><u><span style={{ fontSize: '16.0pt' }}>:</span></u></em></strong>
        <span style={{ lineHeight: '107%', fontSize: '14.0pt' }}> </span>
        <em><span style={{ lineHeight: '107%', fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>ক্রিয়া</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>সম্পাদনের</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>ক্ষেত্রে</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontSize: '16.0pt' }}>Mood </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>বা</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>ধরণ</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>বুঝানোর</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>জন্য</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>যে</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontSize: '16.0pt' }}>Auxiliaries </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>ব্যবহৃত</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>হয়</span></em>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <a name="_Hlk50291656"><em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>সেগুলোকে</span></em></a>
        <em><span style={{ fontSize: '16.0pt' }}> </span></em>
        <em><span style={{ fontSize: '16.0pt' }}>Modal Auxiliaries </span></em>
        <em><span style={{ fontFamily: "'Nirmala UI',sans-serif", fontSize: '16.0pt' }}>বলে।</span></em>
        <strong><em><u><span style={{ fontSize: '16.0pt' }}> </span></u></em></strong>
      </p>
      <ul>
        <li>
          {/* Assuming images are in public folder: public/EnglishClub/clip_image001_0004.png */}
          <img
            width="236"
            height="144"
            src="/EnglishClub/clip_image001_0004.png" // Adjusted path
            // align="left" hspace="12" vspace="5" // Use CSS for this:
            className="img-align-left-hs12-vs5" // Custom class from CSS file
            alt="Text Box: • May • Might • Can • Could • Have to/ Has to • Don’t/ Doesn’t have to • Need"
          />
          <em><span style={{ border: 'none windowtext 1.0pt', padding: '0in', fontSize: '12.0pt', color: '#666666' }}>Will</span></em>
          <span style={{ fontSize: '12.0pt', color: '#666666' }}> </span>
        </li>
        <li><em><span style={{ fontSize: '12.0pt', color: '#666666' }}>Shall</span></em><span style={{ fontSize: '12.0pt', color: '#666666' }}> </span></li>
        <li><em><span style={{ fontSize: '12.0pt', color: '#666666' }}>Would</span></em><span style={{ fontSize: '12.0pt', color: '#666666' }}> </span></li>
        <li><em><span style={{ fontSize: '12.0pt', color: '#666666' }}>Should</span></em><span style={{ fontSize: '12.0pt', color: '#666666' }}> </span></li>
        <li><em><span style={{ fontSize: '12.0pt', color: '#666666' }}>Ought to</span></em><span style={{ fontSize: '12.0pt', color: '#666666' }}> </span></li>
        <li><em><span style={{ fontSize: '12.0pt', color: '#666666' }}>Must</span></em><span style={{ fontSize: '12.0pt', color: '#666666' }}> </span></li>
        <li><em><span style={{ fontSize: '12.0pt', color: '#666666' }}>Mustn’t</span></em> <span style={{ fontSize: '12.0pt', color: '#666666' }}> </span></li>
      </ul>
      <p className="MsoNormal" style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white', verticalAlign: 'baseline' }}>
        {/* Assuming images are in public folder: public/EnglishClub/clip_image002_0003.png */}
        <img
          width="523"
          height="146"
          src="/EnglishClub/clip_image002_0003.png" // Adjusted path
          className="img-align-left-hs12-vs5" // Custom class from CSS file (adjust hspace/vspace if needed)
          alt="Text Box: ü Modal auxiliary পরে verb এর base form হয়. ü Be verb এর পরে verb এর ing form হয়. ü Have verb এর পরে verb এর v3 হয়"
        />
        <em><span style={{ fontSize: '12.0pt', color: '#666666' }}> </span></em>
      </p>
      <p className="MsoNormal">
        <strong><em><u><span style={{ fontSize: '16.0pt', color: 'black' }}><span style={{ textDecoration: 'none' }}> </span></span></u></em></strong>
      </p>

      {/* NAV and MODAL structure - ensure Bootstrap JS is loaded */}
      <nav> {/* Original had nested <nav> tags, which is unusual. Keeping one. */}
        <nav className="navbar fixed-top navbar-light navbar-expand-md navbar-dark bg-primary flex-sm-row">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse btn-outline-info" id="navbarTogglerDemo01">
              {/* Assuming images are in public folder: public/images/logo.png */}
              <a className="navbar-brand fw-bolder m-1 mt-" href="#">
                <img className="img-fluid max pe-1" src="/images/logo.png" alt="" /> {/* Adjusted path */}
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-normal fst-italic">
                <li className="nav-item">
                  <a className="nav-link outline-info" aria-current="page" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown"> {/* Combined li tags */}
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkVocabulary" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Vocabulary
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkVocabulary">
                    <li><a className="dropdown-item" href="documents/3 forms of verb final version.pdf">Strong verb and Week Verb</a></li>
                    <li><a className="dropdown-item" href="#">Vocabulary for Connectors</a></li>
                    <li><a className="dropdown-item" href="#">Others</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown"> {/* Combined li tags */}
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkGrammar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Grammar
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkGrammar">
                    <li><a className="dropdown-item" href="Auxiliary verb.html">Auxiliary verb</a></li>
                    <li><a className="dropdown-item" href="Sentence কত প্রকার ও কি কি.htm">sentences</a></li>
                    <li><a className="dropdown-item" href="#">Tense</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkWriting" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Writing
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkWriting">
                    <li><a className="dropdown-item" href="Paragraph .htm">Paragraph</a></li>
                    <li><a className="dropdown-item" href="#">CV</a></li>
                    <li><a className="dropdown-item" href="#">Application</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#courses-section">Courses</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkExam" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Take an Exam
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkExam">
                    <li><a className="dropdown-item" href="#">Grammar</a></li>
                    <li><a className="dropdown-item" href="#">writing</a></li>
                    <li><a className="dropdown-item" href="#">Something else </a></li>
                  </ul>
                </li>
                <li className="nav-item"> {/* Removed extra <li> */}
                  <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Register
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <div className="collapse" id="collapseExamplesearch">
                  <div className="">
                    <input
                      className="form-control me-5"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
                <button className="btn btn-outline-info" type="submit">
                  <a className="text-light text-decoration-none" data-bs-toggle="collapse" href="#collapseExamplesearch" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Search
                  </a>
                </button>
              </form>
            </div>
          </div>
        </nav>
        {/* Button trigger modalstart here - This seems like a comment, removed */}
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Registration Form</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* form start here */}
                {/* Note: Original had nested <form> tags, which is invalid HTML. Using one outer form. */}
                <form action="post"> {/* Or handle with React state and onSubmit */}
                  <div className="form container">
                    <div className="row g-3">
                      <div className="col-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          aria-label="First name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          aria-label="Last name"
                        />
                      </div>
                    </div>
                    {/* <form className="row g-3"> -- Removed nested form */}
                    <div className="row g-3"> {/* Added this div to maintain row g-3 structure for subsequent fields */}
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label> {/* htmlFor instead of for */}
                        <input type="email" className="form-control" id="inputEmail4" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Present Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="Gohailkandi,Jamtola, Mymensingh Sadar, Mymensingh"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Permanent Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor(Gohailkandi,Mymensingh)"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity"
                          placeholder="Mymensingh" />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select" defaultValue="Mymensingh Sadar"> {/* defaultValue for select in React */}
                          <option>Mymensingh Sadar</option>
                          <option>Tarakanda</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"
                          placeholder="2200" />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck" />
                          <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                </form>
                {/* form end here */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* Button trigger modal end hare - This seems like a comment, removed */}
      </nav> {/* Closing the outer nav */}
    </div>
  );
}

export default AuxiliaryVerbPage;