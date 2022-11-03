import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./category.scss";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";

function Category() {
  return (
    <div className="section-padding bg-dark text-white">
      <div className="container">
        <h1 className="text-center mb-5">ART</h1>
        <div className="row mb-5">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary rounded-5 me-2 bg-color border-0">
              All
            </Button>
            <Button variant="secondary rounded-5 me-2 bg-color border-0">
              Upcoming
            </Button>
            <Button variant="secondary rounded-5 me-2 bg-color border-0">
              Live
            </Button>
            <Button variant="secondary rounded-5 bg-color border-0">
              Done
            </Button>
          </ButtonGroup>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 mb-3">
            <ChallengeCard />
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <ChallengeCard />
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <ChallengeCard />
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <ChallengeCard />
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <ChallengeCard />
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <ChallengeCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
