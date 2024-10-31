import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
      fullName: 'Yacine Diop',
      bio: 'Développeuse passionnée et amoureuse de la technologie.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHIiv4eAIcMPysQ1bksW2wRHQx11ZdYgtyA&s=10',
      profession: 'Développeuse Frontend'
      },
      show: false,
      elapsedTime: 0 
    };
    this.timer = null; 
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div className="App">
      <h1>Bienvenue</h1>
      <button onClick={this.toggleShow} style={{ backgroundColor: 'red', color: 'white', border: '1px solid red', borderRadius: '5px' }}>
      {show ? 'Cacher le Profil' : 'Afficher le Profil'}
      </button>

      {show && (
      <div className="profile">
      <img src={imgSrc} alt={fullName} />
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p><strong>Profession :</strong> {profession}</p>
      </div>
      )}

      <p style={{ fontStyle: 'italic', color: 'red' }}>Temps écoulé : {elapsedTime} secondes</p>
      </div>
    );
      }
    }
    
    export default App;
