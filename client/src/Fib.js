import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    error: ''
  };

  componentDidMount() {
    this.fetchIndexes();
    this.fetchValues();
  }

  componentDidUpdate() {
    // this.fetchValues();
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/values', {
        index: this.state.index,
      });

      this.setState({ index: '', error: '' });

      this.fetchIndexes();
      this.fetchValues();
    } catch (err) {
      this.setState({ error: err.response.data });
    }
  };

  renderSeenIndexes() {
    if (this.state.seenIndexes.length === 0) {
      return "Nie znaleziono";
    }

    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let el in this.state.seenIndexes) {
      const num = this.state.seenIndexes[el].number;
      const val = this.state.values[num];

      entries.push(
        <div key={el}>
          Fib({num}) = {val}
        </div>
      );
    }

    if (entries.length === 0) {
      return "Nie znaleziono";
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Wprowadź liczbę z zakresu 0-20:</label>
          <br/>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Oblicz</button>

          <p style={{color: 'red'}}>{this.state.error}</p>
        </form>

        <h3>Historia (10 ostatnich):</h3>
        {this.renderSeenIndexes()}

        <h3>Obliczenia (10 ostatnich):</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
