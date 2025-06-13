import { useEffect, useState } from "react";
import { Source } from "../../types/Source";
import { getSources } from "../../services/devallApi";
import SearchBar from "../Shared/SearchBar";
import SourceComponent from "./partials/SourceComponent";

const SourceList = () => {
  const [sources, setSources] = useState<Source[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchSources = async () => {
      setLoading(true);
      try {
        const data = await getSources({
          name: searchQuery || undefined,
        });
        if (!data || data.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
          setError(false);
          setSources(data);
        }
      } catch (error) {
        setError(true);
        if (process.env.NODE_ENV === "development") {
          console.error("Erro ao buscar fontes:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    void fetchSources();
  }, [searchQuery]);

  const handleSubmit = (query: string) => {
    setSearchQuery(query);
    setSources([]);
  };

  return (
    <div className="is-display-flex is-flex-direction-column is-flex-grow-1">
      <SearchBar
        onSearchSubmit={handleSubmit}
        noResults={noResults}
        isLoading={loading}
      />

      <SourceComponent isLoading={loading} error={error} sources={sources} />
    </div>
  );
};

export default SourceList;
