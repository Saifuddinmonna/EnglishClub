import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import MainLayout from './Layouts/MainLayout';
import HomeLayout from './Layouts/HomeLayout';
import GrammarLayout from './Layouts/GrammarLayout';
import VocabularyLayout from './Layouts/VocabularyLayout';
import WritingLayout from './Layouts/WritingLayout';
import SyllabusLayout from './Layouts/SyllabusLayout';
import CoursesLayout from './Layouts/CoursesLayout';
import Home from '../pages/Home/Home';
import Grammar from '../pages/Grammar/Grammar';
import CaseGrammarPage from '../pages/Grammar/Case';
import Students from '../pages/Students/Students';
import Documents from '../pages/Documents/Documents';

const AppRouter = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Vocabulary Routes */}
            <Route path="/vocabulary" element={<VocabularyLayout />}>
              <Route index element={<div className="container section">
                <h2>Vocabulary</h2>
                <div className="vocabulary-content">
                  <h3>Strong Verbs and Weak Verbs</h3>
                  <p>Learn about different types of verbs and their forms.</p>
                  <h3>Connectors</h3>
                  <p>Important vocabulary for connecting ideas in sentences.</p>
                  <h3>Other Vocabulary</h3>
                  <p>Additional vocabulary resources and exercises.</p>
                </div>
              </div>} />
              <Route path="3-forms-of-verb" element={<div className="container section">Strong verb and Week Verb</div>} />
              <Route path="connectors" element={<div className="container section">Vocabulary for Connectors</div>} />
              <Route path="others" element={<div className="container section">Other Vocabulary</div>} />
            </Route>

            {/* Grammar Routes */}
            <Route path="/grammar" element={<GrammarLayout />}>
              <Route index element={<Grammar />} />
              <Route path="sentences" element={<div className="container section">Sentences</div>} />
              <Route path="auxiliary-verb" element={<div className="container section">Auxiliary Verbs</div>} />
              <Route path="tense" element={<div className="container section">Tense in one page</div>} />
              <Route path="case" element={<CaseGrammarPage />} />
            </Route>

            {/* Writing Routes */}
            <Route path="/writing" element={<WritingLayout />}>
              <Route index element={<div className="container section">Writing Page</div>} />
              <Route path="paragraph" element={<div className="container section">Paragraph malty</div>} />
              <Route path="padma-bridge" element={<div className="container section">Padma Bridge - Paragraph</div>} />
              <Route path="covid19" element={<div className="container section">Covid-19 Paragraph</div>} />
              <Route path="application" element={<div className="container section">Application</div>} />
            </Route>

            {/* Syllabus Routes */}
            <Route path="/syllabus" element={<SyllabusLayout />}>
              <Route index element={<div className="container section">Syllabus Page</div>} />
              <Route path="hsc" element={<div className="container section">HSC Syllabus</div>} />
              <Route path="ssc" element={<div className="container section">SSC Syllabus</div>} />
              <Route path="jsc" element={<div className="container section">JSC Syllabus</div>} />
            </Route>

            {/* Courses Route */}
            <Route path="/courses" element={<CoursesLayout />}>
              <Route index element={<div className="container section">Courses Page</div>} />
            </Route>

            {/* Students Route */}
            <Route path="/students" element={<Students />} />

            {/* Documents Route */}
            <Route path="/documents" element={<Documents />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default AppRouter;