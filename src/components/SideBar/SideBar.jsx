import Post from "../AddPost/Post";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar position-fixed   vh-100 border-end border-primary ">
      <ul className="text-uppercase">
        <li>
          <a href="">Discover</a>
        </li>
        <li>
          <a href="">Ongoing Challenges</a>
        </li>
        <li>
          <a href="">Finished Challenges</a>
        </li>
        <li>
          <a href="">Liked Challenges</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
