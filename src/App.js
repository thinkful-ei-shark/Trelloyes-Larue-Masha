import React, { Component } from 'react';
import STORE from './STORE';

import List from './List';
import './App.css';

class App extends Component {
  state = STORE;

  handleDeleteCard = (cardId) =>{
    let {[cardId]: _, ...theRest} = this.state.allCards;
    const lists = this.state.lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    });
    this.setState({allCards: theRest, lists: lists});
  }

  handleAddRandomCard = (listId) => {
    console.log('handleaddrandomcard', listId);
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              handleAddRandomCard={this.handleAddRandomCard}
              handleDeleteCard={this.handleDeleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
