import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchDetails } from "../../api";
import Loader from "../components/Loader";
import "../styles/DetailView.css";

const MovieDetail = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDetails("movie", id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setError("Greška pri dohvaćanju detalja filma.");
        setLoading(false);
      });
  }, [id]);

  const handleBack = () => {
    navigate(location.state?.from || "/movies", {
      state: {
        search: location.state?.search || "",
        tab: location.state?.tab || "movies",
      },
    });
  };

  const trailer = movie?.videos?.results?.find(
    (video) => video.type === "Trailer"
  );

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="detail-view">
      <button className="back-button" onClick={handleBack}>
        ← Natrag
      </button>
      <h1>{movie?.title || "Nema naslova"}</h1>
      {trailer ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={movie?.title || "Trailer"}
          allowFullScreen
        ></iframe>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title || "Poster"}
        />
      )}
      <p>
        <strong>Opis:</strong> {movie?.overview || "Opis nije dostupan"}
      </p>
      <p>
        <strong>Datum izlaska:</strong> {movie?.release_date || "N/A"}
      </p>
      <p>
        <strong>Ocjena:</strong> {movie?.vote_average || "N/A"}
      </p>
    </div>
  );
};

export default MovieDetail;
