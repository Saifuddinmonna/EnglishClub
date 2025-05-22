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
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/syllabus" element={<SyllabusLayout />}>
              <Route index element={<div className="container section">Syllabus Page</div>} />
              <Route path="hsc" element={<div className="container section">HSC Syllabus</div>} />
              <Route path="ssc" element={<div className="container section">SSC Syllabus</div>} />
              <Route path="jsc" element={<div className="container section">JSC Syllabus</div>} />
            </Route>
            <Route path="/courses" element={<CoursesLayout />}>
              <Route index element={<div className="container section">Courses Page</div>} />
            </Route>

            {/* Protected Routes */}
            <Route path="/vocabulary" element={
              <ProtectedRoute>
                <VocabularyLayout />
              </ProtectedRoute>
            }>
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

            <Route path="/grammar" element={
              <ProtectedRoute>
                <GrammarLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Grammar />} />
              <Route path="sentences" element={<div className="container section">Sentences</div>} />
              <Route path="auxiliary-verb" element={<div className="container section">Auxiliary Verbs</div>} />
              <Route path="tense" element={<div className="container section">Tense in one page</div>} />
              <Route path="case" element={<CaseGrammarPage />} />
            </Route>

            <Route path="/writing" element={
              <ProtectedRoute>
                <WritingLayout />
              </ProtectedRoute>
            }>
              <Route index element={<div className="container section">Writing Page</div>} />
              <Route path="paragraph" element={<div className="container section">Paragraph malty</div>} />
              <Route path="padma-bridge" element={<div className="container section">Padma Bridge - Paragraph</div>} />
              <Route path="covid19" element={<div className="container section">Covid-19 Paragraph</div>} />
              <Route path="application" element={<div className="container section">Application</div>} />
            </Route>

            <Route path="/students" element={
              <ProtectedRoute>
                <Students />
              </ProtectedRoute>
            } />

            <Route path="/documents" element={
              <ProtectedRoute>
                <Documents />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default AppRouter;