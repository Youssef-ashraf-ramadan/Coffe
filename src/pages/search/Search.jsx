import { useEffect, useState } from "react";
import "./search.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { TextHeader } from "../../staticComponent/headerText";
import handleSubmit from "../../data/handleApi";
import { handleApi } from "../../data/handleApi";
import { Link } from "react-router-dom";

const Search = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <SearchBody />
    </>
  );
};
function SearchBody() {
  const [searchCategorie, setSearchCategorie] = useState("");
  const [CoffesData, setCoffeData] = useState([]);
  const [notFound, setnotFound] = useState("");
  return (
    <section className="searchNow">
      <div className="container">
        <TextHeader>Search</TextHeader>
        <FindNow
          searchCategorie={searchCategorie}
          setSearchCategorie={setSearchCategorie}
          setCoffeData={setCoffeData}
          notFound={notFound}
          setnotFound={setnotFound}
        />
        <Item
          searchCategorie={searchCategorie}
          CoffesData={CoffesData}
          notFound={notFound}
        />
      </div>
    </section>
  );
}

function FindNow({
  searchCategorie,
  setSearchCategorie,
  setCoffeData,
  setnotFound,
}) {
  const [searchIn, setSearchIn] = useState("");

  async function handleEvent(e) {
    e.preventDefault();
    if (!searchIn) return;
    setSearchCategorie("");
    const data = await handleSubmit(
      searchIn,
      setSearchIn,
      setCoffeData,
      setnotFound
    );

    console.log(data);
  }
  return (
    <form onSubmit={handleEvent}>
      <div className="form-group">
        <SearchInput searchIn={searchIn} setSearchIn={setSearchIn} />
        <button type="submit">Submit</button>
        <Categories
          searchCategorie={searchCategorie}
          onChange={setSearchCategorie}
          setCoffeData={setCoffeData}
          setSearchIn={setSearchIn}
        />
      </div>
    </form>
  );
}
function SearchInput({ setSearchIn, searchIn }) {
  return (
    <input
      type="text"
      name="cafeName"
      onChange={(e) => setSearchIn(e.target.value)}
      value={searchIn}
      placeholder="Cafe...."
    ></input>
  );
}
function Categories({ searchCategorie, onChange, setCoffeData, setSearchIn }) {
  async function handleCategories(value) {
    onChange(value);
    setCoffeData([]);
    setSearchIn("");
    const data = await handleApi("https://coffee-backend-phi.vercel.app/cafes");
    setCoffeData(() => data);
  }
  return (
    <select
      value={searchCategorie}
      onChange={(e) => handleCategories(e.target.value)}
    >
      <option>Select</option>
      <option value="cafe">Cafe </option>
      <option value="CoffeAndPlaystation">Cafe & Playstation</option>
      <option value="CoffeAndFood">Cafe & Food</option>
      <option value="CoffeAndStudy">Cafe & Study</option>
      <option value="ConferenceRoom">Conference Room</option>
    </select>
  );
}
function Item({ searchCategorie, CoffesData, notFound }) {
  if (CoffesData.length > 0 && searchCategorie === "") {
    return (
      <ItemList>
        {CoffesData.map((data) => {
          return <ItemDetails data={data} key={data.name} />;
        })}
      </ItemList>
    );
  }

  if (notFound) return <ItemList>{notFound}</ItemList>;
  if (searchCategorie === "cafe") {
    return (
      <ItemList>
        {CoffesData.filter((data) => data.category === searchCategorie).map(
          (data) => {
            return <ItemDetails data={data} key={data.name} />;
          }
        )}
      </ItemList>
    );
  }

  if (searchCategorie === "CoffeAndPlaystation") {
    return (
      <ItemList>
        {CoffesData.filter((data) => data.category === searchCategorie).map(
          (data) => {
            return <ItemDetails data={data} key={data.name} />;
          }
        )}
      </ItemList>
    );
  }
  if (searchCategorie === "CoffeAndFood") {
    return (
      <ItemList>
        {CoffesData.filter((data) => data.category === searchCategorie).map(
          (data) => {
            return <ItemDetails data={data} key={data.name} />;
          }
        )}
      </ItemList>
    );
  }
  if (searchCategorie === "CoffeAndStudy") {
    return (
      <ItemList>
        {CoffesData.filter((data) => data.category === searchCategorie).map(
          (data) => {
            return <ItemDetails data={data} key={data.name} />;
          }
        )}
      </ItemList>
    );
  }
  if (searchCategorie === "ConferenceRoom") {
    return (
      <ItemList>
        {CoffesData.filter((data) => data.category === searchCategorie).map(
          (data) => {
            return <ItemDetails data={data} key={data.name} />;
          }
        )}
      </ItemList>
    );
  }
}
export function ItemDetails({ data }) {
  return (
    <li className="search-box">
      <div className="img-box">
        <img src={data.img.one} alt={data.name} />
      </div>
      <div className="details">
        <span>{data.name}</span>
        <Star />
      </div>
      <Link to={`/cafes/${data.id}`}>See More</Link>
    </li>
  );
}
export function Star() {
  return (
    <ul>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          id="star"
        >
          <path
            fill="#ff7900"
            d="M10.975 18.847a2 2 0 0 1 2.049.002l3.34 1.997c.8.478 1.778-.229 1.568-1.123l-.877-3.72a2 2 0 0 1 .646-1.978l2.934-2.513c.705-.603.326-1.746-.6-1.819l-3.882-.325a2 2 0 0 1-1.671-1.205L12.968 4.63c-.358-.841-1.578-.841-1.936 0L9.52 8.154a2 2 0 0 1-1.67 1.203l-3.885.326c-.925.073-1.304 1.216-.6 1.819L6.3 14.015a2 2 0 0 1 .645 1.978l-.877 3.72c-.21.894.768 1.6 1.567 1.122l3.34-1.988Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          id="star"
        >
          <path
            fill="#ff7900"
            d="M10.975 18.847a2 2 0 0 1 2.049.002l3.34 1.997c.8.478 1.778-.229 1.568-1.123l-.877-3.72a2 2 0 0 1 .646-1.978l2.934-2.513c.705-.603.326-1.746-.6-1.819l-3.882-.325a2 2 0 0 1-1.671-1.205L12.968 4.63c-.358-.841-1.578-.841-1.936 0L9.52 8.154a2 2 0 0 1-1.67 1.203l-3.885.326c-.925.073-1.304 1.216-.6 1.819L6.3 14.015a2 2 0 0 1 .645 1.978l-.877 3.72c-.21.894.768 1.6 1.567 1.122l3.34-1.988Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          id="star"
        >
          <path
            fill="#ff7900"
            d="M10.975 18.847a2 2 0 0 1 2.049.002l3.34 1.997c.8.478 1.778-.229 1.568-1.123l-.877-3.72a2 2 0 0 1 .646-1.978l2.934-2.513c.705-.603.326-1.746-.6-1.819l-3.882-.325a2 2 0 0 1-1.671-1.205L12.968 4.63c-.358-.841-1.578-.841-1.936 0L9.52 8.154a2 2 0 0 1-1.67 1.203l-3.885.326c-.925.073-1.304 1.216-.6 1.819L6.3 14.015a2 2 0 0 1 .645 1.978l-.877 3.72c-.21.894.768 1.6 1.567 1.122l3.34-1.988Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          id="star"
        >
          <path
            fill="#ff7900"
            d="M10.975 18.847a2 2 0 0 1 2.049.002l3.34 1.997c.8.478 1.778-.229 1.568-1.123l-.877-3.72a2 2 0 0 1 .646-1.978l2.934-2.513c.705-.603.326-1.746-.6-1.819l-3.882-.325a2 2 0 0 1-1.671-1.205L12.968 4.63c-.358-.841-1.578-.841-1.936 0L9.52 8.154a2 2 0 0 1-1.67 1.203l-3.885.326c-.925.073-1.304 1.216-.6 1.819L6.3 14.015a2 2 0 0 1 .645 1.978l-.877 3.72c-.21.894.768 1.6 1.567 1.122l3.34-1.988Z"
          ></path>
        </svg>
      </li>
    </ul>
  );
}

export function ItemList({ children }) {
  return (
    <div className="container">
      <ul className="itemList" data-aos="fade-down" data-aos-duration="1500">
        {children}
      </ul>
    </div>
  );
}
export default Search;
