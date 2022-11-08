import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./top-challenger.scss";

function TopChallengers() {
  const [users, setUsers] = useState([]);
  let rank = 0;
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((usrs) => {
        usrs.sort((a, b) => b.points - a.points);
        setUsers(usrs);
      });
  }, []);
  return (
    <div className="page-height bg-dark top-challenge">
      <h1 className="text-center text-white fs-6 mb-5">
        <span className="fw-bold h1"> TOP</span> <br /> CHALLENGERS
      </h1>
      <div className="px-4 pt-4 rounded-2 w-75 mx-auto bg-white ">
        <div className="table-responsive overflow-scroll vh-50 scroll">
          <Table hover>
            <thead className="text-center">
              <tr className=" p-2">
                <th className="p-2">Rank</th>
                <th className="p-2 ">Challenger</th>
                {/* <th className="p-2">
                  {" "}
                  <span className="bg-success p-2 rounded-4 text-white">
                    DONE
                  </span>{" "}
                </th>
                <th className="p-2">
                  {" "}
                  <span className="bg-primary p-2 rounded-4 text-white">
                    CURRENT
                  </span>{" "}
                </th>
                <th className="p-2">
                  {" "}
                  <span className="bg-danger p-2 rounded-4 text-white">
                    FAILED
                  </span>{" "}
                </th> */}
                <th className="p-2">
                  {" "}
                  <span className="bg-dark p-2 rounded-4 text-white">
                    BADGES
                  </span>{" "}
                </th>
                <th className="p-2">POINTS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usr) => {
                return (
                  <tr key={usr.id} className="text-center fw-bold p-2">
                    <td className="align-middle">{++rank}</td>
                    <td className="text-start align-middle w-25">
                      <div className="d-flex flex-column flex-md-row align-items-md-center">
                        <div className="me-md-2 img-wrapper w-25">
                          <img
                            src={usr.img}
                            alt={usr.name}
                            className=" rounded-circle w-100"
                          />
                        </div>{" "}
                        <div>{usr.name}</div>
                      </div>
                    </td>
                    {/* <td className="text-success">{usr.done}</td>
                    <td className="text-primary">{usr.current}</td>
                    <td className="text-danger">{usr.failed}</td> */}
                    <td className="text-dark align-middle">{usr.badges}</td>
                    <td className="text-warning align-middle">{usr.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default TopChallengers;
