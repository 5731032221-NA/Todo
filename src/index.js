import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<p>Hello world!!!</p>, document.getElementById('root'));

ReactDOM.render(<p>Hi</p>, document.getElementById('root'));

const List = props => (
    
  <ol>
    {
      props.list.map((item, index) => <li onClick={() => { props.delete(index);}}key={index}>{item}  </li>)
    }
  </ol>
);

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  list: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      //ReactDOM.render(this.state.value, document.getElementById('a'));
   
    event.preventDefault();
    this.setState({

      value: '',

      list: [...this.state.list, this.state.value]

    });
  }

  handleDelete(event){
     this.setState({
        list: this.state.list.filter((list, index) => {
          return index !== event;
        })
      });
  }

  render() {
      const divStyle = {
        color: 'blue',
        };
    return (
    
     <div style={divStyle}>   
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
      <List list={this.state.list} delete={this.handleDelete} />
     </div>
    );
  }
}



ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
