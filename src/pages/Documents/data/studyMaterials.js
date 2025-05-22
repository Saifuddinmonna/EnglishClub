import { DocumentTextIcon, AcademicCapIcon, BookOpenIcon, ChatBubbleLeftRightIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

export const studyMaterials = {
  grammar: {
    title: 'Grammar Resources',
    description: 'Comprehensive collection of English grammar resources',
    icon: DocumentTextIcon,
    categories: [
      {
        id: 'basic',
        name: 'Basic Grammar',
        path: '/documents/grammarPdf/basicGrammars',
        items: [
          {
            category: "Parts of Speech",
            items: [
              { name: 'Parts of Speech Overview', file: 'Parts Of Speech কাকে বলে.html' },
              { name: 'Parts of Speech (Version 2)', file: 'Parts Of Speech কাকে বলেv2.html' },
              { name: 'Parts of Speech (Version 3)', file: 'Parts Of Speech কাকে বলেv3.html' },
              { name: 'Parts of Speech for Level', file: 'Parts Of Speech For Level.html' }
            ]
          },
          {
            category: "Verbs and Tenses",
            items: [
              { name: 'Auxiliary Verbs Overview', file: 'Auxiliary verb.html' },
              { name: 'Tense Classification', file: 'TENSE এর শ্রেণিবিভাগ.html' },
              { name: 'Tense in One Page', file: 'tense in one page basic.html' },
              { name: '3 Forms of Verb', file: '3 forms of verb.html' }
            ]
          },
          {
            category: "Pronouns",
            items: [
              { name: 'Pronoun Overview', file: 'pronoun and ists classifications.html' },
              { name: 'Personal Pronouns', file: 'Personal Pronoun.html' },
              { name: 'Relative Pronouns', file: 'RELATIVE PRONOUN.html' }
            ]
          }
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced Grammar',
        path: '/documents/grammarPdf/advancedGrammars',
        items: [
          {
            category: "Advanced Grammar",
            items: [
              { name: 'Advanced Tenses', file: 'tense details 2.html' },
              { name: 'Conditional Sentences', file: 'CONDITIONAL SENTENCE & CORRECT FORM OF VERBS.html' },
              { name: 'Relative Clauses', file: 'RELATIVE PRONOUN.html' },
              { name: 'Causative Verbs', file: 'CAUSATIVE VERB এর ব্যবহার.html' }
            ]
          }
        ]
      },
      {
        id: 'academic',
        name: 'Academic Grammar',
        path: '/documents/grammarPdf/academicGrammar',
        items: [
          {
            category: "Academic Grammar",
            items: [
              { name: 'Academic Writing', file: 'academic_writing.html' },
              { name: 'Research Paper Grammar', file: 'research_grammar.html' }
            ]
          }
        ]
      }
    ]
  },
  vocabulary: {
    title: 'Vocabulary Resources',
    description: 'Extensive collection of vocabulary learning materials',
    icon: BookOpenIcon,
    categories: [
      {
        id: 'basic',
        name: 'Basic Vocabulary',
        path: '/documents/vocabularyPdfs/Basic Vocabulary',
        items: [
          { 
            name: '3 Forms of Verbs', 
            file: '3formOfVerbs.html',
            description: 'Complete list of verbs with their three forms'
          },
          { 
            name: 'Expanded Verb List', 
            file: '3 forms of verb verbs for freehand writing (Expanded List).docx',
            description: 'Comprehensive list of verbs for practice and learning'
          }
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced Vocabulary',
        path: '/documents/vocabularyPdfs/Advanced Vocabulary',
        items: [
          { 
            name: 'Advanced Verbs', 
            file: 'advanced_verbs.html',
            description: 'Complex verbs and their usage'
          }
        ]
      },
      {
        id: 'business',
        name: 'Business English',
        path: '/documents/vocabularyPdfs/Business English',
        items: [
          { 
            name: 'Business Terms', 
            file: 'business_terms.html',
            description: 'Common business vocabulary and expressions'
          }
        ]
      },
      {
        id: 'academic',
        name: 'Academic Vocabulary',
        path: '/documents/vocabularyPdfs/Academic Vocabulary',
        items: [
          { 
            name: 'Academic Terms', 
            file: 'academic_terms.html',
            description: 'Vocabulary for academic writing'
          }
        ]
      },
      {
        id: 'ielts',
        name: 'IELTS Vocabulary',
        path: '/documents/vocabularyPdfs/IELTS Vocabulary',
        items: [
          { 
            name: 'IELTS Words', 
            file: 'ielts_words.html',
            description: 'Essential vocabulary for IELTS success'
          }
        ]
      }
    ]
  },
  writing: {
    title: 'Writing Resources',
    description: 'Comprehensive writing guides and templates',
    icon: PencilSquareIcon,
    categories: [
      {
        id: 'basic',
        name: 'Basic Writing',
        path: '/documents/writingPdf/basicWriting',
        items: [
          {
            category: "Basic Writing Skills",
            items: [
              { name: 'Sentence Structure', file: 'sentence_structure.html' },
              { name: 'Paragraph Writing', file: 'paragraph_writing.html' },
              { name: 'Basic Essays', file: 'basic_essays.html' }
            ]
          }
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced Writing',
        path: '/documents/writingPdf/advancedWriting',
        items: [
          {
            category: "Advanced Writing Skills",
            items: [
              { name: 'Essay Writing', file: 'essay_writing.html' },
              { name: 'Research Papers', file: 'research_papers.html' },
              { name: 'Academic Writing', file: 'academic_writing.html' }
            ]
          }
        ]
      },
      {
        id: 'professional',
        name: 'Professional Writing',
        path: '/documents/writingPdf/professionalWriting',
        items: [
          {
            category: "Professional Documents",
            items: [
              { name: 'Business Letters', file: 'business_letters.html' },
              { name: 'Email Writing', file: 'email_writing.html' },
              { name: 'Reports', file: 'reports.html' }
            ]
          }
        ]
      }
    ]
  },
  speaking: {
    title: 'Speaking Resources',
    description: 'Guides and exercises for improving speaking skills',
    icon: ChatBubbleLeftRightIcon,
    categories: [
      {
        id: 'basic',
        name: 'Basic Speaking',
        path: '/documents/speakingPdf/basicSpeaking',
        items: [
          {
            category: "Basic Speaking Skills",
            items: [
              { name: 'Pronunciation Basics', file: 'pronunciation_basics.html' },
              { name: 'Common Phrases', file: 'common_phrases.html' },
              { name: 'Basic Dialogues', file: 'basic_dialogues.html' }
            ]
          }
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced Speaking',
        path: '/documents/speakingPdf/advancedSpeaking',
        items: [
          {
            category: "Advanced Speaking Skills",
            items: [
              { name: 'Public Speaking', file: 'public_speaking.html' },
              { name: 'Presentation Skills', file: 'presentation_skills.html' },
              { name: 'Debate Skills', file: 'debate_skills.html' }
            ]
          }
        ]
      }
    ]
  },
  examPreparation: {
    title: 'Exam Preparation',
    description: 'Comprehensive guides for various English proficiency exams',
    icon: AcademicCapIcon,
    categories: [
      {
        id: 'ielts',
        name: 'IELTS Preparation',
        path: '/documents/examPdf/ielts',
        items: [
          {
            category: "IELTS Sections",
            items: [
              { name: 'Reading Section', file: 'ielts_reading.html' },
              { name: 'Writing Section', file: 'ielts_writing.html' },
              { name: 'Speaking Section', file: 'ielts_speaking.html' },
              { name: 'Listening Section', file: 'ielts_listening.html' }
            ]
          }
        ]
      },
      {
        id: 'toefl',
        name: 'TOEFL Preparation',
        path: '/documents/examPdf/toefl',
        items: [
          {
            category: "TOEFL Sections",
            items: [
              { name: 'Reading Section', file: 'toefl_reading.html' },
              { name: 'Writing Section', file: 'toefl_writing.html' },
              { name: 'Speaking Section', file: 'toefl_speaking.html' },
              { name: 'Listening Section', file: 'toefl_listening.html' }
            ]
          }
        ]
      }
    ]
  }
}; 