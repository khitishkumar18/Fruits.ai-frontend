import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editId, setEditId] = useState(null);
  const [editQuestion, setEditQuestion] = useState('');
  const [editAnswer, setEditAnswer] = useState('');

  const api_url = "http://localhost:8000/api";

  // Fetch all FAQs using Promises
  useEffect(() => {
    axios.get(`${api_url}/faqs`)
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => {
        console.error('Error fetching FAQs:', error);
      });
  }, []);

  // Add new FAQ using Promises
  const addFaq = () => {
    const newFaq = { question: newQuestion, answer: newAnswer };

    axios.post(`${api_url}/faqs`, newFaq)
      .then(response => {
        setFaqs([...faqs, response.data]);
        setNewQuestion('');
        setNewAnswer('');
      })
      .catch(error => {
        console.error('Error adding FAQ:', error);
      });
  };

  // Update FAQ using Promises
  const updateFaq = (id) => {
    const updatedFaq = { question: editQuestion, answer: editAnswer };

    axios.put(`${api_url}/faqs/${id}`, updatedFaq)
      .then(response => {
        const updatedFaqs = faqs.map(faq => faq._id === id ? response.data : faq);
        setFaqs(updatedFaqs);
        setEditId(null);
        setEditQuestion('');
        setEditAnswer('');
      })
      .catch(error => {
        console.error('Error updating FAQ:', error);
      });
  };

  // Delete FAQ using Promises
  const deleteFaq = (id) => {
    axios.delete(`${api_url}/faqs/${id}`)
      .then(() => {
        setFaqs(faqs.filter(faq => faq._id !== id));
      })
      .catch(error => {
        console.error('Error deleting FAQ:', error);
      });
  };

  return (
    <div style={styles.faqContainer}>
      <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
      <div style={styles.faqForm}>
        <input
          type="text"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          style={styles.faqInput}
        />
        <input
          type="text"
          placeholder="Enter answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          style={styles.faqInput}
        />
        <button
          onClick={addFaq}
          style={{ ...styles.faqButton, ...styles.faqButtonAdd }}
        >
          Add FAQ
        </button>
      </div>
      <div style={styles.faqList}>
        {faqs.map((faq) => (
          <div key={faq._id} style={styles.faqItem}>
            {editId === faq._id ? (
              <div>
                <input
                  type="text"
                  value={editQuestion}
                  onChange={(e) => setEditQuestion(e.target.value)}
                  style={styles.faqInput}
                />
                <input
                  type="text"
                  value={editAnswer}
                  onChange={(e) => setEditAnswer(e.target.value)}
                  style={styles.faqInput}
                />
                <button
                  onClick={() => updateFaq(faq._id)}
                  style={styles.faqButton}
                >
                  Update
                </button>
                <button
                  onClick={() => setEditId(null)}
                  style={styles.faqButton}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div style={styles.faqContent}>
                <div style={styles.faqImage}>
                  <img src="https://stratushop.co/welcome/wp-content/uploads/2019/08/general_faq.png" alt="FAQ" style={styles.faqImageImg} /> {/* Add the appropriate image source */}
                </div>
                <div style={styles.faqContentText}>
                  <h3 style={styles.faqQuestion}>{faq.question}</h3>
                  <p style={styles.faqAnswer}>{faq.answer}</p>
                </div>
                <button
                  onClick={() => {
                    setEditId(faq._id);
                    setEditQuestion(faq.question);
                    setEditAnswer(faq.answer);
                  }}
                  style={{ ...styles.faqButton, ...styles.faqButtonEdit }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteFaq(faq._id)}
                  style={{ ...styles.faqButton, ...styles.faqButtonDelete }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles as a JS object
const styles = {
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(145deg, #e5f3ff, #e1d6ff, #c1f0ce)',
    height:'100vh',
  },
  faqTitle: {
    fontSize: '2rem',
    color: 'white',
    marginBottom: '20px'
  },
  faqForm: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  faqInput: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  faqButton: {
    padding: '10px 20px',
    backgroundColor: '#ff5722',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  faqButtonAdd: {
    backgroundColor: '#ff5722'
  },
  faqButtonEdit: {
    backgroundColor: '#2196f3'
  },
  faqButtonDelete: {
    backgroundColor: '#f44336'
  },
  faqList: {
    width: '100%',
    margin:'20px'
  },
  faqItem: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s'
  },
  faqItemHover: {
    transform: 'translateY(-5px)'
  },
  faqContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  faqImage: {
    width: '50px',
    height: '50px'
  },
  faqImageImg: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%'
  },
  faqContentText: {
    flexGrow: 1
  },
  faqQuestion: {
    color: '#d32f2f',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },
  faqAnswer: {
    color: '#0d47a1',
    fontSize: '1rem'
  }
};

export default FaqPage;
