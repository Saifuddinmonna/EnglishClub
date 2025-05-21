import React from 'react';
// If you move the Word styles to a separate CSS file:
// import './SentencePage.css';
// If you want to import the logo:
// import logo from './images/logo.png'; // Assuming logo.png is in src/images/

function SentencePage() {
  // For Bootstrap interactivity (if not using react-bootstrap and relying on global Bootstrap JS)
  // No explicit state management needed here if data-bs-* attributes are used with global JS.

  return (
    <>
      {/*
        IMPORTANT:
        1. Bootstrap CSS: Make sure Bootstrap 5 CSS is linked in your public/index.html
           or imported in your App.js/index.js (e.g., import 'bootstrap/dist/css/bootstrap.min.css';)
        2. Bootstrap JS: For modals and navbar toggles to work with data-bs-* attributes,
           Bootstrap 5 JS bundle must be linked in your public/index.html (usually before the closing </body> tag).
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
        3. Images: The logo src="images/logo.png" assumes an 'images' folder in your 'public' directory.
           So the path becomes "/images/logo.png".
        4. Word Styles: The massive <style> block from the original HTML should ideally be moved
           to a separate CSS file (e.g., SentencePage.css) and imported.
           For this example, I'll put a placeholder for where you'd put them or how to handle them.
           The @page, @list, and font-face definitions are very Word-specific and might not render perfectly.
      */}

      {/* Inline styles from the <style> tag. Ideally, move to SentencePage.css */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- PASTE THE CONTENT OF THE <style> TAG FROM YOUR ORIGINAL HTML HERE --- */
        /* --- (from "body{" down to "ul {margin-bottom:0in;}}") --- */
        /* --- AND REMOVE THE MSO CONDITIONAL COMMENTS AROUND TABLE STYLES --- */
        /* Example minimal body style if not using the full Word styles */
        /*
        body { /* This won't apply directly to a component's body, but a root div */
          /* margin: 40px !important; */
          /* padding: 20px; */
        /* }
        */

        /*
          NOTE: It's generally better to create a SentencePage.css and import it:
          import './SentencePage.css';
          Then copy the styles there.
          The styles below are the MSO table styles, also part of the <style> block.
        */
        table.MsoNormalTable
          {mso-style-name:"Table Normal";
          mso-tstyle-rowband-size:0;
          /* ... (rest of the MSO table styles) ... */
          }
        /* ... (all other table.MsoTableGrid, table.MsoTable15Plain1 etc. styles) ... */

        /* Minimal body style if you want to apply it to the component's root div */
        .sentence-page-body-wrapper {
           margin: 40px;
           padding: 20px;
        }
        /* --- END OF PASTED STYLES --- */
      ` }} />

      <div className="container sentence-page-body-wrapper"> {/* Apply body styles here if needed */}
        <div className="container">
          {/* Navbar starts here */}
          <nav className="mt-5">
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
                  <a className="navbar-brand fw-bolder m-1 mt-" href="#">
                    <img className="img-fluid max pe-1" src="/images/logo.png" alt="Logo" /> {/* Updated path */}
                  </a>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-normal fst-italic">
                    <li className="nav-item">
                      <a className="nav-link outline-info" aria-current="page" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLinkVocabulary"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Vocabulary
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkVocabulary">
                        <li><a className="dropdown-item" href="documents/3 forms of verb final version.pdf">Strong verb and Week Verb</a></li>
                        <li><a className="dropdown-item" href="#">Vocabulary for Connectors</a></li>
                        <li><a className="dropdown-item" href="#">Others</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLinkGrammar"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Grammar
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkGrammar">
                        <li><a className="dropdown-item" href="Auxiliary verb.html">Auxiliary verb</a></li>
                        <li><a className="dropdown-item" href="Sentence কত প্রকার ও কি কি.htm">sentences</a></li>
                        <li><a className="dropdown-item" href="#">Tense</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLinkWriting"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
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
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLinkExam"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Take an Exam
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkExam">
                        <li><a className="dropdown-item" href="#">Grammar</a></li>
                        <li><a className="dropdown-item" href="#">writing</a></li>
                        <li><a className="dropdown-item" href="#">Something else</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop" // Make sure this modal exists or remove
                      >
                        About
                      </button>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
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
                    <button className="btn btn-outline-info" type="button"> {/* Changed to type="button" for collapse */}
                      <a
                        className="text-light text-decoration-none"
                        data-bs-toggle="collapse"
                        href="#collapseExamplesearch"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Search
                      </a>
                    </button>
                  </form>
                </div>
              </div>
            </nav>

            {/* Register Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Registration Form</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form> {/* Removed action="post" for client-side React */}
                      <div className="form container">
                        <div className="row g-3">
                          <div className="col-4">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                          </div>
                          <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                          </div>
                        </div>
                        {/* No nested form needed */}
                        <div className="col-md-6">
                          <label htmlFor="inputEmail4" className="form-label">Email</label>
                          <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputPassword4" className="form-label">Password</label>
                          <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                          <label htmlFor="inputAddress" className="form-label">Present Address</label>
                          <input type="text" className="form-control" id="inputAddress" placeholder="Gohailkandi,Jamtola, Mymensingh Sadar, Mymensingh" />
                        </div>
                        <div className="col-12">
                          <label htmlFor="inputAddress2" className="form-label">Permanent Address</label>
                          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor(Gohailkandi,Mymensingh)" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputCity" className="form-label">City</label>
                          <input type="text" className="form-control" id="inputCity" placeholder="Mymensingh" />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="inputState" className="form-label">State</label>
                          <select id="inputState" className="form-select">
                            <option >Mymensingh Sadar</option> {/* Removed selected */}
                            <option>Tarakanda</option>
                          </select>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="inputZip" className="form-label">Zip</label>
                          <input type="text" className="form-control" id="inputZip" placeholder="2200" />
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
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
             {/* About Modal (Placeholder - content not provided in original HTML for this ID) */}
             <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">About Us</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        This is the about section. Content goes here.
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

          </nav>
          {/* Navbar ends here */}
        </div>

        {/* Main content from Word document */}
        <div className="container WordSection1"> {/* Added WordSection1 for styles if needed */}
          <p className="MsoNormal" align="center" style={{ marginBottom: '0in', textAlign: 'center', lineHeight: 'normal', background: 'white' }}>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}>Sentence </span></u></i></b>
            <span className="GramE">
              <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>কি</span></u></i></b>
              <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> ?</span></u></i></b>
            </span>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> Sentence </span></u></i></b>
            <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>বলতে</span></u></i></b>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> </span></u></i></b>
            <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>কি</span></u></i></b>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> </span></u></i></b>
            <span className="GramE">
              <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>বুঝায়</span></u></i></b>
              <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> ?</span></u></i></b>
            </span>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> Sentence </span></u></i></b>
            <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>কত</span></u></i></b>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> </span></u></i></b>
            <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>প্রকার</span></u></i></b>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> </span></u></i></b>
            <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>ও</span></u></i></b>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> </span></u></i></b>
            <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>কি</span></u></i></b>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> </span></u></i></b>
            <span className="GramE">
              <b><i><u><span lang="BN-BD" style={{ fontSize: '24.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'lightgrey' }}>কি</span></u></i></b>
              <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'lightgrey' }}> ?</span></u></i></b>
            </span>
            <b><i><u><span style={{ fontSize: '24.0pt', fontFamily: '"Arial",sans-serif', color: 'black' }}><o:p></o:p></span></u></i></b>
          </p>

          {/* ... Rest of your content ... */}
          {/* Example: */}
          <p className="MsoNormal" align="center" style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal', background: 'white'}}>
            <i><span style={{fontSize: '36.0pt', fontFamily: '"Times New Roman",serif', color: 'black'}}> </span></i>
          </p>

          <p className="MsoNormal" style={{marginBottom: '0in', lineHeight: 'normal', background: 'white'}}>
            <i><span style={{fontSize: '16.0pt', fontFamily: '"Arial",sans-serif', color: 'black', background: 'darkgray'}}>Sentence <b>(</b></span></i>
            <b><i><u><span lang="BN-BD" style={{fontSize: '16.0pt', fontFamily: '"Shonar Bangla",serif', color: 'black', background: 'darkgray'}}>বাক্য</span></u></i></b>
            {/* ... and so on for all the content paragraphs, tables, etc. */}
            {/* Make sure to convert class to className */}
            {/* Replace <v:shape> with <img> if possible */}
            {/* Example of VML image replacement: */}
            <p className="MsoNormal" align="center" style={{ marginBottom: '0in', textAlign: 'center', lineHeight: 'normal', background: 'white' }}>
                {/* Original VML:
                <a href="https://1.bp.blogspot.com/-bn1dEv4UEfo/WrYNnvCTmFI/AAAAAAAAHSg/SlRgj8nP5GgdQ8ioS8ecWuQMxUwQ1aEdgCLcBGAs/s1600/21751318_1341277222664770_327031625255297875_n.jpg">
                    <i>
                    <span style={{ fontSize: '16.0pt', fontFamily: '"Times New Roman",serif', color: 'black', textDecoration: 'none' }}>
                        <v:shape id="Picture_x0020_40" o:spid="_x0000_i1025" type="#_x0000_t75" href="https://1.bp.blogspot.com/-bn1dEv4UEfo/WrYNnvCTmFI/AAAAAAAAHSg/SlRgj8nP5GgdQ8ioS8ecWuQMxUwQ1aEdgCLcBGAs/s1600/21751318_1341277222664770_327031625255297875_n.jpg" style={{ width: '510pt', height: '300.75pt', visibility: 'visible', MsoWrapStyle: 'square' }} o:button="t">
                        <v:fill o:detectmouseclick="t" />
                        <v:imagedata src="Sentence কত প্রকার ও কি কি_files/image001.jpg" o:title="" />
                        </v:shape>
                    </span>
                    </i>
                </a>
                */}
                {/* Replacement (assuming image001.jpg is in public/images) */}
                <a href="https://1.bp.blogspot.com/-bn1dEv4UEfo/WrYNnvCTmFI/AAAAAAAAHSg/SlRgj8nP5GgdQ8ioS8ecWuQMxUwQ1aEdgCLcBGAs/s1600/21751318_1341277222664770_327031625255297875_n.jpg">
                    <img 
                        src="/images/image001.jpg" // Adjust path as needed
                        alt="Sentence Structure Diagram" 
                        style={{ width: '510pt', height: '300.75pt' }} 
                    />
                </a>
                <i><span style={{ fontSize: '13.0pt', fontFamily: '"Times New Roman",serif', color: 'black' }}><o:p> </o:p></span></i>
            </p>
            {/* Continue converting all p, table, etc. elements */}
        </div>
      </div>
    </>
  );
}

export default SentencePage;