import React, { useEffect, useState } from 'react';
import { Modal, List, Button } from 'antd';
import ValentineComponent from './ValentineComponent';
import TypingEffect from './TypingEffect';

const ValentineComponent2 = () => {
  const [isFirstModalVisible, setFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);
  const [isThirdModalVisible, setThirdModalVisible] = useState(false);

  const firstReasons = [
    "You make me laugh.",
    "You understand me like no one else.",
    "I love your passion for life.",
    "Your kindness inspires me.",
    "You bring out the best in me."
  ];

  const secondReasons = [
    "You support my dreams.",
    "Your smile lights up my day.",
    "I admire your intelligence.",
    "You have a great sense of adventure.",
    "You are my best friend."
  ];

  useEffect(() => {
    const canvas = document.getElementById("cmatrix");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = Array(256).join(1).split('');
    let fontSize = 16;

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = fontSize + "px monospace";

      letters.map((y_pos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x_pos = index * fontSize;
        ctx.fillText(text, x_pos, y_pos);

        letters[index] = (y_pos > canvas.height + Math.random() * 1e4) ? 0 : y_pos + fontSize;
      });
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const intervalId = setInterval(drawMatrix, 50);

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const showFirstModal = () => {
    setFirstModalVisible(true);
  };

  const showSecondModal = () => {
    setSecondModalVisible(true);
  };

  const showThirdModal = () => {
    setThirdModalVisible(true);
  };

  const handleFirstModalOk = () => {
    setFirstModalVisible(false);
  };

  const handleSecondModalOk = () => {
    setSecondModalVisible(false);
  };

  const handleThirdModalOk = () => {
    setThirdModalVisible(false);
  };

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Courier New', Courier, monospace",
      color: '#00ff00',
      backgroundColor: 'black',
      overflowX: 'hidden',
    },
    container: {
      textAlign: 'center',
      padding: '20px',
      zIndex: 10,
      position: 'relative',
    },
    h1: {
      fontSize: '2.5em',
      marginBottom: '20px',
      textShadow: '0 0 5px #00ff00',
    },
    content: {
      margin: '0 auto',
      width: '90%',
      maxWidth: '800px',
    },
    h2: {
      fontSize: '2em',
      marginBottom: '10px',
      textShadow: '0 0 5px #00ff00',
    },
    p: {
      fontSize: '1.1em',
      lineHeight: 1.5,
      marginBottom: '20px',
      textShadow: '0 0 3px #00ff00',
    },
    button: {
      display: 'inline-block',
      margin: '10px 0',
      padding: '10px 20px',
      fontSize: '1.2em',
      color: 'black',
      backgroundColor: '#00ff00',
      textDecoration: 'none',
      borderRadius: '5px',
      boxShadow: '0 0 5px #00ff00',
    },
    buttonHover: {
      backgroundColor: 'black',
      color: '#00ff00',
      border: '1px solid #00ff00',
    },
    cmatrix: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    scrollBtn: {
      display: 'none', // Hidden by default
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 99,
      border: 'none',
      outline: 'none',
      backgroundColor: '#00ff00',
      color: 'black',
      padding: '15px',
      borderRadius: '10px',
      fontSize: '18px',
      cursor: 'pointer',
      boxShadow: '0 0 10px #00ff00',
      transition: 'all 0.3s ease-in-out',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Learn Ethical Hacking With Nafiul</h1>
        <div style={styles.content}>
          <section id="introduction">
            <h2 style={styles.h2}>What is Hacking?</h2>
            <p style={styles.p}>
              Hacking is the process of finding vulnerabilities in systems, networks, or devices and exploiting them for unauthorized access. Ethical hacking is done with permission to secure the systems.
            </p>
          </section>

          <section id="social-engineering">
            <h2 style={styles.h2}>What is Social Engineering?</h2>
            <p style={styles.p}>
              Social engineering is a tactic used by hackers to manipulate individuals into divulging confidential information. It often involves deception and psychological manipulation.
            </p>
          </section>

          <section id="cyber-bullying">
            <h2 style={styles.h2}>What is Cyberbullying?</h2>
            <p style={styles.p}>
              Cyberbullying refers to bullying that takes place over digital devices like smartphones and computers. It includes harassing or intimidating someone online through social media, messages, or other digital communication.
            </p>
          </section>

          <section id="phishing">
            <h2 style={styles.h2}>What are Phishing Links?</h2>
            <p style={styles.p}>
              Phishing is a method where attackers trick users into clicking malicious links that steal sensitive information like passwords, credit card details, or other personal data.
            </p>
          </section>

          <div className="youtube-btn">
            <button style={styles.button} onClick={showFirstModal}>
              5 reasons why I love you!!
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button onClick={scrollToTop} id="scrollBtn" title="Go to top" style={styles.scrollBtn}>
        Top
      </button>

      {/* Cmatrix canvas */}
      <canvas id="cmatrix" style={styles.cmatrix}></canvas>

      {/* First Modal */}
      <Modal
        title="5 Reasons Why I Love You"
        open={isFirstModalVisible}
        onOk={handleFirstModalOk}
        onCancel={handleFirstModalOk}
        footer={[]}
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          width: "100%",
          padding: 0,
        }}
      >
        <List
          dataSource={firstReasons}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <Button onClick={showSecondModal} style={{ marginTop: '10px' }}>
          5 More Reasons Why I Love You
        </Button>
      </Modal>

      {/* Second Modal */}
      <Modal
        title="5 More Reasons Why I Love You"
        open={isSecondModalVisible}
        onOk={handleSecondModalOk}
        onCancel={handleSecondModalOk}
        footer={[]}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          width: "100%",
          padding: 0,
        }}
      >
        <List
          dataSource={secondReasons}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <Button onClick={showThirdModal} style={{ marginTop: '10px' }}>
          5 More Reasons Why I Love You
        </Button>
      </Modal>

      {/* Third Modal */}
      <Modal
        title="Endless Reasons"
        open={isThirdModalVisible}
        onOk={handleThirdModalOk}
        onCancel={handleThirdModalOk}
        footer={[]}
      >
        The list is endless, so that's it!
        <TypingEffect text="Good morning" typingSpeed={200} />
      </Modal>
    </div>
  );
};

// Scroll button functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default ValentineComponent2;
