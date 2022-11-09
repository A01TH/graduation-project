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
    <div className="section-padding bg-dark text-white">
      <div className="container">
        <h1 className="text-center mb-5">Choose a category to display</h1>
        <div className="row mb-5">
          <ButtonGroup aria-label="Basic example">
            <Button
              name="all"
              variant="secondary rounded-5 me-2 bg-color border-0"
              onClick={(e) => handleClick(e)}
            >
              All
            </Button>
            <Button
              name="frontend"
              variant="secondary rounded-5 me-2 bg-color border-0"
              onClick={(e) => handleClick(e)}
            >
              Frontend
            </Button>
            <Button
              name="backend"
              variant="secondary rounded-5 me-2 bg-color border-0"
              onClick={(e) => handleClick(e)}
            >
              Backend
            </Button>
            <Button
              name="ui/ux"
              variant="secondary rounded-5 bg-color border-0"
              onClick={(e) => handleClick(e)}
            >
              UI/UX
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <div className="row ay-7aga align-items-lg-stretch">
            {renderArr.map((ch, i) => {
              return (
                <div className="col-4">
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
