  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(true);
  const updateData = (searchParams) => {
    setData(searchParams);
  };

  return (
    <div>
      <Headed />
      <Body />
      <Footer callback={updateData} />
      <p>Name :{"name" in data ? data["name"] : "No data to display"}</p>
      <p>Type :{"type" in data ? data["type"] : "No data to display"}</p>
      <p>Brand :{"brand" in data ? data["brand"] : "No data to display"}</p>
      {toggle ? (
        <div className="hearts">
          <h1>Click the Heart to see Broken Hearts</h1>
          <img src={google} className="logo" onClick={() => setToggle(false)} />
        </div>
      ) : (
        <div className="hearts">
          <h1>Broken Hearts</h1>
          <img src={adn} className="logo" onClick={() => setToggle(true)} />

          <h2>
            <div className="hearts_lists">
              <ol>
                <li>zelalem</li>
                <li>beza</li>
                <li>yonas</li>
              </ol>
            </div>
          </h2>
        </div>
      )}
    </div>
  );
}

function Headed() {
  return (
    <div className="header">
      <div>
        <img src={adn} alt="logo" className="logo" />
      </div>
      <div className="links">
        <p>
          <a href="#">Home</a>
        </p>
        <p>
          <a href="#">SVGS</a>
        </p>
        <p>
          <a href="#">Fonts</a>
        </p>
      </div>
      <div className="navbar_btns">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div></div>
    </div>
  );
}
const Body = () => {
  const [title, setTitle] = useState("default");

  const value = 30;

  const setTitleFuck = () => {
    setTitle("state title");
  };

  return (
    <div className="body">
      <h1>Title : {title}</h1>
      <button onClick={setTitleFuck}>update Title</button>
    </div>
  );
};

const Footer = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState(0);
  const [brand, setBrand] = useState("");

  const setResults = () => {
    props.callback({
      name: name,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="footer">
      <h2>Search for an Item</h2>
      <form>
        <label for="name">
          {" "}
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label for="type">
          {" "}
          Type:
          <input
            type="number"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>{" "}
        Brand
        <label for="brand">
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
      </form>

      <button type="button" onClick={setResults}>
        Results
      </button>
    </div>
  );
};
 <ul>
 {
   numbers1.map(
   function (number) {
     return <li>{number.name}</li>
   }
   )
 }
 </ul>
 <Logo height="18px" width="18px" fill="white"/>
  </div>