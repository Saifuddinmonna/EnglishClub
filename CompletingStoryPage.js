import React, { useEffect } from 'react';

function CompletingStoriesPage() {
  useEffect(() => {
    document.title = "Completing a Story";
  }, []);

  const story1Vocab = [
    { eng: "Greedy", ben: "লোভী", pron: "গ্রীডি" },
    { eng: "Farmer", ben: "কৃষক", pron: "ফার্মার" },
    { eng: "Poultry", ben: "হাঁস-মুরগি", pron: "পোলট্রি" },
    { eng: "Wonderful", ben: "চমৎকার, अद्भुत", pron: "ওয়ান্ডারফুল" },
    { eng: "Overjoyed", ben: "আনন্দে আত্মহারা", pron: "ওভারজয়ড" },
    { eng: "Greedier", ben: "আরও লোভী", pron: "গ্রীডিয়ার" },
    { eng: "Belly", ben: "পেট", pron: "বেলি" },
    { eng: "Dismay", ben: "হতাশা, আতঙ্ক", pron: "ডিসমে" },
    { eng: "Regretted", ben: "অনুতপ্ত হওয়া", pron: "রিগ্রেটেড" },
  ];

  // You can add vocabulary for story 2 here if available
  // const story2Vocab = [ ... ];

  const commonStyles = {
    storyContainer: {
      marginBottom: '40px',
      paddingBottom: '20px',
      borderBottom: '1px solid #eee',
    },
    heading1: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '30px',
      textAlign: 'center',
    },
    heading2: {
      fontSize: '22px',
      color: '#444',
      marginTop: '20px',
      marginBottom: '10px',
    },
    heading3: {
      fontSize: '18px',
      color: '#555',
      marginTop: '15px',
      marginBottom: '8px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.7',
      color: '#333',
      marginBottom: '15px',
      textAlign: 'justify',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '15px',
      fontSize: '15px',
    },
    th: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left',
      backgroundColor: '#f9f9f9',
      fontWeight: 'bold',
    },
    td: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left',
    },
    separator: {
      border: '0',
      height: '2px',
      background: '#ccc',
      margin: '40px 0',
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', color: '#333' }}>
      <h1 style={commonStyles.heading1}>Completing a Story</h1>

      {/* Story 1 */}
      <div style={commonStyles.storyContainer}>
        <h2 style={commonStyles.heading2}>① A Greedy Farmer</h2>
        <p style={commonStyles.paragraph}>
          Once upon a time, there lived a poor farmer in a small village. He worked hard, but barely made enough to live. One morning, he went to his poultry yard and found a wonderful goose. This goose laid a shiny, golden egg every single day. The farmer was overjoyed. He sold the golden eggs in the market and soon became very rich. However, as he got richer, he also became greedier. He thought, 'Why wait for one egg a day? The goose must have many golden eggs inside its belly. I will get them all at once!' Driven by this foolish thought, he took a sharp knife and cut open the goose. To his great shock and dismay, he found no eggs inside. The goose was just an ordinary bird. The foolish farmer lost his daily source of gold and regretted his greedy action deeply.
        </p>

        <h3 style={commonStyles.heading3}>বাংলা অনুবাদ (Bengali Translation):</h3>
        <p style={commonStyles.paragraph}>
          একদা এক ছোট্ট গ্রামে এক গরিব কৃষক বাস করত। সে কঠোর পরিশ্রম করত, কিন্তু জীবনধারণের জন্য যথেষ্ট উপার্জন করতে পারত না। একদিন সকালে সে তার মুরগির খোঁয়াড়ে গিয়ে এক अद्भुत রাজহাঁস দেখতে পেল। এই রাজহাঁস প্রতিদিন একটি করে উজ্জ্বল সোনার ডিম পাড়ত। কৃষক আনন্দে আত্মহারা হয়ে গেল। সে সোনার ডিম বাজারে বিক্রি করে শীঘ্রই খুব ধনী হয়ে উঠল। কিন্তু, যত সে ধনী হচ্ছিল, তত সে লোভীও হয়ে উঠছিল। সে ভাবল, 'প্রতিদিন একটা ডিমের জন্য অপেক্ষা করব কেন? রাজহাঁসটির পেটের ভেতর নিশ্চয়ই অনেক সোনার ডিম আছে। আমি একবারে সব পেয়ে যাব!' এই মূর্খ চিন্তায় তাড়িত হয়ে সে একটি ধারালো ছুরি নিল এবং রাজহাঁসটিকে কেটে ফেলল। অত্যন্ত আতঙ্ক ও হতাশার সাথে সে দেখল ভেতরে কোনো ডিম নেই। রাজহাঁসটি ছিল সাধারণ একটি পাখি। বোকা কৃষক তার প্রতিদিনের সোনার উৎস হারাল এবং তার লোভী কাজের জন্য গভীরভাবে অনুতপ্ত হলো।
        </p>

        <h3 style={commonStyles.heading3}>Vocabulary Table:</h3>
        <table style={commonStyles.table}>
          <thead>
            <tr>
              <th style={commonStyles.th}>English Word</th>
              <th style={commonStyles.th}>বাংলা অর্থ (Bengali Meaning)</th>
              <th style={commonStyles.th}>Pronunciation of English Word in Bangla</th>
            </tr>
          </thead>
          <tbody>
            {story1Vocab.map((item, index) => (
              <tr key={index}>
                <td style={commonStyles.td}>{item.eng}</td>
                <td style={commonStyles.td}>{item.ben}</td>
                <td style={commonStyles.td}>{item.pron}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={commonStyles.separator} />

      {/* Story 2 */}
      <div style={commonStyles.storyContainer}>
        <h2 style={commonStyles.heading2}>② An Old Farmer and His Sons</h2>
        <p style={commonStyles.paragraph}>
          An old farmer lived in a village with his three sons. His sons were strong and hardworking, but they always quarreled among themselves. The farmer tried many times to unite them, but he failed. As he grew older and felt his death was near, he worried about his sons' future. He called his sons to his bedside. He gave them a bundle of sticks and asked them to break it. Each son tried his best, using all his strength, but none could break the bundle. Then, the old farmer untied the bundle and gave them one stick each. He asked them to break the individual sticks. This time, they broke the sticks easily. The farmer then said, "My sons, remember this lesson. If you stay united like the bundle, no one can harm you. But if you quarrel and separate, you will be easily broken like single sticks." The sons understood their father's wisdom and promised to live in unity.
        </p>

        <h3 style={commonStyles.heading3}>বাংলা অনুবাদ (Bengali Translation):</h3>
        <p style={commonStyles.paragraph}>
          {/* The Bengali translation for the second story was incomplete in the input.
             You can add the full translation here when available.
             For now, I'll put a placeholder or the partial text. */}
          <em>(Bengali translation for the second story to be added here if available. The provided text ended abruptly.)</em>
        </p>

        {/* If Story 2 has vocabulary, you can add it here similar to Story 1 */}
        {/* 
        <h3 style={commonStyles.heading3}>Vocabulary Table:</h3>
        <table style={commonStyles.table}>
          <thead>
            <tr>
              <th style={commonStyles.th}>English Word</th>
              <th style={commonStyles.th}>বাংলা অর্থ (Bengali Meaning)</th>
              <th style={commonStyles.th}>Pronunciation of English Word in Bangla</th>
            </tr>
          </thead>
          <tbody>
            {story2Vocab && story2Vocab.map((item, index) => (
              <tr key={index}>
                <td style={commonStyles.td}>{item.eng}</td>
                <td style={commonStyles.td}>{item.ben}</td>
                <td style={commonStyles.td}>{item.pron}</td>
              </tr>
            ))}
            {!story2Vocab && (
                <tr>
                    <td colSpan="3" style={{...commonStyles.td, textAlign: 'center'}}>Vocabulary not available.</td>
                </tr>
            )}
          </tbody>
        </table>
        */}
      </div>
    </div>
  );
}

export default CompletingStoriesPage;