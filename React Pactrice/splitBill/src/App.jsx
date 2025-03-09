import { useState } from "react";

const initialFriends = [
  {
    id: crypto.randomUUID(),
    name: "Ayaan Mansuri",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    balance: -7,
  },
  {
    id: crypto.randomUUID(),
    name: "Het Mehta",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    balance: 20,
  },
  {
    id: crypto.randomUUID(),
    name: "Owais Khan",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [bill, setBill] = useState(null);
  const [myExpense, setMyExpense] = useState(null);
  const friendExpense = bill ? bill - myExpense : null;
  const [whoIsPayingBill, setWhoIsPayingBill] = useState("user");

  function handleAddFriend() {
    setAddFriend(() => {
      return !addFriend;
    });
  }

  function handleFriends(newFriend) {
    setFriends((friends) => {
      console.log(friends);
      return [...friends, newFriend];
    });
  }

  function handleSelectFriend(friend) {
    setSelectedFriend(friend);
  }

  function handleBill(event) {
    setBill(event.target.value);
  }

  function handleMyExpense(event) {
    setMyExpense(event.target.value);
  }

  function splitBill() {
    console.log(selectedFriend);
    if (whoIsPayingBill == "user") {
      selectedFriend.balance += friendExpense;
      console.log(friendExpense);
    } else {
      selectedFriend.balance -= friendExpense;
      console.log(friendExpense);
    }

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id ? { ...selectedFriend } : friend
      )
    );

    setBill(null);
    setMyExpense(null);
    setSelectedFriend(null);
    setWhoIsPayingBill("user");
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {addFriend && (
          <FormAddFriends
            handleFriends={handleFriends}
            friendsLength={friends.length}
            handleAddFriend={handleAddFriend}
          />
        )}
        <Button action={handleAddFriend}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleBill={handleBill}
          handleMyExpense={handleMyExpense}
          bill={bill}
          myExpense={myExpense}
          friendExpense={friendExpense}
          whoIsPayingBill={whoIsPayingBill}
          splitBill={splitBill}
          setWhoIsPayingBill={setWhoIsPayingBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, handleSelectFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friendDetails={friend}
          key={friend.id}
          handleSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

// function Friend({ friendDetails }) {
//   console.log(friendDetails);
//   return (
//     <li key={friendDetails.id}>
//       <img src={friendDetails.image} alt={friendDetails.name} />
//       <h2>{friendDetails.name}</h2>
//       <p>
//         {friendDetails.balance < 0 && (
//           <p className="red">
//             You owe {friendDetails.name} ₹{Math.abs(friendDetails.balance)}
//           </p>
//         )}
//         {friendDetails.balance > 0 && (
//           <p className="green">
//             You owe {friendDetails.name} ₹{Math.abs(friendDetails.balance)}
//           </p>
//         )}
//         {friendDetails.balance === 0 && (
//           <p>You and {friendDetails.name} are even.</p>
//         )}
//       </p>
//       <Button>Select</Button>
//     </li>
//   );
// }

function Friend({ friendDetails, handleSelectFriend, selectedFriend }) {
  console.log(friendDetails);
  return (
    <li key={friendDetails.id}>
      <img src={friendDetails.image} alt={friendDetails.name} />
      <h2>{friendDetails.name}</h2>
      <p>
        {friendDetails.balance < 0 && (
          <span className="red">
            You owe {friendDetails.name} ₹{Math.abs(friendDetails.balance)}
          </span>
        )}
        {friendDetails.balance > 0 && (
          <span className="green">
            You owe {friendDetails.name} ₹{Math.abs(friendDetails.balance)}
          </span>
        )}
        {friendDetails.balance === 0 && (
          <span>You and {friendDetails.name} are even.</span>
        )}
      </p>
      <Button
        action={() => {
          if (selectedFriend?.id === friendDetails.id) {
            handleSelectFriend(null);
          } else {
            handleSelectFriend(friendDetails);
          }
        }}
      >
        {friendDetails.id === selectedFriend?.id
          ? selectedFriend
            ? "Close"
            : "Select"
          : "Select"}
      </Button>
    </li>
  );
}

function Button({ children, action = null }) {
  return (
    <button className="button" onClick={action}>
      {children}
    </button>
  );
}

function FormAddFriends({ handleFriends, friendsLength, handleAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState(
    `https://randomuser.me/api/portraits/men/${friendsLength}.jpg`
  );

  function handleSubmit(event) {
    event.preventDefault();

    if (!friendName || !imageUrl) return;

    handleFriends({
      id: crypto.randomUUID(),
      name: friendName,
      image: imageUrl,
      balance: 0,
    });

    console.log({
      id: Math.random() * 100000,
      name: friendName,
      image: imageUrl,
      balance: 0,
    });

    setFriendName("");
    setImageUrl(
      `https://randomuser.me/api/portraits/men/${friendsLength + 1}.jpg`
    );
    handleAddFriend();
  }

  return (
    <form className="form-add-friend " onSubmit={handleSubmit}>
      <label>👫 Friend Name</label>
      <input
        type="text"
        value={friendName}
        onChange={(event) => setFriendName(event.target.value)}
      />

      <label>🌄 Image Url</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({
  selectedFriend,
  handleBill,
  handleMyExpense,
  bill,
  myExpense,
  friendExpense,
  whoIsPayingBill,
  splitBill,
  setWhoIsPayingBill,
}) {
  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();
        splitBill();
      }}
    >
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input type="text" value={bill} onChange={handleBill} />

      <label>💵 Your Expense</label>
      <input type="text" value={myExpense} onChange={handleMyExpense} />

      <label>👫 {selectedFriend.name}'s Expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPayingBill}
        onChange={(event) => setWhoIsPayingBill(event.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}

export default App;
