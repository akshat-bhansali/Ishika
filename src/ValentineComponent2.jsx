import React, { useEffect, useState } from 'react';
import { Modal, List, Button } from 'antd';
import ValentineComponent from './ValentineComponent';
import TypingEffect from './TypingEffect';

const ValentineComponent2 = () => {
  const [isFirstModalVisible, setFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);
  const [isThirdModalVisible, setThirdModalVisible] = useState(false);

  const firstReasons = [
    "I admire how calm you remain when faced with difficult challenges. Your ability to think clearly and take thoughtful steps forward inspires me.",
    "Your intelligence and depth of knowledge never cease to amaze me. I love how smart you are!",
    "The way you look at me with your beautiful brown eyes brings me so much joy. When I gaze into your eyes, all the noise fades away, and I feel a deep sense of calm.",
    "Your unwavering support gives me the confidence to take risks and explore new ideas. Your openness to any suggestion is truly inspiring.",
    "I can't help but smile when you get a little dramatic; it's just so endearing.",
    "You make me feel incredibly special. You show your true self with me, and that authenticity, so different from how you behave around others, means the world to me."
  ];

  const secondReasons = [
    "Your inspiring milestones of success.",
    "Your inspiring milestones of success.",
    "Your laughter that brightens every moment.",
    "The Love We Share",
    "You Blossoming into your true self.",
    "Happiness radiates from your presence.",
    "The Future We Share",
    "Today is All About You-Celebrating you, my heart's delight."
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
        <h1 style={styles.h1}>A promise of forever</h1>
        <div style={styles.content}>
          <section id="introduction">
            <p style={styles.p}>
            In this moment, we face a trial,  
Yet I believe, we'll emerge with a smile.  
Words fall short of what you mean to me,  
My best friend, my heart, my safe haven, truly.  

            </p>
          </section>

          <section id="social-engineering">
            <p style={styles.p}>
            I share my thoughts, both bright and gray,  
No filter needed, come what may.  
In every joy, in every tear,  
Your presence turns my doubts to cheer.  
</p>
          </section>

          <section id="cyber-bullying">
            <p style={styles.p}>
            You've transformed my world, so vast and wide,  
An inspiration, a light by my side.  
As you step forth into a new dawn,  
I have faith you'll find you calling and carry on.  
</p>
          </section>

          <section id="phishing">
            <p style={styles.p}>
            Your support lifts me, your faith shines bright,  
In your embrace, everything feels right.  
With dreams entwined, our paths align,  
This bond we share, so pure, divine.  
</p>
          </section>
          <section id="phishing">
            <p style={styles.p}>
            The future awaits, with wonders in store,  
No matter what it holds, I promise to be there, evermore.  
Together we'll cherish what lies in store.  
In every heartbeat, in all that we do,  
I promise you this—I'll always love you. 
</p>
          </section>

          <div className="youtube-btn">
            <button style={styles.button} onClick={showFirstModal}>
            Why You're My Favorite Person!!
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
        title="Why You're My Favorite Person"
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
        Celebrating you today!!
        </Button>
      </Modal>

      {/* Second Modal */}
      <Modal
        title="Celebrating you today!!"
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
        My favourite picture of us!!!
        </Button>
      </Modal>

      {/* Third Modal */}
      <Modal
        title="My favourite picture of us!!!"
        open={isThirdModalVisible}
        onOk={handleThirdModalOk}
        onCancel={handleThirdModalOk}
        footer={[]}
      >
        <img
            id="new-image"
            src="./3-popup.jpg"
            alt="celebration gif"
          />
      </Modal>
    </div>
  );
};

// Scroll button functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default ValentineComponent2;
