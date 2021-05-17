import { Component, useState } from 'react';
import axios from 'axios';
import TableRow from './components/TableRow';

export default class App extends Component<{}, any> {
  constructor(props: Object) {
    super(props);
    this.state = { questionList: [] };
  }
  componentDidMount() {
    const apiUrl = 'https://api.stackexchange.com/search/advanced?site=stackoverflow.com&q=firebase';
    axios.get(apiUrl).then(response => {
      console.log(response.data.items);
      this.setState({ questionList: response.data.items })
    }).catch(function (error) {
      console.log(error);
    });
  }

  tabRow() {
    return this.state.questionList.map(function (object: Object) {
      return <TableRow obj={object} />
    });
  }

  render() {
    return (
      <div>
        <h3>Stack Overflow Question List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Display Name</th>
              <th>Title</th>
              <th>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}

