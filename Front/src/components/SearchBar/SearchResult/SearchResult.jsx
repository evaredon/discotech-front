// == Import : npm
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// == Import : local
import AlbumCard from '../../Page_Home/AlbumCard/AlbumCard';
import api from '../../../api/api';

// == Import : style
import './SearchResult.scss';
import Loading from '../../Navigation/Loading/Loading';

// == Component
function SearchResult() {
  const { search, type } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data and update DOM
  useEffect(() => {
    setLoading(true);
    setResults([]);

    const fetchResults = () => {
      setTimeout(() => {
        api
          .post(`/${type}/search`, { search: search })
          .then((response) => {
            setResults(response.data);
          })
          .catch((error) => {
            console.log("Erreur, l'API ne fonctionne plus. Rechargez plus tard.");
            console.error(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 500);
    };

    fetchResults();
  }, [search, type]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="SearchResult">
      <h2>{results.length} albums trouvés pour "{search}" </h2>
      <div className="SearchResult-Box">
        {type === 'albums' && results.map((result) => (
          <Link to={`/${type}/${result.id}`} key={`${type}-${result.id}`}>
            <div className="SearchResult-CardWrapper">
              <AlbumCard
                className="AlbumCard"
                albumname={result.name}
                artistfullname={result.artist?.fullname ?? 'Artiste inconnu'}
                image={result.image}
                id={`child-${type}-${result.id}`}
              />
            </div>
          </Link>
        ))}
        {type === 'artists' && results.map((result) => (
          <>
            {(result.albums || []).map((album) => (
              <Link to={`/albums/${album.id}`} key={`album-${album.id}`}>
                <div className="SearchResult-CardWrapper">
                  <AlbumCard
                    className="AlbumCard"
                    artistfullname={result?.fullname ?? 'Artiste inconnu'}
                    key={`child-albums-${album.id}`}
                    albumname={album.name}
                    image={album.image}
                    id={album.id}
                  />
                </div>
              </Link>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

// == Export
export default SearchResult;
