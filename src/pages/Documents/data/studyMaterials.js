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
    description: 'Comprehensive preparation materials for various English proficiency and academic exams',
    icon: AcademicCapIcon,
    categories: [
      {
        name: 'IELTS Preparation',
        path: '/documents/examPreparation/ielts',
        items: [
          {
            category: 'Reading Section',
            items: [
              { 
                name: 'IELTS Reading Strategies',
                file: 'ielts_reading_strategies.html',
                description: 'Essential strategies for IELTS Reading section'
              },
              { 
                name: 'Reading Practice Tests',
                file: 'ielts_reading_practice.html',
                description: 'Practice tests with detailed explanations'
              },
              { 
                name: 'Reading Question Types',
                file: 'ielts_reading_question_types.html',
                description: 'Overview of different question types in IELTS Reading'
              }
            ]
          },
          {
            category: 'Writing Section',
            items: [
              { 
                name: 'Task 1: Academic Writing',
                file: 'ielts_writing_task1.html',
                description: 'Guide for Academic Writing Task 1'
              },
              { 
                name: 'Task 2: Essay Writing',
                file: 'ielts_writing_task2.html',
                description: 'Comprehensive guide for Task 2 essay writing'
              },
              { 
                name: 'Writing Band Descriptors',
                file: 'ielts_writing_band_descriptors.html',
                description: 'Understanding IELTS Writing band scores'
              }
            ]
          },
          {
            category: 'Speaking Section',
            items: [
              { 
                name: 'Speaking Test Format',
                file: 'ielts_speaking_format.html',
                description: 'Detailed breakdown of IELTS Speaking test'
              },
              { 
                name: 'Speaking Practice Topics',
                file: 'ielts_speaking_topics.html',
                description: 'Common topics and sample answers'
              },
              { 
                name: 'Speaking Band Descriptors',
                file: 'ielts_speaking_band_descriptors.html',
                description: 'Understanding IELTS Speaking band scores'
              }
            ]
          },
          {
            category: 'Listening Section',
            items: [
              { 
                name: 'Listening Test Format',
                file: 'ielts_listening_format.html',
                description: 'Overview of IELTS Listening test structure'
              },
              { 
                name: 'Listening Practice Tests',
                file: 'ielts_listening_practice.html',
                description: 'Practice tests with audio materials'
              },
              { 
                name: 'Listening Question Types',
                file: 'ielts_listening_question_types.html',
                description: 'Different types of questions in Listening section'
              }
            ]
          }
        ]
      },
      {
        name: 'TOEFL Preparation',
        path: '/documents/examPreparation/toefl',
        items: [
          {
            category: 'Reading Section',
            items: [
              { 
                name: 'TOEFL Reading Strategies',
                file: 'toefl_reading_strategies.html',
                description: 'Essential strategies for TOEFL Reading section'
              },
              { 
                name: 'Reading Practice Tests',
                file: 'toefl_reading_practice.html',
                description: 'Practice tests with detailed explanations'
              }
            ]
          },
          {
            category: 'Writing Section',
            items: [
              { 
                name: 'Integrated Writing Task',
                file: 'toefl_writing_integrated.html',
                description: 'Guide for Integrated Writing Task'
              },
              { 
                name: 'Independent Writing Task',
                file: 'toefl_writing_independent.html',
                description: 'Guide for Independent Writing Task'
              }
            ]
          },
          {
            category: 'Speaking Section',
            items: [
              { 
                name: 'Speaking Test Format',
                file: 'toefl_speaking_format.html',
                description: 'Overview of TOEFL Speaking test'
              },
              { 
                name: 'Speaking Practice Tasks',
                file: 'toefl_speaking_practice.html',
                description: 'Practice tasks with sample responses'
              }
            ]
          },
          {
            category: 'Listening Section',
            items: [
              { 
                name: 'Listening Test Format',
                file: 'toefl_listening_format.html',
                description: 'Overview of TOEFL Listening test'
              },
              { 
                name: 'Listening Practice Tests',
                file: 'toefl_listening_practice.html',
                description: 'Practice tests with audio materials'
              }
            ]
          }
        ]
      },
      {
        name: 'Academic Exams',
        path: '/documents/examPreparation/academic',
        items: [
          {
            category: 'SSC Preparation',
            items: [
              { 
                name: 'SSC English Syllabus',
                file: 'ssc_syllabus.html',
                description: 'Complete syllabus for SSC English'
              },
              { 
                name: 'SSC Practice Tests',
                file: 'ssc_practice_tests.html',
                description: 'Practice tests for SSC English'
              }
            ]
          },
          {
            category: 'HSC Preparation',
            items: [
              { 
                name: 'HSC English Syllabus',
                file: 'hsc_syllabus.html',
                description: 'Complete syllabus for HSC English'
              },
              { 
                name: 'HSC Practice Tests',
                file: 'hsc_practice_tests.html',
                description: 'Practice tests for HSC English'
              }
            ]
          },
          {
            category: 'BCS Preparation',
            items: [
              { 
                name: 'BCS English Syllabus',
                file: 'bcs_syllabus.html',
                description: 'Complete syllabus for BCS English'
              },
              { 
                name: 'BCS Practice Tests',
                file: 'bcs_practice_tests.html',
                description: 'Practice tests for BCS English'
              }
            ]
          },
          {
            category: 'University Admission',
            items: [
              { 
                name: 'Admission Test Syllabus',
                file: 'admission_syllabus.html',
                description: 'Syllabus for university admission tests'
              },
              { 
                name: 'Admission Practice Tests',
                file: 'admission_practice_tests.html',
                description: 'Practice tests for university admission'
              }
            ]
          }
        ]
      },
      {
        name: 'Premium Content',
        path: '/documents/examPreparation/premium',
        items: [
          {
            category: 'IELTS Premium',
            items: [
              { 
                name: 'IELTS Full Course',
                file: 'ielts_full_course.html',
                description: 'Complete IELTS preparation course (Premium)'
              },
              { 
                name: 'IELTS Mock Tests',
                file: 'ielts_mock_tests.html',
                description: 'Full-length mock tests with detailed analysis'
              }
            ]
          },
          {
            category: 'TOEFL Premium',
            items: [
              { 
                name: 'TOEFL Full Course',
                file: 'toefl_full_course.html',
                description: 'Complete TOEFL preparation course (Premium)'
              },
              { 
                name: 'TOEFL Mock Tests',
                file: 'toefl_mock_tests.html',
                description: 'Full-length mock tests with detailed analysis'
              }
            ]
          },
          {
            category: 'Academic Premium',
            items: [
              { 
                name: 'SSC Full Course',
                file: 'ssc_full_course.html',
                description: 'Complete SSC preparation course (Premium)'
              },
              { 
                name: 'HSC Full Course',
                file: 'hsc_full_course.html',
                description: 'Complete HSC preparation course (Premium)'
              },
              { 
                name: 'BCS Full Course',
                file: 'bcs_full_course.html',
                description: 'Complete BCS preparation course (Premium)'
              }
            ]
          }
        ]
      }
    ]
  }
}; 