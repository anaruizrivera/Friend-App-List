import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import FriendCard from "./components/FriendCard"


class App extends Component {


  state= {
    friends
  }


  removeFriend= id =>{
    const friends = this.state.friends.filter(friend => friend.id !==id)
    this.setState({ friends })
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friends =>(
          <FriendCard
          removeFriend={this.removeFriend}
          id={friends.id}
          key={friends.id}
          name={friends.name}
          image={friends.image}
          occupation={friends.occupation}
          location={friends.location}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;