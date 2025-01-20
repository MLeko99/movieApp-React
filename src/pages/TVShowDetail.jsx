import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchDetails } from "../../api";
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";
import "../styles/DetailView.css";

const TVShowDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDetails("tv", id)
      .then((data) => {
        console.log("Fetched TV Show Details:", data); // Provjeri podatke u konzoli
        setShow(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching TV show details:", error);
        setError("Greška pri dohvaćanju detalja serije.");
        setLoading(false);
      });
  }, [id]);

  const handleBack = () => {
    navigate(location.state?.from || "/tv", {
      state: {
        search: location.state?.search || "",
        tab: location.state?.tab || "tv",
      },
    });
  };

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="detail-view">
      <BackButton onClick={handleBack} />
      {show ? (
        <>
          <h1>{show.name || "Nema naziva"}</h1>
          {show.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            />
          ) : (
            <p>Nema dostupne slike</p>
          )}
          <p>
            <strong>Opis:</strong> {show.overview || "Opis nije dostupan"}
          </p>
          <p>
            <strong>Prvo emitiranje:</strong> {show?.first_air_date || "N/A"}
          </p>
          <p>
            <strong>Broj sezona:</strong> {show?.number_of_seasons || "N/A"}
          </p>
          <p>
            <strong>Ocjena:</strong> {show?.vote_average || "N/A"}
          </p>
        </>
      ) : (
        <p>Detalji nisu dostupni.</p>
      )}
    </div>
  );
};

export default TVShowDetail;
