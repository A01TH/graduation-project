import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./category.scss";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { FirebaseContext } from "./../../context/FirebaseContext";
import { useContext, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Category() {
  const { challengeCollection } = useContext(FirebaseContext);
  const [challenges] = useCollectionData(challengeCollection);

  const [title, setTitle] = useState("Choose a category to display");
  console.log(challenges);
  const [renderArr, setRenderArr] = useState([]);

  const handleClick = (e) => {
    if (e.target.name === "all") {
      setRenderArr(challenges);
      return;
    }
    const filteredCat = challenges.filter(
      (challenge) => challenge.category.value === e.target.name
    );
    setRenderArr(filteredCat);
  };

  return (
    <div className="section-padding   text-white  ">
      <div className="container">
        <div
          className="wv-100 p-4 rounded-4"
          style={
            title === "Frontend"
              ? { "background-color": "blue" }
              : title === "Backend"
              ? { "background-color": "white" }
              : title === "UI/UX"
              ? { "background-color": "yellow" }
              : { "background-color": "orange" }
          }
        >
          <h1 className="text-center  bg mb-5">{title}</h1>
          <div className="row categroy mb-5 ">
            <ButtonGroup aria-label="Basic example row ">
              <Button
                className="rounded-1 btn-1 btn col-3"
                name="all"
                variant="secondary me-2 bg-color border-0"
                onClick={(e) => {
                  handleClick(e);
                  setTitle("All");
                }}
              >
                All
              </Button>
              <Button
                name="frontend"
                className="rounded-1 btn-1 btn col-3"
                variant="secondary me-2 bg-color border-0"
                onClick={(e) => {
                  handleClick(e);
                  setTitle("Frontend");
                }}
              >
                Frontend
              </Button>
              <Button
                name="backend"
                className="rounded-1 col-3"
                variant="secondary   me-2 bg-color "
                onClick={(e) => {
                  handleClick(e);
                  setTitle("Backend");
                }}
              >
                Backend
              </Button>
              <Button
                name="ui/ux"
                className="rounded-1 col-3"
                variant="secondary bg-color"
                onClick={(e) => {
                  handleClick(e);
                  setTitle("UI/UX");
                }}
              >
                UI/UX
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div>
          <div className="row ay-7aga align-items-lg-stretch">
            {renderArr.map((ch, i) => {
              return (
                <div className="col-md-6 col-sm-12 col-lg-4">
                  <ChallengeCard post={ch} key={ch.cid} className="h-100" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
