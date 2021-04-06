import React from "react";
import "./App.css";
import PropTypes from "prop-types";

function Movie({ title, ranking, picture }) {
  console.log(typeof ranking);
  return (
    <div>
      <h3>My Favorit Movie is {title}</h3>
      <p>Ranking : {ranking}</p>
      <img src={picture} alt={title} />
    </div>
  );
}

//const arr = ["a", "b", "c", "d"];
// arr.map(function (elm) {
//   console.log(elm);
//   return 0;
// });

// arr.map((elm) => {
//   console.log(elm);
//   return 0;
// });

const myMovies = [
  {
    id: 1,
    title: "shindler",
    ranking: 4,
    image:
      "https://lh3.googleusercontent.com/proxy/ZCNYb_GcnmIMNWBTH1l02Oc8EQ-E63-bvbmDrnYeB1E6PZrSUpnzCAtFq1YxLrHwnJ23ONuEBnNOTugdtmTmhfuvvbsTAvGtLsF1h2Q0baXjM6C8Mmww3yXedMbjROSnMkmD-CShEWCdRdltPqmAegNZ-PTKYGTJrB0ZDJmoRRoYS634DyzkSw1LCYHCRc19n64YJQxB0qYdZ57tjhUYT5cLPs-2n_CrQB2kznmpM1u1fR2rzlS3i2dFyEisKKvWC6PlKHIoqPcPQoEw-qJkZdayd6dMqX7EvBtLL-wHxk70ZplhVL5jjFVFmE7TNrm2gbCc7idm4TvwWWbOCvlUUIsrGR1n38MTfVodFyPFSFQYXF5f3y2OAtJjQZty2ft-7QY",
  },
  {
    id: 2,
    title: "반도",
    ranking: 3,
    image:
      "https://pgnqdrjultom1827145.cdn.ntruss.com/img/43/15/43159c194e6babcb315e026f0b260c282d16f105c1dddc8fb172f424f4fa7253_v1.jpg",
  },
  {
    id: 3,
    title: "신세계",
    ranking: 3.5,
    image: "https://t1.daumcdn.net/cfile/tistory/24204E3D51AD4CE236",
  },
  {
    id: 4,
    title: "해리포터",
    ranking: 5,
    image:
      "https://imgsnacker.hankyung.com/wp-content/uploads/2020/12/%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B0-%EB%B6%88%EC%82%AC%EC%A1%B0%EA%B8%B0%EC%82%AC%EB%8B%A8-%ED%8F%AC%EC%8A%A4%ED%84%B0-600x857.jpg",
  },
];

function App() {
  return (
    <div className='App'>
      <h2>My Movie</h2>
      {myMovies.map((movies) => (
        <Movie
          title={movies.title}
          ranking={movies.ranking}
          picture={movies.image}
          key={movies.id}
        />
      ))}
    </div>
  );
}

//외부 컴포넌트 props 전달 진행부터..

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired,
};

export default App;
