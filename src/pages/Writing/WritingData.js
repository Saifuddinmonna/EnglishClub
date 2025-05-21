// src/writingData.js

// Example icons (using placeholder names, you'd import actual SVGs or icon components)
// For real icons, you might use a library like react-icons or Heroicons

export const writingCategories = [
    {
      id: 'foundational',
      title: 'Foundational & School-Level Writing Tasks',
      description: 'Essential writing skills developed from early education through secondary school.',
      icon: 'AcademicCapIcon', // Placeholder for an icon
      tasks: [
        { name: 'Tracing & Basic Sentences', details: 'Tracing and writing letters, writing simple words and short sentences with guidance.' },
        { name: 'Paragraph Writing', details: 'Descriptive, narrative, cause-effect, comparison-contrast, argumentative, analytical; often with guiding questions at school level.' },
        { name: 'Email Writing', details: 'Formal/Informal communication via email.' },
        { name: 'Letter Writing', details: 'Formal/Informal letters, applications.' },
        { name: 'Dialogue Writing', details: 'Crafting conversations for given situations or topics.' },
        { name: 'Summary Writing', details: 'Concisely presenting the main points of passages.' },
        { name: 'Short Story / Story Completion', details: 'Creative narrative writing and continuing given story prompts.' },
        { name: 'Report Writing (School Level)', details: 'e.g., for school magazines, on events.' },
        { name: 'Simple Essay / Composition', details: 'Developing ideas on given topics in a structured manner.' },
        { name: 'CV and Cover Letter', details: 'Preparing documents for job applications.' },
        { name: 'Theme / Poem Appreciation', details: 'Analyzing and writing about literary themes or poetry.' },
        { name: 'Interpreting Graphs/Charts', details: 'Presenting data findings in written form.' },
      ],
    },
    {
      id: 'bcsAdvanced',
      title: 'BCS & Advanced Level Writing Tasks',
      description: 'Complex writing skills often required for competitive exams and professional communication.',
      icon: 'BriefcaseIcon', // Placeholder for an icon
      tasks: [
        { name: 'Advanced Essay Writing', details: 'On a wide range of topics: contemporary issues, socio-economic problems, literary themes, abstract concepts, argumentative essays. Requires depth, structure, and critical analysis.' },
        { name: 'Formal Report Writing', details: 'For authorities, investigative reports, on specific issues/incidents, survey reports. Requires specific format and objective tone.' },
        { name: 'Advanced Formal Letter Writing', details: 'Official letters, applications to higher authorities, letters to the editor, business correspondence. Emphasizes formal language and structure.' },
        { name: 'Precis Writing', details: 'Concisely summarizing a longer passage, capturing main ideas accurately in one\'s own words, often with a word limit.' },
        { name: 'Translation (Bangla to English)', details: 'Requiring accurate and natural-sounding English rendering.' },
        { name: 'Analytical Paragraph Writing', details: 'Often on more abstract topics or requiring specific types of development than at school level.' },
        { name: 'Advanced Comprehension', details: 'Answering complex questions based on a given passage, requiring deep understanding, inference, and articulate written expression.' },
        { name: 'Sentence Crafting', details: 'Sentence Making, Correction, and Transformation, demonstrating grammatical accuracy and range.' },
        { name: 'Elaboration / Amplification', details: 'Expanding on a given idea, proverb, or statement, providing explanations, examples, and arguments.' },
      ],
    },
  ];
  
  export const writingTools = [
      {
          id: 'prompts',
          title: 'Creative Writing Prompts',
          description: 'Spark your imagination with daily and themed writing prompts to practice various styles.',
          icon: 'LightBulbIcon',
          link: '#'
      },
      {
          id: 'templates',
          title: 'Versatile Writing Templates',
          description: 'Access a library of templates for essays, letters, reports, and more to structure your work effectively.',
          icon: 'DocumentTextIcon',
          link: '#'
      },
      {
          id: 'grammar',
          title: 'Grammar & Style Checker',
          description: 'Refine your writing with tools that help identify grammatical errors and suggest stylistic improvements.',
          icon: 'CheckCircleIcon',
          link: '#'
      }
  ];