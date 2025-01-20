import chefIcon from "/src/imgs/chefIcon.png";

export default function Header() {
  return (
    <header>
      <nav>
        <span className="headerItems">
          <img className="chefIcon" src={chefIcon} alt="Chef icon" />
          <span>
            <h1>Your recipes</h1>
          </span>
        </span>
      </nav>
    </header>
  );
}
